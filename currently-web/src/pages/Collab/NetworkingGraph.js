import axios from "axios";
import React, { useEffect, useState } from "react";
import { Options } from "vis-network/standalone/esm/vis-network";

import useVisNetwork from "./useVisNetwork";
import BsFillBuildingFill from 'react-icons/fa';

const options = {
  nodes: {
    shape: "dot",
    size: 10,
  },
  layout: {
    hierarchical: {
      enabled: false,
    },
  },
};

function NetworkingGraph() {
  const [graphData, setGraphData] = useState({ nodes: [], edges: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/location/in_person");
        setGraphData(response.data);
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching graph data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(graphData.nodes)
  console.log(graphData.links)

  const hahaha = [
    {id: 'North', image: BsFillBuildingFill, shape: 'image', size: 20, title: 'North'},
    {id: 'M', image: "https://cdn.onlinewebfonts.com/svg/img_202252.png", shape: 'image', size: 20, title: 'M'},
    {id: 'P', image: "https://cdn.onlinewebfonts.com/svg/img_202252.png", shape: 'image', size: 20, title: 'P'},
    {id: 'L', image: "https://cdn.onlinewebfonts.com/svg/img_202252.png", shape: 'image', size: 20, title: 'L'},
    {id: 'K', image: "https://cdn.onlinewebfonts.com/svg/img_202252.png", shape: 'image', size: 20, title: 'K'}
    ]

  const byebye = [
    {from: "K", to: "L", color: "red"}
  ]
  const { ref, network } = useVisNetwork({
    options,
    nodes: hahaha, // Convert nodes to a DataSet
    edges: [], // Convert edges to a DataSet
  });

  useEffect(() => {
    if (network) {
      network.once("beforeDrawing", () => {
        network.focus(5);
      });
      network.setSelection({
        edges: [],
        nodes: [],
      });
    }
  }, [network]);

  return (
    <div style={{ height: "100vh" }} ref={ref}>
      {/* Additional components or JSX */}
    </div>
  );
}

export default NetworkingGraph;
