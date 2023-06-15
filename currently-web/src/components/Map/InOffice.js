import React, { useEffect } from "react";
import { Options, Edge, Node } from "vis-network/standalone/esm/vis-network";

import useVisNetwork from "./useVisNetwork";

const nodes = [
    {
      id: "K",
      color: "blue",
      shape: "image",
      image: "https://cdn.onlinewebfonts.com/svg/img_524996.png",
      size: 40,
    },
    {
      id: "L",
      color: "blue",
      shape: "image",
      image: "https://cdn-icons-png.flaticon.com/512/7297/7297826.png",
      size: 40,
    },
    {
      id: "M",
      color: "blue",
      shape: "image",
      image: "https://cdn.onlinewebfonts.com/svg/img_202252.png",
      size: 40,
    },
    {
      id: "RDC",
      color: "blue",
      shape: "image",
      image: "https://clipart-library.com/new_gallery/357-3575331_star-icon-png-star-icon-black-and-white.png",
      size: 40,
    },
];

const edges= [
  { from: "K", to: "L", color: "red" },
  { from: "RDC", to: "M", color: "red" },
  { from: "M", to: "K", color: "red" },
  { from: "L", to: "RDC", color: "red" },
]

const options = {
  nodes: {
    shape: "dot",
    size: 10
  },
  layout: {
    hierarchical: {
      enabled: false
    }
  }
};

function InOGraph() {
  const { ref, network } = useVisNetwork({
    options,
    edges,
    nodes
  });

  const handleClick = () => {
    if (!network) return;

    network.focus(5);
  };

  useEffect(() => {
    if (!network) return;

    network.once("beforeDrawing", () => {
      network.focus(5);
    });
    network.setSelection({
      edges: [],
      nodes: []
    });
  }, [network]);

  return (
    <>
    {/* //<button onClick={handleClick}>Focus</button> */}
    <div style={{ height: 700, width: "100%" }} ref={ref} />
    </>
  );
};

export default InOGraph;