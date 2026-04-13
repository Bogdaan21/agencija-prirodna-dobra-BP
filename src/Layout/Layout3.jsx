import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer2 from "../Components/Footer/Footer2";
import Header2 from "../Components/Header/Header2";

const Layout3 = () => {
  return (
    <div>
      <Header2 />
      <Outlet />
      <Footer2 />
    </div>
  );
};

export default Layout3;
