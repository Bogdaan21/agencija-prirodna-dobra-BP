import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { pageTitle } from "../../helper";
import { Icon } from "@iconify/react/dist/iconify.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, browserLocalPersistence, browserSessionPersistence, setPersistence } from "../../firebase";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    pageTitle("Login | LeafLife");

    return () => {
      setPassword("");
    };
  }, []);

  const getFirebaseErrorMessage = (code) => {
    switch (code) {
      case "auth/invalid-email":
        return "Email adresa nije ispravna.";
      case "auth/user-disabled":
        return "Ovaj nalog je onemogućen.";
      case "auth/user-not-found":
        return "Korisnik sa ovom email adresom ne postoji.";
      case "auth/wrong-password":
        return "Pogrešna lozinka.";
      case "auth/invalid-credential":
        return "Pogrešan email ili lozinka.";
      case "auth/too-many-requests":
        return "Previše pokušaja. Pokušaj ponovo kasnije.";
      default:
        return "Došlo je do greške prilikom prijave.";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      await setPersistence(auth, browserLocalPersistence || browserSessionPersistence);

      await signInWithEmailAndPassword(auth, email, password);

      alert("Login successful!");
      navigate("/admintable");
    } catch (err) {
      setError(getFirebaseErrorMessage(err.code));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cs_card cs_style_10">
      <div className="cs_card_left">
        <div className="cs_card_card_out">
          <Link to="/" className="cs_login_logo">
            <img src="/assets/img/logo_2.svg" alt="Logo" />
          </Link>

          <div className="cs_card_card_in">
            <h1 className="cs_section_title cs_fs_32 cs_bold cs_medium cs_mb_30">Login with your account</h1>

            <form onSubmit={handleSubmit}>
              <div className="cs_mb_15">
                <label>Email*</label>
                <input
                  type="email"
                  className="cs_form_field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </div>

              <div className="cs_mb_15">
                <label>Password*</label>
                <input
                  type="password"
                  className="cs_form_field"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
              </div>

              <div className="cs_card_row_1 cs_mb_15"></div>

              {error && (
                <div className="cs_error_message cs_mb_15">
                  <p>{error}</p>
                </div>
              )}

              <div className="cs_mb_20">
                <button
                  type="submit"
                  disabled={loading}
                  className="cs_btn cs_style_1 cs_type_1 cs_bold cs_heading_bg cs_white_color w-100"
                >
                  <b>{loading ? "Logging in..." : "Login"}</b>
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

export default Login;
