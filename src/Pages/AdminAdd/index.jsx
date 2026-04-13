import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import JoditEditor from "jodit-react";
import imageCompression from "browser-image-compression";
import { pageTitle } from "../../helper";
import { db, storage } from "../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

function AdminAdd() {
  const navigate = useNavigate();

  const [titleMe, setTitleMe] = useState("");
  const [titleEn, setTitleEn] = useState("");
  const [contentMe, setContentMe] = useState("");
  const [contentEn, setContentEn] = useState("");

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const [gallery, setGallery] = useState([]);
  const [galleryPreview, setGalleryPreview] = useState([]);

  const [date, setDate] = useState(() => new Date().toISOString().split("T")[0]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  pageTitle("Add Blog | LeafLife");

  const editorConfig = useMemo(
    () => ({
      readonly: false,
      height: 400,
      placeholder: "Write blog content here...",
      askBeforePasteHTML: false,
      askBeforePasteFromWord: false,
      enableDragAndDropFileToEditor: true,
      buttons: [
        "source",
        "|",
        "bold",
        "italic",
        "underline",
        "|",
        "ul",
        "ol",
        "|",
        "outdent",
        "indent",
        "|",
        "fontsize",
        "paragraph",
        "|",
        "image",
        "link",
        "|",
        "align",
        "undo",
        "redo",
        "|",
        "hr",
        "eraser",
        "fullsize",
      ],
      uploader: {
        insertImageAsBase64URI: true,
      },
    }),
    [],
  );

const compressImage = async (file) => {
  try {
    const compressedFile = await imageCompression(file, {
      maxSizeMB: 0.5, // ~500KB
      maxWidthOrHeight: 1920, // veća rezolucija
      initialQuality: 0.8, // bitno za kvalitet (default je niži)
      useWebWorker: true,
    });

    return new File([compressedFile], file.name, {
      type: "image/jpeg", // forsiraj JPEG za bolju kompresiju
    });
  } catch (err) {
    console.error("Image compression error:", err);
    return file;
  }
};

  const handleImageChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const compressedFile = await compressImage(file);
    setImage(compressedFile);
    setPreview(URL.createObjectURL(compressedFile));
  };

  const handleGalleryChange = async (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    try {
      const compressedFiles = await Promise.all(
        files.map(async (file) => {
          const compressed = await compressImage(file);
          return compressed;
        }),
      );

      setGallery(compressedFiles);
      setGalleryPreview(compressedFiles.map((file) => URL.createObjectURL(file)));
    } catch (err) {
      console.error("Gallery compression error:", err);
      setError("Failed to process gallery images.");
    }
  };

  const removeGalleryImage = (indexToRemove) => {
    setGallery((prev) => prev.filter((_, index) => index !== indexToRemove));
    setGalleryPreview((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  const stripHtml = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  const createExcerpt = (html, maxLength = 140) => {
    const text = stripHtml(html).trim();
    if (text.length <= maxLength) return text;
    return `${text.slice(0, maxLength)}...`;
  };

  const generateSlug = (text) => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "dj")
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  };

  const uploadSingleImage = async (file, folder = "blogs") => {
    const fileExtension = file.name.split(".").pop();
    const cleanName = file.name.replace(/\.[^/.]+$/, "");
    const safeName = generateSlug(cleanName || "image");
    const fileName = `${Date.now()}-${safeName}.${fileExtension}`;

    const storageRef = ref(storage, `${folder}/${fileName}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);

    return {
      url,
      fileName,
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!titleMe.trim() || !titleEn.trim()) {
      setError("Title is required in both languages.");
      return;
    }

    if (!contentMe || stripHtml(contentMe).trim() === "") {
      setError("Content in Montenegrin is required.");
      return;
    }

    if (!contentEn || stripHtml(contentEn).trim() === "") {
      setError("Content in English is required.");
      return;
    }

    if (!image) {
      setError("Please upload a cover image.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const coverUpload = await uploadSingleImage(image, "blogs");
      const imageUrl = coverUpload.url;
      const imageName = coverUpload.fileName;

      const galleryUploads = await Promise.all(
        gallery.map(async (file) => {
          const uploaded = await uploadSingleImage(file, "blogs/gallery");
          return uploaded.url;
        }),
      );

      const blogData = {
        title: {
          me: titleMe.trim(),
          en: titleEn.trim(),
        },
        content: {
          me: contentMe,
          en: contentEn,
        },
        excerpt: {
          me: createExcerpt(contentMe),
          en: createExcerpt(contentEn),
        },
        slug: generateSlug(titleEn || titleMe),
        date,
        imageUrl,
        imageName,
        gallery: galleryUploads,
        createdAt: serverTimestamp(),
      };

      await addDoc(collection(db, "blogs"), blogData);

      alert("Blog saved successfully!");
      navigate("/admintable");
    } catch (err) {
      console.error(err);
      setError("Something went wrong while saving the blog.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="cs_admin_table_section cs_gray_bg">
      <div className="container">
        <div className="cs_admin_topbar d-flex justify-content-between align-items-center">
          <Link to="/" className="cs_login_logo">
            <img src="/assets/img/logo_2.svg" alt="Logo" />
          </Link>

          <div className="d-flex align-items-center gap-3">
            <Link to="/admintable" className="cs_btn cs_style_1 cs_type_1 cs_bold cs_heading_bg cs_white_color">
              <b>Back to Table</b>
            </Link>
          </div>
        </div>

        <div className="cs_card cs_style_10 cs_add_blog_card">
          <div className="cs_card_card_in w-100">
            <div className="cs_admin_table_header">
              <h1 className="cs_section_title cs_fs_32 cs_bold cs_medium cs_mb_10">Add Blog Post</h1>
            </div>

            <form onSubmit={handleSubmit} className="cs_add_blog_form">
              <div className="row">
                <div className="col-lg-6">
                  <div className="cs_mb_20">
                    <label>Title (Crnogorski)*</label>
                    <input
                      type="text"
                      className="cs_form_field admin_cms"
                      value={titleMe}
                      onChange={(e) => setTitleMe(e.target.value)}
                      placeholder="Unesite naslov na crnogorskom"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="cs_mb_20">
                    <label>Title (English)*</label>
                    <input
                      type="text"
                      className="cs_form_field admin_cms"
                      value={titleEn}
                      onChange={(e) => setTitleEn(e.target.value)}
                      placeholder="Enter title in English"
                    />
                  </div>
                </div>
              </div>

              <div className="cs_mb_20">
                <label>Publish Date*</label>
                <input
                  type="date"
                  className="cs_form_field admin_cms"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <div className="cs_mb_20">
                <label>Cover Image*</label>
                <input
                  type="file"
                  accept="image/*"
                  className="cs_form_field cs_file_input"
                  onChange={handleImageChange}
                />
              </div>

              {preview && (
                <div className="cs_add_blog_preview cs_mb_20">
                  <img src={preview} alt="Preview" />
                </div>
              )}

              <div className="cs_mb_20">
                <label>Gallery Images</label>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="cs_form_field cs_file_input"
                  onChange={handleGalleryChange}
                />
              </div>

              {galleryPreview.length > 0 && (
                <div className="cs_mb_20" style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  {galleryPreview.map((img, index) => (
                    <div
                      key={index}
                      style={{
                        position: "relative",
                        width: "110px",
                        height: "110px",
                        borderRadius: "8px",
                        overflow: "hidden",
                      }}
                    >
                      <img
                        src={img}
                        alt={`Gallery Preview ${index + 1}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => removeGalleryImage(index)}
                        style={{
                          position: "absolute",
                          top: "6px",
                          right: "6px",
                          border: "none",
                          background: "rgba(0,0,0,0.7)",
                          color: "#fff",
                          width: "24px",
                          height: "24px",
                          borderRadius: "50%",
                          cursor: "pointer",
                          fontSize: "12px",
                        }}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <div className="row">
                <div className="col-12">
                  <div className="cs_mb_20">
                    <label>Content (Crnogorski)*</label>
                    <div className="cs_editor_wrap">
                      <JoditEditor
                        value={contentMe}
                        config={{
                          ...editorConfig,
                          placeholder: "Unesite sadržaj na crnogorskom...",
                        }}
                        onBlur={(newContent) => setContentMe(newContent)}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <div className="cs_mb_20">
                    <label>Content (English)*</label>
                    <div className="cs_editor_wrap">
                      <JoditEditor
                        value={contentEn}
                        config={{
                          ...editorConfig,
                          placeholder: "Enter content in English...",
                        }}
                        onBlur={(newContent) => setContentEn(newContent)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {error && (
                <div className="cs_error_message cs_mb_20">
                  <p>{error}</p>
                </div>
              )}

              <div className="cs_add_blog_actions">
                <button
                  type="submit"
                  disabled={loading}
                  className="cs_btn cs_style_1 cs_type_1 cs_bold cs_heading_bg cs_white_color"
                >
                  <b>{loading ? "Saving..." : "Save Blog"}</b>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminAdd;
