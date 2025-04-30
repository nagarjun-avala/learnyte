import React from "react";
import Layout from "../components/Layout/layout";

const Contact = () => {
  return (
    <Layout title={"svit-results | Contact Us"}>
      <div className="row text-center w-100 contact">
        <div className="col-md-6">Photo</div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            any query and info about product feel free to call anytime we 24x7
            available
          </p>
          <p className="p mt-3">www.svit-result@app.com</p>
          <p className="mt-3">123-4567890</p>
          <p className="mt-3">1800-0000-0000 (toll free)</p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
