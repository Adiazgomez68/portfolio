import Head from "next/head";
import Footer from "../components/shared/footer/Footer";
import Header from "../components/shared/NavBar/Header";
import SidebarMenu from "../components/shared/Sidebar/SidebarMenu";
import ClickSpark from "../components/motions/ClickSpark";

const MainLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title> Andrés Díaz - Frontend Developer </title>
        <meta
          name="description"
          content="This is my portfolio created with NextJs and Tailwind Css. Here i show my jobs and my work experience."
        />
      </Head>

      <div className="relative flex flex-col w-full h-full">
        <Header />
        <SidebarMenu />
        <div className="flex flex-col w-full my-5">
          <ClickSpark
            sparkColor="#fff"
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
          >
            {children}
          </ClickSpark>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
