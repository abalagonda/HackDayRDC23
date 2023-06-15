import { useEffect, useState } from "react";
import { MC, MainContainer, SC, SmallContainer, Text } from "./styles";
import NetworkingGraph from "../Collab/NetworkingGraph";
import axios from "axios";

const CollaborativePage = () => {
  const [graphData, setGraphData] = useState({ nodes: [], edges: [] });
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/location/in_person"
        );
        setGraphData(response.data);
        setDataLoaded(true);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching graph data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(graphData);
  return (
    dataLoaded && (
      <NetworkingGraph nodes={graphData.nodes} links={graphData.links} />
    )
  );
};
export default CollaborativePage;
