import React, { useEffect } from "react";
import { Options, Edge, Node } from "vis-network/standalone/esm/vis-network";
import Sidebar from "../../components/Sidebar/Sidebar";

import useVisNetwork from "../Collab/useVisNetwork";
const attendees = ["John Doe", "Jane Smith", "Mike Johnson", "Emily Davis", "lorenzo", "aniketh", "carlos", "ved", "steven"];
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



    {
      id: "person1",
      color: "blue",
      shape: "image",
      image: "https://www.pngkey.com/png/full/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
      size: 40,
    },
    {
      id: "person2",
      color: "blue",
      shape: "image",
      image: "https://www.pngkey.com/png/full/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
      size: 40,
    },
    {
      id: "person3",
      color: "blue",
      shape: "image",
      image: "https://www.pngkey.com/png/full/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
      size: 40,
    },
    {
      id: "person4",
      color: "blue",
      shape: "image",
      image: "https://www.pngkey.com/png/full/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
      size: 40,
    },
    {
      id: "person5",
      color: "blue",
      shape: "image",
      image: "https://www.pngkey.com/png/full/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
      size: 40,
    },
    { 
    id: "person6",
    color: "blue",
    shape: "image",
    image: "https://www.pngkey.com/png/full/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
    size: 40,
    },
    { 
      id: "person7",
      color: "blue",
      shape: "image",
      image: "https://www.pngkey.com/png/full/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
      size: 40,
    },
    { 
      id: "person8",
      color: "blue",
      shape: "image",
      image: "https://www.pngkey.com/png/full/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
      size: 40,
    },
    { 
      id: "person9",
      color: "blue",
      shape: "image",
      image: "https://www.pngkey.com/png/full/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
      size: 40,
    },
    { 
      id: "person10",
      color: "blue",
      shape: "image",
      image: "https://www.pngkey.com/png/full/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
      size: 40,
    },
    {
      id: "person11",
      color: "blue",
      shape: "image",
      image: "https://www.pngkey.com/png/full/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
      size: 40,
    },
    {
      id: "person12",
      color: "blue",
      shape: "image",
      image: "https://www.pngkey.com/png/full/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
      size: 40,
    },
    {
      id: "person13",
      color: "blue",
      shape: "image",
      image: "https://www.pngkey.com/png/full/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
      size: 40,
    },
    {
      id: "person14",
      color: "blue",
      shape: "image",
      image: "https://www.pngkey.com/png/full/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
      size: 40,
    },
    {
      id: "person15",
      color: "blue",
      shape: "image",
      image: "https://www.pngkey.com/png/full/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
      size: 40,
    },
    { 
    id: "person16",
    color: "blue",
    shape: "image",
    image: "https://www.pngkey.com/png/full/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
    size: 40,
    },
    { 
      id: "person17",
      color: "blue",
      shape: "image",
      image: "https://www.pngkey.com/png/full/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
      size: 40,
    },
    { 
      id: "person18",
      color: "blue",
      shape: "image",
      image: "https://www.pngkey.com/png/full/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
      size: 40,
    },
    { 
      id: "person19",
      color: "blue",
      shape: "image",
      image: "https://www.pngkey.com/png/full/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
      size: 40,
    },
    { 
      id: "person20",
      color: "blue",
      shape: "image",
      image: "https://www.pngkey.com/png/full/202-2024792_user-profile-icon-png-download-fa-user-circle.png",
      size: 40,
    },

];

const edges= [
  { from: "K", to: "person1", color: "red" },
  { from: "K", to: "person2", color: "red" },
  { from: "K", to: "person3", color: "red" },
  { from: "K", to: "person4", color: "red" },
  { from: "K", to: "person5", color: "red" },
  { from: "L", to: "person6", color: "red" },
  { from: "L", to: "person7", color: "red" },
  { from: "L", to: "person8", color: "red" },
  { from: "L", to: "person9", color: "red" },
  { from: "L", to: "person10", color: "red" },
  { from: "M", to: "person11", color: "red" },
  { from: "M", to: "person12", color: "red" },
  { from: "M", to: "person13", color: "red" },
  { from: "M", to: "person14", color: "red" },
  { from: "M", to: "person15", color: "red" },
  { from: "RDC", to: "person16", color: "red" },
  { from: "RDC", to: "person17", color: "red" },
  { from: "RDC", to: "person18", color: "red" },
  { from: "RDC", to: "person19", color: "red" },
  { from: "RDC", to: "person20", color: "red" },
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
    <div className="network">
      <div style={{ height: 700, width: "100%" }} ref={ref} />
        <Sidebar sidebar_name={"Soutn Campus"} sidebar_desc={"Events take place in the South building"} attendees={attendees} className="side"></Sidebar>
      </div>

    {/* //<button onClick={handleClick}>Focus</button> */}
    {/* <div style={{ height: 700, width: "100%" }} ref={ref} /> */}
    </>
  );
};

export default InOGraph;

/* Source Code: https://codesandbox.io/s/visnetwork-forked-pwgprj?file=/src/useVisNetwork.ts */