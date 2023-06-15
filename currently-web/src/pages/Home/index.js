import { transform } from "@chakra-ui/react";
import Neo4jGraph from "../../components/Graph/Graph";
import Header from "../../components/Header";
import Map from "../../components/Map";
import ANYTHINGIWANT from "../../components/Map/index2";
import Mode from "../../components/Mode/Mode";
import Wave from 'react-wavify'
const Home = () => {
  const mystyles = {
    transform: 'rotate(180deg)',
    margin: '0',
    padding: '0'
  }
  return (
    <div>
      <div className="wave" style={mystyles}>
        <Wave fill='#5575f6'
          paused={false}
          options={{
            height: 35,
            amplitude: 22,
            speed: 0.10,
            points: 3
          }}
        />
      </div>
      <Mode/>
      {/* <Header />
      <ANYTHINGIWANT /> */}
      {/* <Map /> */}
    </div>
  );
};
export default Home;