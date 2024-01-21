import Footer from "@/components/footer/Footer";
import Header2 from "@/components/header/Header2";

const layout = ({ children }) => {
  return (
    <>
      <Header2 />
      {children}
      <Footer />
    </>
  );
};

export default layout;
