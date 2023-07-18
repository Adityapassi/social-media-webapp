import Navbar from "../components/navbar/Navbar";
import LeftSidebar from "../components/left-sidebar/LeftSidebar";
import RightSidebar from "../components/right-sidebar/RightSidebar";
import Feeds from "../components/feeds/Feeds";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <LeftSidebar />
        <Feeds />
        <RightSidebar />
      </div>
    </>
  );
};

export default Home;
