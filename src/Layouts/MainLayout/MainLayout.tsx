import { PropsWithChildren, ReactNode } from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
