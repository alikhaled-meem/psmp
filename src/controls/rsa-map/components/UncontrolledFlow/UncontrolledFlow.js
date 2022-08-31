import { useEffect } from "react";
import ReactFlow, {
  ReactFlowProvider,
  useReactFlow,
} from "react-flow-renderer";

import Card from "./../Card/Card";

import defaultNodes from "./nodes";
import defaultEdges from "./edges.js";

import "./button.css";

const edgeOptions = {
  animated: true,
  style: {
    stroke: "black",
  },
};

const connectionLineStyle = { stroke: "black" };

const nodeStyle = {
  border: "none",
  padding: "0",
  borderRadius: "10px",
  minWidth: "228px",
};

let nodeId = 0;

function Flow({ clickedMsg }) {
  const reactFlowInstance = useReactFlow();

  const onStateClick = (nodeId, state) => {
    alert(`nodeId: ${nodeId} , ${state}`);
  };

  useEffect(() => {
    if (clickedMsg !== "") {
      const id = `${++nodeId}`;
      const newNode = {
        id,
        position: { x: 0, y: 0 },
        data: {
          label: (
            <Card
              id={id}
              state={"state1"}
              controls={true}
              states={true}
              details={clickedMsg}
              onStateClick={onStateClick}
            />
          ),
        },
        style: nodeStyle,
      };
      reactFlowInstance.addNodes(newNode);
    }
  }, [clickedMsg]);

  return (
    <>
      <ReactFlow
        defaultNodes={defaultNodes}
        defaultEdges={defaultEdges}
        defaultEdgeOptions={edgeOptions}
        //fitView
        style={
          {
            //backgroundColor: "#D3D2E5",
          }
        }
        connectionLineStyle={connectionLineStyle}
      />

      {/*<button onClick={onClick} className='btn-add'>
        add node
      </button>*/}
    </>
  );
}

const UncontrolledFlow = ({ clickedMsg }) => {
  return (
    <ReactFlowProvider>
      <Flow clickedMsg={clickedMsg} />
    </ReactFlowProvider>
  );
};
export default UncontrolledFlow;
