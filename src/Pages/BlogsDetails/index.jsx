import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import BlogDetailsSection from "../../Components/BlogsDetails";
import PageHeading from "../../Components/PageHeading";
import { pageTitle } from "../../helper";
import { db } from "../../firebase";
import { useLanguage } from "../../context/LanguageContext";

export default function BlogDetailsPage() {
  const { slug } = useParams();

  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState(null);

  const { language } = useLanguage();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);

        const blogsRef = collection(db, "blogs");
        const q = query(blogsRef, where("slug", "==", slug));
        const snapshot = await getDocs(q);

        if (snapshot.empty) {
          setBlogData(null);
          return;
        }

        const firebaseBlog = snapshot.docs[0].data();

        const mappedBlog = {
          postThumb: firebaseBlog.imageUrl || "/assets/img/post_1.jpg",
          date: formatDate(firebaseBlog.date),
          category: {
            title: language === "me" ? "Novosti" : "Blog",
            url: "/blog",
          },
          title:
            firebaseBlog?.title?.[language] || firebaseBlog?.title?.en || firebaseBlog?.title?.me || "Untitled Post",
          content: [
            {
              type: "html",
              html: firebaseBlog?.content?.[language] || firebaseBlog?.content?.en || firebaseBlog?.content?.me || "",
            },
          ],
          gallery: firebaseBlog.gallery || [],
          sections: [],
          videoUrl: "",
          closingParagraph: "",
          property: {
            title: "",
            description: "",
          },
        };

        setBlogData(mappedBlog);

        pageTitle(`${firebaseBlog?.title?.en || firebaseBlog?.title?.me || "Blog Details"} | LeafLife`);
      } catch (error) {
        console.error("Error fetching blog:", error);
        setBlogData(null);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  const breadcrumbsData = {
    backgroundImage: "/assets/img/about_heading_bg.jpg",
    breadcrumbs: [
      { label: language === "me" ? "Početna" : "Home", link: "/" },
      { label: language === "me" ? "Novosti" : "Blog", link: "/blog" },
    ],
    title: blogData?.title || "Blog Details",
  };

  if (loading) {
    return (
      <section>
        <div className="cs_height_100 cs_height_lg_70" />
        <div className="container">
          <p>Loading blog details...</p>
        </div>
        <div className="cs_height_100 cs_height_lg_70" />
      </section>
    );
  }

  if (!blogData) {
    return (
      <>
        <PageHeading
          data={{
            backgroundImage: "/assets/img/about_heading_bg.jpg",
            breadcrumbs: [
              { label: "Home", link: "/" },
              { label: "Blog", link: "/blog" },
              { label: "Not Found", active: true },
            ],
            title: "Blog Not Found",
          }}
        />
        <section>
          <div className="cs_height_100 cs_height_lg_70" />
          <div className="container">
            <p>
              {language === "me"
                ? "Blog objava koju tražite ne postoji."
                : "The blog post you are looking for does not exist."}
            </p>
          </div>
          <div className="cs_height_100 cs_height_lg_70" />
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeading data={breadcrumbsData} />
      <section>
        <div className="cs_height_100 cs_height_lg_70" />
        <div className="container">
          <div className="row d-flex justify-content-center">
            <BlogDetailsSection data={blogData} />
          </div>
        </div>
        <div className="cs_height_100 cs_height_lg_70" />
      </section>
    </>
  );
}

function formatDate(dateValue) {
  if (!dateValue) return "";

  const dateObj = new Date(dateValue);
  if (Number.isNaN(dateObj.getTime())) return dateValue;

  const day = String(dateObj.getDate()).padStart(2, "0");
  const month = dateObj.toLocaleString("en-US", { month: "short" });
  const year = dateObj.getFullYear();

  return `${day} ${month} ${year}`;
}
