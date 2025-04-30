import React from "react";
import Footer from "./footer";
import Header from "./header";
import { Helmet } from "react-helmet";
import Alert from "../alert/Alert";


const Layout = ({
  children,
  title = `${import.meta.env.VITE_APP_NAME}.com`,
  description,
  keywords,
  author,
}) => {
  return (
    <>
      <Helmet>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>

      <Alert />

      <Header />
      <main className="" style={{ minHeight: "70dvh" }}>
        {children}
      </main>
      <Footer />
    </>
  );
};

Layout.defaultProps = {
  description:
    `${import.meta.env.VITE_APP_NAME}, an exclusive community based learning platform for you to find people who have the same passion as you to grow their skills`,
  keywords:
    "mern,react,node,js,javascript,mongodb,Learnyte,exclusive,community,learning,platform ,passion,skills",
  author: "Nagarjun",
};

export default Layout;
