import React, { useEffect, useMemo, useState } from "react";
import PageHeading from "../../Components/PageHeading";
import BlogSection from "../../Components/BlogSection";
import { pageTitle } from "../../helper";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";

const BreadcrumbsData = {
  backgroundImage: "/assets/img/about_heading_bg.jpg",
  title: "Latest Post",
  breadcrumbs: [
    { label: "Home", link: "/" },
    { label: "Blog", active: true },
  ],
};

export default function BlogPage() {
  pageTitle("Blog | LeafLife");

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsRef = collection(db, "blogs");
        const q = query(blogsRef, orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);

        const blogsData = querySnapshot.docs.map((docItem) => {
          const data = docItem.data();

          return {
            id: docItem.id,
            image: data.imageUrl || "/assets/img/post_1.jpg",
            date: formatDate(data.date),
            category: "Blog",
            title: data?.title?.en || data?.title?.me || "Untitled Post",
            description:
              data?.excerpt?.en ||
              stripHtml(data?.content?.en) ||
              data?.excerpt?.me ||
              stripHtml(data?.content?.me) ||
              "",
            link: `/blog/${data.slug || docItem.id}`,
          };
        });

        setPosts(blogsData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const blogData = useMemo(() => {
    return {
      posts,
      pagination: [1],
    };
  }, [posts]);

  return (
    <>
      <PageHeading data={BreadcrumbsData} />

      <section>
        <div className="cs_height_100 cs_height_lg_70" />
        <div className="container">
          <div className="row d-flex justify-content-center">
            {loading ? (
              <div className="col-lg-8">
                <p>Loading blog posts...</p>
              </div>
            ) : (
              <BlogSection data={blogData} />
            )}
          </div>
        </div>
        <div className="cs_height_100 cs_height_lg_70" />
      </section>
    </>
  );
}

function stripHtml(html) {
  if (!html) return "";
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
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