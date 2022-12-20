import React from "react";
import Layout from "../layout/Layout";
import Breadcrumb from "../components/common/Breadcrumb";
import ContactForm from "../components/contact/ContactForm";
import ContactAddress from "../components/contact/ContactAddress";
import ContactMap from "../components/contact/ContactMap";
function ContactPage() {
  return (
    <Layout>
      <Breadcrumb pageName="Contact Us" pageTitle="Contact Us" />
      <ContactAddress />
      <ContactForm />
      <ContactMap/>
    </Layout>
  );
}

export default ContactPage;
