import React, { useEffect } from "react";
import { Options, Edge, Node } from "vis-network/standalone/esm/vis-network";
import Sidebar from "../../components/Sidebar/Sidebar";
import useVisNetwork from "./useVisNetwork";
import './NetworkingGraph.css'

const events = ["Basketball", "Biking", "Reading", "Coffee", "Movies", "Streaming"];
const attendees = ["John Doe", "Jane Smith", "Mike Johnson", "Emily Davis", "lorenzo", "aniketh", "carlos", "ved", "steven"];
const nodes = [
    {
      id: "Library",
      //color: "blue",
      shape: "image",
      image: "https://super.so/icon/dark/book-open.svg",
      size: 30,
    },
    {
      id: "Cafe",
      //color: "blue",  
      shape: "image",
      image: "https://super.so/icon/dark/coffee.svg",
      size: 30,
    },
    {
      id: "Movies",
      //color: "blue",
      shape: "image",
      image: "https://super.so/icon/dark/film.svg",
      size: 30,
    },
    {
      id: "Sports",
      color: "blue",
      shape: "image",
      image: "https://img.icons8.com/ios/250/000000/basketball.png",
      size: 30,
    },
    {
      id: "Workout",
      color: "blue",
      shape: "image",

      image: "https://img.icons8.com/ios/250/000000/bicycle.png",
      size: 35,
    },
    {
      id: "Gaming",
      color: "purple",
      shape: "image",

      image: "https://super.so/icon/dark/twitch.svg",
      size: 30,
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
  { from: "Gaming", to: "person1", color: "red" },
  { from: "Gaming", to: "person2", color: "red" },
  { from: "Gaming", to: "person3", color: "red" },
  { from: "Gaming", to: "person4", color: "red" },
  { from: "Gaming", to: "person5", color: "red" },
  { from: "Library", to: "person6", color: "red" },
  { from: "Library", to: "person7", color: "red" },
  { from: "Cafe", to: "person8", color: "red" },
  { from: "Cafe", to: "person9", color: "red" },
  { from: "Cafe", to: "person10", color: "red" },
  { from: "Cafe", to: "person11", color: "red" },
  { from: "Workout", to: "person12", color: "red" },
  { from: "Workout", to: "person13", color: "red" },
  { from: "Workout", to: "person14", color: "red" },
  { from: "Sports", to: "person15", color: "red" },
  { from: "Sports", to: "person16", color: "red" },
  { from: "Sports", to: "person17", color: "red" },
  { from: "Sports", to: "person18", color: "red" },
  { from: "Movies", to: "person19", color: "red" },
  { from: "Movies", to: "person20", color: "red" },
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

function NetworkingGraph() {
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
      <Sidebar sidebar_name={"event_name"} sidebar_desc={"event_desc"} attendees={attendees} className="side"></Sidebar>
    </div>
    </>
  );
};

export default NetworkingGraph;