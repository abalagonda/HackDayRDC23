import Neo4jGraph from "../../components/Graph/Graph";
import Header from "../../components/Header";
import Map from "../../components/Map";
import ANYTHINGIWANT from "../../components/Map/index2";
import { Sidebar } from "react-pro-sidebar";
const Home = () => {
  return (
    <div>
      <Header />
      <ANYTHINGIWANT />
      <Sidebar>Hello</Sidebar>
      <Map />{" "}
    </div>
  );
};
export default Home;