import Header from "../components/shared/Header";

const MainLayout = ({ children }) => {
  return (
    <div className="relative flex flex-col w-full">
      <Header />
      <div className="flex flex-col w-full"> {children} </div>
    </div>
  );
};

export default MainLayout;
