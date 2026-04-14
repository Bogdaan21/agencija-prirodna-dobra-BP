import Aos from "aos";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./Layout/Layout";
import HomePage from "./Pages/HomePage/HomePage";
import AboutPage from "./Pages/AboutPage";
import ServicePage from "./Pages/ServicePage";
import ProjectPage from "./Pages/ProjectPage";
import ContactPage from "./Pages/ContactPage";
import GalleryPage from "./Pages/GalleryPage";
import BlogPage from "./Pages/BlogPage";
import BlogDetailsPage from "./Pages/BlogsDetails";
import ServiceDetailsPage from "./Pages/ServiceDetails";
import ProjectDetailsPage from "./Pages/ProjectDetails";
import FaqPage from "./Pages/FaqPage";
import Layout1 from "./Layout/Layout1";
import Layout3 from "./Layout/Layout3";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ForgotPassword from "./Pages/ForgotPassword";
import Error404 from "./Pages/Error404";
import AdminTable from "./Pages/AdminTable";
import AdminAdd from "./Pages/AdminAdd";
import AdminEdit from "./Pages/AdminEdit";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  Aos.init({
    duration: 1200,
    delay: 0.2,
    disable: "mobile",
    once: true,
  });
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout1 />}>
          <Route index element={<HomePage />} />
          <Route path="/services" element={<ServicePage />} />
        </Route>

        <Route path="/" element={<Layout />}>
          <Route path="/about" element={<AboutPage />} />

          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/news" element={<BlogPage />} />
          <Route path="/news/:slug" element={<BlogDetailsPage />} />

          <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
          <Route path="/faq" element={<FaqPage />} />
        </Route>

        <Route path="/" element={<Layout3 />}>
          <Route path="/services/:serviceId" element={<ServiceDetailsPage />} />
        </Route>
        <Route path="/login" element={<Login />} />

        <Route
          path="/admintable"
          element={
            <PrivateRoute>
              <AdminTable />
            </PrivateRoute>
          }
        />

        <Route
          path="/adminadd"
          element={
            <PrivateRoute>
              <AdminAdd />
            </PrivateRoute>
          }
        />

        <Route
          path="/adminedit/:id"
          element={
            <PrivateRoute>
              <AdminEdit />
            </PrivateRoute>
          }
        />

        <Route path="/signup" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
