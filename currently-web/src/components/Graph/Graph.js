import React, { useEffect, useState } from "react";
import axios from "axios";

const Neo4jGraph = () => {
  const [graphData, setGraphData] = useState({ nodes: [], links: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/nodes");
        setGraphData(response.data);
      } catch (error) {
        console.error("Error fetching graph data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Graph:</h1>
      {graphData.nodes.length > 0 && graphData.links.length > 0 ? (
        <div>
          <h2>Nodes:</h2>
          <ul>
            {graphData.nodes.map((node) => (
              <li key={node.id}>{node.label}</li>
            ))}
          </ul>

          <h2>Links:</h2>
          <ul>
            {graphData.links.map((link, index) => (
              <li
                key={index}
              >{`${link.source} -- ${link.label} --> ${link.target}`}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Neo4jGraph;
