import React, { useEffect } from "react";
import { Options, Edge, Node } from "vis-network/standalone/esm/vis-network";

import useVisNetwork from "./useVisNetwork";

const nodes = [
    {
      id: "Java",
      color: "blue",
      shape: "image",
      image: "https://cdn.iconscout.com/icon/free/png-256/free-java-2336959-1982840.png",
      size: 40,
    },
    {
      id: "Python",
      color: "blue",
      shape: "image",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Python_icon_%28black_and_white%29.svg/2048px-Python_icon_%28black_and_white%29.svg.png",
      size: 30,
    },
    {
      id: "C++",
      color: "blue",
      shape: "image",
      image: "https://cdn.icon-icons.com/icons2/3398/PNG/512/plus_logo_c_icon_214621.png",
      size: 40,
    },
    {
      id: "AWS",
      color: "blue",
      shape: "image",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Font_Awesome_5_brands_aws.svg/1279px-Font_Awesome_5_brands_aws.svg.png",
      size: 30,
    },
    {
      id: "Terraform",
      color: "blue",
      shape: "image",
      image: "https://images.squarespace-cdn.com/content/v1/5f9bf21e1bb59b2262d5079d/1633641649672-4AZWROBQX5QRKNFTFT6K/terraformlogo.png",
      size: 30,
    },
    {
      id: "Blockchain",
      color: "purple",
      shape: "image",

      image: "https://png.pngtree.com/png-vector/20230111/ourmid/pngtree-blockchain-vector-icon-png-image_6559271.png",
      size: 40,
    },
];

const edges= [
  { from: "Blockchain", to: "Python", color: "red" },
  { from: "Java", to: "C++", color: "red" },
  { from: "Java", to: "AWS", color: "red" },
  { from: "Java", to: "Terraform", color: "red" },
  { from: "AWS", to: "Terraform", color: "red" },
  { from: "Terraform", to: "Blockchain", color: "red" },
];

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

function SkillsGraph() {
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

export default SkillsGraph;