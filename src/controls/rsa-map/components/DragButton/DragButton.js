import css from "./DragButton.module.css";

const DragButton = ({ onClk, children }) => {
  return (
    <button
      className={css.Button}
      onClick={(e) => {
        onClk(e);
      }}
    >
      {children}
    </button>
  );
};

export default DragButton;
