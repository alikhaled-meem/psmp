const initialNodes = [
  {
    id: "1",
    type: "input",
    state: "state1",
    controls: false,
    states: false,
    position: { x: 250, y: 25 },
  },
  {
    id: "2",
    state: "state2",
    controls: true,
    states: true,
    position: { x: 100, y: 125 },
  },
  {
    id: "3",
    type: "output",
    state: "state3",
    controls: true,
    states: true,
    position: { x: 250, y: 250 },
  },
];

export default initialNodes;
