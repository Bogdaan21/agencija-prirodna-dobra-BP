import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { collection, getDocs, orderBy, query, limit } from "firebase/firestore";
import { db } from "../../firebase";

export default function WorksSection() {
  const swiperRef = useRef(null);
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsRef = collection(db, "blogs");
        const q = query(blogsRef, orderBy("createdAt", "desc"), limit(6));
        const querySnapshot = await getDocs(q);

        const blogsData = querySnapshot.docs.map((docItem) => {
          const blog = docItem.data();

          return {
            id: docItem.id,
            slug: blog.slug || docItem.id,
            image: blog.imageUrl || "/assets/img/post_1.jpg",
            name: blog?.title?.en || blog?.title?.me || "Untitled Post",
            location: formatDate(blog.date) || "News",
            description:
              blog?.excerpt?.en ||
              blog?.excerpt?.me ||
              stripHtml(blog?.content?.en) ||
              stripHtml(blog?.content?.me) ||
              "",
          };
        });

        setSlides(blogsData);
      } catch (error) {
        console.error("Error fetching news posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section>
      <div className="cs_height_100 cs_height_lg_70" />
      <div className="container">
        <div className="cs_section_heading cs_style_2 cs_color_1">
          <h2
            className="cs_section_title cs_fs_80 mb-0"

            data-aos="fade-down"
          >Latest Posts</h2>
          <div className="cs_section_right">
            <h3
              className="cs_brackets_title cs_normal cs_fs_16 mb-0"
              See
            >See All posts</h3>
          </div>
        </div>

        <div className="cs_height_64 cs_height_lg_50" />

        {loading ? (
          <p>Loading news...</p>
        ) : (
          <div className="cs_full_width_slider_section">
            <div className="cs_slider cs_style_1 cs_slider_gap_24">
              <Swiper
                modules={[Navigation]}
                spaceBetween={24}
                slidesPerView="auto"
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                speed={800}
                loop={slides.length > 1}
                centeredSlides={false}
              >
                {slides.map((slide, index) => (
                  <SwiperSlide
                    className="cs_slide"
                    key={slide.id || index}
                    style={{ width: "auto" }}
                  >
                    <div className="cs_card cs_style_4">
                      <Link to={`/news/${slide.slug}`}>
                        <div
                          className="cs_card_thumb cs_bg_filed cs_mb_40"
                          style={{
                            backgroundImage: `url(${slide.image})`,
                          }}
                        />
                      </Link>

                      <div className="cs_card_info">
                        <ul className="cs_card_info_list cs_mp_0">
                          <li>
                            <p className="mb-0">TITLE</p>
                            <h3 className="mb-0 cs_fs_20 cs_bold">
                              {slide.name}
                            </h3>
                          </li>
                          <li>
                            <p className="mb-0">DATE</p>
                            <h3 className="mb-0 cs_fs_20 cs_bold">
                              {slide.location}
                            </h3>
                          </li>
                        </ul>

                        <div className="cs_card_text">{slide.description}</div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="cs_slider_arrows cs_style_3 cs_hide_lg">
                <div
                  className="cs_right_arrow cs_heading_color cs_fs_20 cs_center"
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    backgroundColor: "rgba(255, 255, 255, 0.75)",
                    height: "480px",
                    width: "calc(100% - 1087px)",
                    WebkitTransition: "all 0.3s ease",
                    transition: "all 0.3s ease",
                    zIndex: 1,
                    cursor: "pointer",
                  }}
                  onClick={() => swiperRef.current?.slideNext()}
                >
                  <span className="cs_center">NEXT</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="cs_height_100 cs_height_lg_70" />
    </section>
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