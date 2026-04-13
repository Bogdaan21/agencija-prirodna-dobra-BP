import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { collection, deleteDoc, doc, getDocs, orderBy, query } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { pageTitle } from "../../helper";
import { Icon } from "@iconify/react";

function AdminTable() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    pageTitle("Admin Table | LeafLife");

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        navigate("/login");
        return;
      }

      setUser(currentUser);
      await fetchBlogs();
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  const fetchBlogs = async () => {
    try {
      const blogsRef = collection(db, "blogs");
      const q = query(blogsRef, orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);

      const blogsData = querySnapshot.docs.map((docItem) => ({
        id: docItem.id,
        ...docItem.data(),
      }));

      setBlogs(blogsData);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const handleAddBlog = () => {
    navigate("/adminadd");
  };

  const handleEdit = (id) => {
    navigate(`/adminedit/${id}`);
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this blog post?");
    if (!confirmed) return;

    try {
      await deleteDoc(doc(db, "blogs", id));
      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  const stripHtml = (html) => {
    if (!html) return "";
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  const truncateText = (text, maxLength = 90) => {
    if (!text) return "";
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  };

  const formatDate = (dateValue) => {
    if (!dateValue) return "-";

    const dateObj = new Date(dateValue);
    if (Number.isNaN(dateObj.getTime())) return dateValue;

    return dateObj.toLocaleDateString("sr-RS");
  };

  const sortedBlogs = useMemo(() => {
    return [...blogs].sort((a, b) => {
      if (!a.date) return 1;
      if (!b.date) return -1;
      return new Date(b.date) - new Date(a.date);
    });
  }, [blogs]);

  if (loading) {
    return (
      <div className="cs_admin_table_loading">
        <p>Loading admin panel...</p>
      </div>
    );
  }

  return (
    <section className="cs_admin_table_section cs_gray_bg">
      <div className="container">
        <div className="cs_admin_topbar d-flex justify-content-between align-items-center">
          <Link to="/" className="cs_login_logo">
            <img src="/assets/img/logo_2.svg" alt="Logo" />
          </Link>

          <div className="d-flex align-items-center gap-3">
            <div className="cs_admin_user_box text-end">
              <span className="cs_admin_user_box_label">Logged in as</span>
              <span className="cs_admin_user_box_email">{user?.email || "Admin"}</span>
            </div>

            <button
              type="button"
              className="cs_btn cs_style_1 cs_type_1 cs_bold cs_heading_bg cs_white_color"
              onClick={handleLogout}
            >
              <b>Logout</b>
            </button>
          </div>
        </div>

        <div className="cs_card cs_style_10 cs_admin_table_card">
          <div>
            <div className="cs_card_card_in w-100">
              <div className="cs_admin_table_header">
                <div>
                  <h1 className="cs_section_title cs_fs_32 cs_bold cs_medium cs_mb_10">
                    Blog Posts
                  </h1>
                  <p className="cs_admin_table_subtitle">
                    Manage your blog content from this table.
                  </p>
                </div>

                <button
                  type="button"
                  className="cs_btn cs_style_1 cs_type_1 cs_bold cs_heading_bg cs_white_color"
                  onClick={handleAddBlog}
                >
                  <b>Add Blog</b>
                </button>
              </div>

              <div className="cs_admin_table_wrap">
                <table className="cs_admin_table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Title</th>
                      <th>Content</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>

                  <tbody>
                    {sortedBlogs.length > 0 ? (
                      sortedBlogs.map((blog) => (
                        <tr key={blog.id}>
                          <td>{formatDate(blog.date)}</td>
                          <td>{blog?.title?.me || blog?.title?.en || "-"}</td>
                          <td>
                            {truncateText(
                              blog?.excerpt?.me ||
                                stripHtml(blog?.content?.me) ||
                                blog?.excerpt?.en ||
                                stripHtml(blog?.content?.en)
                            )}
                          </td>

                          <td>
                            <button
                              type="button"
                              className="cs_admin_action_btn cs_admin_edit_btn"
                              onClick={() => handleEdit(blog.id)}
                            >
                              <span className="cs_admin_btn_content">
                                <i>
                                  <Icon icon="mdi:pencil" width="16" height="16" />
                                </i>
                                Edit
                              </span>
                            </button>
                          </td>

                          <td>
                            <button
                              type="button"
                              className="cs_admin_action_btn cs_admin_delete_btn"
                              onClick={() => handleDelete(blog.id)}
                            >
                              <span className="cs_admin_btn_content">
                                <i>
                                  <Icon icon="mdi:trash-can" width="16" height="16" />
                                </i>
                                Delete
                              </span>
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5" className="cs_admin_table_empty">
                          No blog posts found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdminTable;