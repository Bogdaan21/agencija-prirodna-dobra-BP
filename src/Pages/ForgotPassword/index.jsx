import React, { useState } from "react";
import { Link } from "react-router-dom";
import { pageTitle } from "../../helper";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    // Clear error and log the data
    setError("");
    console.log({ email, remember });

    // Simulate password recovery API call
    alert("Password recovery instructions sent!");
  };

  pageTitle("Forgot Password | LeafLife");
  return (
    <div className="cs_card cs_style_10">
      <div className="cs_card_left">
        <div className="cs_card_card_out">
          <Link to="/" className="cs_login_logo">
            <img src="/assets/img/logo_2.svg" alt="Logo" />
          </Link>
          <div className="cs_card_card_in">
            <h1 className="cs_section_title cs_fs_32 cs_bold cs_medium cs_mb_30">
              Recover your password
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="cs_mb_15">
                <label>Your registered Email Address*</label>
                <input
                  type="email"
                  className="cs_form_field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </div>
              <div className="cs_card_row_1 cs_mb_15">
                <div>
                  <div className="cs_custom_checkbox">
                    <input
                      className="cs_custom_checkbox_input"
                      type="checkbox"
                      checked={remember}
                      onChange={(e) => setRemember(e.target.checked)}
                    />
                    <label className="cs_custom_checkbox_label">
                      Remember me
                    </label>
                  </div>
                </div>
              </div>
              {error && (
                <div className="cs_error_message cs_mb_15">
                  <p>{error}</p>
                </div>
              )}
              <div className="cs_mb_20">
                <button
                  type="submit"
                  className="cs_btn cs_style_1 cs_type_1 cs_bold cs_heading_bg cs_white_color w-100"
                >
                  <b>Submit</b>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        className="cs_card_right cs_bg_filed"
        style={{
          backgroundImage: `url(/assets/img/login_img.jpg)`,
        }}
      />
    </div>
  );
}

export default ForgotPassword;
