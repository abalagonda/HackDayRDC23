import Neo4jGraph from "../../components/Graph/Graph";
import Header from "../../components/Header";
// import Map from "../../components/Map";

import ANYTHINGIWANT from "../../components/Map/index2";
import Mode from "../../components/Mode/Mode";
import Wave from 'react-wavify'
import './index.css'
const Home = () => {
  const mystyles = {
    transform: 'rotate(180deg)',
    margin: '0',
    padding: '0'
  }
  return (
    <div className="cont">
      <div className="wave" style={mystyles}>
        <Wave fill='#5575f6'
          paused={false}
          options={{
            height: 60,
            amplitude: 50,
            speed: 0.20,
            points: 3
          }}
        />
      </div>
      <Mode/>
      {/* <Header />
      <ANYTHINGIWANT /> */}
    </div>
  );
};
export default Home;