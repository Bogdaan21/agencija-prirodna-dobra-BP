import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

export default function BlogSection({ data }) {
  const POSTS_PER_PAGE = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil((data.posts?.length || 0) / POSTS_PER_PAGE);

  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    return data.posts.slice(startIndex, endIndex);
  }, [data.posts, currentPage]);

  const pages = useMemo(() => {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }, [totalPages]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <div className="col-lg-8">
      <div className="cs_post_1_list">
        {paginatedPosts.map((post) => (
          <div className="cs_post cs_style_1" key={post.id}>
            <Link to={post.link} className="cs_post_thumb cs_radius_15">
              <img src={post.image} alt="Post" className="w-100 cs_radius_15" />
            </Link>

            <div className="cs_post_info">
              <div className="cs_post_meta cs_style_1">
                <span className="cs_posted_by">{post.date}</span>
                <Link
                  to="#"
                  className="cs_post_avatar"
                  dangerouslySetInnerHTML={{ __html: post.category }}
                />
              </div>

              <h2 className="cs_post_title cs_fs_40">
                <Link
                  to={post.link}
                  dangerouslySetInnerHTML={{ __html: post.title }}
                />
              </h2>

              <div
                className="cs_post_sub_title"
                dangerouslySetInnerHTML={{ __html: post.description }}
              />

              <Link
                to={post.link}
                className="cs_btn cs_style_2 cs_bold cs_heading_color"
              >
                See More
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="cs_height_60 cs_height_lg_40" />

      {totalPages > 1 && (
        <ul className="cs_pagination_box cs_center cs_mp_0">
          {pages.map((page) => (
            <li key={page}>
              <button
                type="button"
                className={`cs_pagination_item cs_center ${
                  page === currentPage ? "active" : ""
                }`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            </li>
          ))}

          <li>
            <button
              type="button"
              className="cs_pagination_item cs_center"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              <svg
                width={7}
                height={12}
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 1.272L4.55116 6L0 10.728L1.22442 12L7 6L1.22442 0L0 1.272Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}