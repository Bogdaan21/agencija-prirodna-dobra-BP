import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer1 from "../Components/Footer/Footer1";

const Layout1 = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer1 />
    </div>
  );
};

export default Layout1;
