import Head from "next/head";
import Footer from "../components/shared/footer/Footer";
import Header from "../components/shared/NavBar/Header";
import SidebarMenu from "../components/shared/Sidebar/SidebarMenu";

const MainLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title> Andrés Díaz - Web Developer </title>
        <meta
          name="description"
          content="This is my portfolio created with NextJs and Tailwind Css. Here i show my jobs and my work experience."
        />
      </Head>

      <div className="relative flex flex-col w-full h-screen">
        <Header />
        <SidebarMenu />
        <div className="flex flex-col w-full my-7"> {children} </div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
