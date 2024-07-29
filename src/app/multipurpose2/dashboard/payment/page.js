import Breadcrumb7 from "@/components/common/Breadcrumb7";
import InnerPageFooter7 from "@/components/footer/InnerPageFooter7";
import Header7 from "@/components/header/Header7";
import Link from "next/link";

const PaymentPage = () => {
  return (
    <>
      <Header7 />
      <Breadcrumb7 pagetitle={"My Auction"} currentPage={"My Auction"} />
      <InnerPageFooter7 />
    </>
  );
};

export default PaymentPage;
