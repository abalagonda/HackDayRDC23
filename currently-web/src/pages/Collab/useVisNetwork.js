import { useState, useLayoutEffect, useRef } from "react";
import {
  Network,
  Options,
  Data,
  Edge,
  Node
} from "vis-network/standalone/esm/vis-network";

const useVisNetwork = (props) => {
  const { edges, nodes, options } = props;

  const [network, addNetwork] = useState(null);
  const ref = useRef(null);

  const data = { nodes, edges };

  useLayoutEffect(() => {
    if (ref.current) {
      const instance = new Network(ref.current, data, options);
      addNetwork(instance);
    }
    return () => network?.destroy();
  }, []);

  return {
    network,
    ref
  };
};

export default useVisNetwork;