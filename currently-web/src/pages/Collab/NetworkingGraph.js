import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Options } from "vis-network/standalone/esm/vis-network";

import useVisNetwork from "./useVisNetwork";
// import { TbCircleLetterM } from "react-icons/tb";
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

function NetworkingGraph({ nodes, links }) {
  // const byebye = [{ from: "K", to: "L", color: "red" }];
  const { ref, network } = useVisNetwork({
    options,
    nodes: nodes, // Convert nodes to a DataSet
    edges: links, // Convert edges to a DataSet
  });

  useEffect(() => {
    if (network && nodes > 0) {
      network.once("beforeDrawing", () => {
        network.focus(5);
      });
      network.setSelection({
        edges: [],
        nodes: [],
      });
    }
  }, [network, nodes]);

  return (
    <div style={{ width: "100%", height: "70rem" }} ref={ref}>
      {/* Additional components or JSX */}
    </div>
  );
}

export default NetworkingGraph;
