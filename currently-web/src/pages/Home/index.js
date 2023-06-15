import Neo4jGraph from "../../components/Graph/Graph";
import Header from "../../components/Header";
//import Map from "../../components/Map";
import NetGraph from "../../components/Map/NetworkingGraph";
import { Sidebar } from "react-pro-sidebar";
import SkillsGraph from "../../components/Map/SkillsGraph";
import InOGraph from "../../components/Map/InOffice";
const Home = () => {
  return (
    <div>
      <Header />
      <NetGraph />
      <SkillsGraph />
      <InOGraph />
    </div>
  );
};
export default Home;