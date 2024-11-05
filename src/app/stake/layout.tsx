// /stake/layout.tsx

import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function StakeLayout({ children }: LayoutProps) {
  return (
    <div>
      {/* <Navbar/> */}
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
