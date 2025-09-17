import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Sticky from "../components/Sticky";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Sticky />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
