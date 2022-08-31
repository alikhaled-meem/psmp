import { useState, useEffect, useCallback } from "react";

import ReactFlow, {
  //MiniMap,
  Controls,
  applyEdgeChanges,
  applyNodeChanges,
} from "react-flow-renderer";

import Card from "./../Card/Card";

import initialNodes from "./../../data/nodes";
import initialEdges from "./../../data/edges";

const style = {
  border: "none",
  padding: "0",
  borderRadius: "10px",
  minWidth: "228px",
};

const Flow = () => {
  const [Nodes, setNodes] = useState([]);
  const [Edges, setEdges] = useState(initialEdges);

  const onStateClick = (nodeId, state) => {
    alert(`nodeId: ${nodeId} , ${state}`);

    const updatedNodes = Nodes.map((node) => {
      if (node.id === nodeId) {
        return {
          ...node,
          data: {
            label: (
              <Card
                id={node.id}
                state={state}
                controls={node.controls}
                states={node.states}
                onStateClick={onStateClick}
              />
            ),
          },
        };
      } else {
        return { ...node };
      }
    });

    //setNodes([...updatedNodes]);
  };

  useEffect(() => {
    const updatedNodes = initialNodes.map((node) => ({
      id: node.id,
      type: node.type,
      state: node.state,
      controls: node.controls,
      states: node.states,
      position: node.position,
      data: {
        label: (
          <Card
            id={node.id}
            state={node.state}
            controls={node.controls}
            states={node.states}
            onStateClick={onStateClick}
          />
        ),
      },
      style: style,
    }));

    setNodes([...updatedNodes]);
  }, []);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );

  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );

  return (
    <ReactFlow
      nodes={Nodes}
      edges={Edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
    >
      {/*<MiniMap />*/}
      <Controls />
    </ReactFlow>
  );
};

export default Flow;
