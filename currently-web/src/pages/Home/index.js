import Neo4jGraph from "../../components/Graph/Graph";
import Header from "../../components/Header";
import Map from "../../components/Map";
const Home = () => {
  return (
    <div>
      <Header />
      <Neo4jGraph />
      <Map />
    </div>
  );
};
export default Home;
