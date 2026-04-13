import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer2 from "../Components/Footer/Footer2";

const Layout2 = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer2 />
    </div>
  );
};

export default Layout2;
