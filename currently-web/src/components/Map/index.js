import React from "react";
import ReactDOM from "react-dom";
import Graph from "react-vis-network-graph";

// import "./styles.css";
// need to import the vis network css in order to show tooltip
// import "./network.css";

const Map = () => {
  const graph = {
    nodes: [
      { id: "1", layout: "fuck", color: "red", size: 200 },
      { id: "2" },
      { id: "3" },
    ],
    edges: [
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 2, to: 4 },
      { from: 2, to: 5 },
      { from: 2, to: 6 },
      { from: 6, to: 1 },
      { from: 5, to: 6 },
    ],
  };

  const options = {
    layout: {
      hierarchical: false,
    },
    edges: {
      color: "red",
    },
    height: "500px",
  };

  const events = {
    select: function (event) {
      var { nodes, edges } = event;
      console.log(edges);
      console.log(nodes);
    },
  };
  return (
    <Graph
      graph={graph}
      options={options}
      events={events}
      getNetwork={(network) => {
        //  if you want access to vis.js network api you can set the state in a parent component using this property
      }}
    />
  );
};

export default Map;
