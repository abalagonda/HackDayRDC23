import React, { useEffect } from "react";
import { Options, Edge, Node } from "vis-network/standalone/esm/vis-network";

import useVisNetwork from "./useVisNetwork";

const nodes = [
    {
      id: "Library",
      color: "blue",
      shape: "image",
      image: "https://super.so/icon/dark/book-open.svg",
      size: 20,
    },
    {
      id: "Cafe",
      color: "blue",
      shape: "image",
      image: "https://super.so/icon/dark/coffee.svg",
      //image:
      //"https://www.flaticon.com/free-icons/maps-and-location",
      size: 20,
    },
    {
      id: "Movies",
      color: "blue",
      shape: "image",
      image: "https://super.so/icon/dark/film.svg",
      size: 20,
    },
    {
      id: "Sports",
      color: "blue",
      shape: "image",
      image: "https://img.icons8.com/ios/250/000000/basketball.png",
      size: 20,
    },
    {
      id: "Workout",
      color: "blue",
      shape: "image",

      image: "https://img.icons8.com/ios/250/000000/bicycle.png",
      size: 20,
    },
    {
      id: "Gaming",
      color: "purple",
      shape: "image",

      image: "https://super.so/icon/dark/twitch.svg",
      size: 20,
    },
];

const edges= [
  //{ from: "AWS", to: "Library", color: "red" },
  //{ from: "AWS", to: "Cafe", color: "red" },
  { from: "Library", to: "Movies", color: "red" },
  { from: "Library", to: "Sports", color: "red" },
  { from: "Library", to: "Workout", color: "red" },
  { from: "Workout", to: "AWS", color: "red" },
  { from: "Sports", to: "Workout", color: "red" },
  { from: "Workout", to: "Gaming", color: "red" },
  //{ from: "AWS", to: "Gaming", color: "purple" },
  { from: "Gaming", to: "Saas", color: "purple" },
  { from: "Saas", to: "Cafe", color: "purple" },
  { from: "Cafe", to: "Appengine", color: "purple" },
  { from: "Githup", to: "Jenkins", color: "purple" },
  { from: "Sematext", to: "Appengine", color: "purple" },
  { from: "Githup", to: "Sematext", color: "purple" },
  //{ from: "Sematext", to: "AWS", color: "purple" },
  { from: "Jenkins", to: "Gaming", color: "purple" },
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

function Index2() {
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
      <button onClick={handleClick}>Focus</button>
      <div style={{ height: 700, width: "100%" }} ref={ref} />
    </>
  );
};

export default Index2;