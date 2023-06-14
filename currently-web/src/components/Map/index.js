import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import Network from "react-vis-network-graph";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
// import "./network.css";
import nodeData from "./data.json";

const Map = () => {
  const graphRef = useRef(null);
  const [datas, setDatas] = useState("--");
  const _data = {
    nodes: [
      // {
      //   // id: "AWS",
      //   // name: "AWS",
      //   // color: {
      //   //   border: "black",
      //   //   backgroundImage:
      //   //     "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4qneFgROiufDyIrsXWpq_GhoQWnnxHuoclPljXeXgtlcGEParu75dPQ4TLafJeLJssXc&usqp=CAU')",
      //   // },
      //   // borderWidth: 1,
      //   // borderWidthSelected: 2,
      //   // backgroundSize: "cover",
      //   // backgroundRepeat: "no-repeat",
      //   // //image:
      //   // //"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4qneFgROiufDyIrsXWpq_GhoQWnnxHuoclPljXeXgtlcGEParu75dPQ4TLafJeLJssXc&usqp=CAU",
      //   // //size: 20,
      // },
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
      {
        id: "Saas",
        color: "purple",
        shape: "image",

        image: "https://ongoingwarehouse.com/Pictures/MicrosoftTeams-image.png",
        size: 20,
      },
      // {
      //   id: "Notion",
      //   color: "purple",
      //   shape: "image",

      //   image:
      //     "https://cdn.icon-icons.com/icons2/2429/PNG/512/notion_logo_icon_147257.png",
      //   size: 20,
      // },
      {
        id: "Appengine",
        color: "purple",
        shape: "image",
        image:
          "https://www.howtogeek.com/wp-content/uploads/csit/2020/06/29add7ff.png?height=200p&trim=2,2,2,2",
        size: 20,
      },
      {
        id: "Sematext",
        color: "purple",
        shape: "image",
        image:
          "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_d6fa77d54b71a3a68842371d85aba442/sematext-cloud.jpg",
        size: 20,
      },
      {
        id: "Jenkins",
        color: "purple",
        shape: "image",
        image:
          "https://www.learntek.org/blog/wp-content/uploads/2018/05/jenkins_image.png",
        size: 20,
      },
      {
        id: "Githup",
        color: "purple",
        shape: "image",
        image: "https://foundations.projectpythia.org/_images/GitHub-logo.png",
        size: 20,
      },
    ],
    edges: [
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
    ],
  };

  const [data, setData] = useState(_data);

  const options = {
    interaction: {
      selectable: true,
      hover: true,
    },
    manipulation: {
      enabled: true,
      initiallyActive: true,
      addNode: false,
      addEdge: false,
      editNode: undefined,
      editEdge: true,
      deleteNode: true,
      deleteEdge: true,
      shapeProperties: {
        borderDashes: false,
        useImageSize: false,
        useBorderWithImage: false,
      },
      controlNodeStyle: {
        shape: "dot",
        size: 6,
        color: {
          background: "#ff0000",
          border: "#3c3c3c",
          highlight: {
            background: "#07f968",
            border: "#3c3c3c",
          },
          borderWidth: 2,
          borderWidthSelected: 2,
        },
      },
      height: "100%",
      width: "100%",
      color: "green",
      hover: "true",
      nodes: {
        size: 20,
      },
    },
  };
  function myFunction() {
    // Code for your onclick function goes here
    console.log("Icon image clicked!");
  }
  const handleZoomIn = () => {
    if (graphRef.current) {
      // graphRef.current.zoomIn();
    }
  };
  const handleNodeClick = (event) => {
    console.log("click event is happened");
    console.log("click event is happened in handlenode click");
    console.log(event);
    setDatas(event.nodes[0]);
  };

  // Function to zoom out
  const handleZoomOut = () => {
    if (graphRef.current) {
      // graphRef.current.zoomOut();
    }
  };

  return (
    <>
      <Grid
        item
        md={7}
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          //border: "20px",
        }}
      >
        {/* <Network
          graph={data}
          ref={graphRef}
          options={options}
          events={{
            click: handleNodeClick,
          }}
          getNetwork={(network) => {
            network.on("afterDrawing", (ctx) => {
              data.nodes.forEach((node) => {
                const iconImg = new Image();
                // iconImg.src =
                //   "https://www.iconarchive.com/download/i22783/kyo-tux/phuzion/Sign-Info.ico";
                const nodeId = node.id;
                const nodePosition = network.getPositions([nodeId])[nodeId];
                const nodeSize = 20;
                var setVal = sessionStorage.getItem("set");
                if (setVal === "yes") {
                  console.log(setVal);
                  ctx.font = "14px Arial";
                  ctx.fillStyle = "#000000";
                  ctx.textAlign = "center";
                  ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
                  ctx.shadowBlur = 5;
                  ctx.fillStyle = "#ffcc00";
                  ctx.fillRect(
                    nodePosition.x + nodeSize + 2,
                    nodePosition.y + nodeSize - 20,
                    50,
                    20
                  );
                  ctx.fillText(nodePosition.x, nodePosition.y + nodeSize + 20);
                  ctx.font = "12px Arial";
                  ctx.color = "black";
                  ctx.fillStyle = "black";
                  ctx.textAlign = "left";
                  ctx.fillText(
                    nodePosition.x + nodeSize + 5,
                    nodePosition.y + nodeSize - 5
                  );
                } else if (setVal === "no") {
                  console.log(setVal);
                  const iconWidth = 20;
                  const iconHeight = 16;
                  iconImg.src =
                    "https://www.iconarchive.com/download/i22783/kyo-tux/phuzion/Sign-Info.ico";
                  ctx.font = "14px Arial";
                  ctx.fillStyle = "#000000";
                  ctx.textAlign = "center";
                  ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
                  ctx.shadowBlur = 5;
                  ctx.fillStyle = "#ffcc00";
                  ctx.drawImage(
                    iconImg,
                    nodePosition.x + nodeSize + 5,
                    nodePosition.y + nodeSize + 5,
                    iconWidth,
                    iconHeight
                  );
                  iconImg.addEventListener("mouseover", myFunction, "false");
                }
              });
            });
          }}
          
        /> */}
        style={{
            display: "100%",
            height: "40rem",
            width: "40rem",
            justifyContent: "center",
            flexDirection: 'row',
          }}
      </Grid>
    </>
  );
};

export default Map;
