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
            url: "/news",
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
          documents: firebaseBlog.documents || [],
          sections: [],
          videoUrl: "",
          closingParagraph: "",
          property: {
            title: "",
            description: "",
          },
        };

        setBlogData(mappedBlog);

        const seoDescription =
          firebaseBlog?.excerpt?.[language] ||
          firebaseBlog?.excerpt?.en ||
          firebaseBlog?.excerpt?.me ||
          stripHtml(firebaseBlog?.content?.[language]) ||
          stripHtml(firebaseBlog?.content?.en) ||
          stripHtml(firebaseBlog?.content?.me) ||
          (language === "me"
            ? "Detaljna objava Agencije za upravljanje prirodnim dobrima."
            : "Detailed news post from the Agency for Management of Natural Assets.");

        pageTitle(`${mappedBlog.title} | Agencija za upravljanje prirodnim dobrima`, {
          description: seoDescription,
          path: `/news/${slug}`,
          image: mappedBlog.postThumb,
          type: "article",
          locale: language,
          structuredData: {
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: mappedBlog.title,
            description: seoDescription,
            image: [getAbsoluteSchemaUrl(mappedBlog.postThumb)],
            datePublished: normalizeSchemaDate(firebaseBlog.createdAt || firebaseBlog.date),
            dateModified: normalizeSchemaDate(firebaseBlog.updatedAt || firebaseBlog.createdAt || firebaseBlog.date),
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://aupd.me/news/${slug}`,
            },
            publisher: {
              "@type": "GovernmentOrganization",
              name: "Agencija za upravljanje prirodnim dobrima",
              url: "https://aupd.me",
              logo: {
                "@type": "ImageObject",
                url: "https://aupd.me/assets/img/logo.png",
              },
            },
          },
        });
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
  }, [slug, language]);

  const breadcrumbsData = {
    backgroundImage: "/assets/img/about_heading_bg.jpg",
    breadcrumbs: [
      { label: language === "me" ? "Početna" : "Home", link: "/" },
      { label: language === "me" ? "Novosti" : "News", link: "/news" },
    ],
    title: language === "me" ? "Novosti" : "News",
    titleTag: "div",
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
    pageTitle(
      language === "me"
        ? "Objava nije pronađena | Agencija za upravljanje prirodnim dobrima"
        : "Post Not Found | Agency for Management of Natural Assets",
      {
        description:
          language === "me"
            ? "Tražena objava ne postoji ili je premještena."
            : "The requested news post does not exist or has been moved.",
        path: `/news/${slug || ""}`,
        noIndex: true,
        locale: language,
      },
    );

    return (
      <>
        <PageHeading
          data={{
            backgroundImage: "/assets/img/about_heading_bg.jpg",
            breadcrumbs: [
              { label: "Home", link: "/" },
              { label: "News", link: "/news" },
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

function stripHtml(html) {
  if (!html) return "";
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
}

function normalizeSchemaDate(dateValue) {
  if (!dateValue) return undefined;

  if (typeof dateValue.toDate === "function") {
    return dateValue.toDate().toISOString();
  }

  const dateObj = new Date(dateValue);
  if (Number.isNaN(dateObj.getTime())) return undefined;

  return dateObj.toISOString();
}

function getAbsoluteSchemaUrl(url) {
  if (!url) return "https://aupd.me/assets/img/cover-hero.jpg";
  if (/^https?:\/\//i.test(url)) return url;
  return `https://aupd.me${url.startsWith("/") ? url : `/${url}`}`;
}
