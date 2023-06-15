import Neo4jGraph from "../../components/Graph/Graph";
import Header from "../../components/Header";
//import Map from "../../components/Map";
import Map from "../../components/Map/index2";
import { Sidebar } from "react-pro-sidebar";
const Home = () => {
  return (
    <div>
      <Header />
      <Map />
      <Sidebar>Hello</Sidebar>
      {/* <Map /> */}
    </div>
  );
};
export default Home;