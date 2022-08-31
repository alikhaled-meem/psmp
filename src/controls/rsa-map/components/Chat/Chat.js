import DragButton from "./../DragButton/DragButton";

import DragIcon from "./../../assets/icons/dragIcon";

import css from "./Chat.module.css";

const Chat = ({ handleMsgClick }) => {
  const dragMsg = (e) => {
    let txt = e.target.innerHTML;
    handleMsgClick(txt);
  };

  return (
    <div className={css.Chat}>
      <div
        className={`${css.msgContainer}`}
        onClick={(e) => {
          dragMsg(e);
        }}
      >
        <p className={`${css.msg} ${css.othersMsg}`}>
          Please let me know how we can assist you, we’re here to guide you
          through the process.
        </p>

        <button className={css.Button} onClick={dragMsg}>
          <DragIcon />
        </button>
      </div>

      <div
        className={`${css.msgContainer}`}
        onClick={(e) => {
          dragMsg(e);
        }}
      >
        <DragButton onClk={dragMsg}>
          <DragIcon />
        </DragButton>

        <p className={`${css.msg} ${css.myMsg}`}>How does it work?</p>
      </div>
    </div>
  );
};

export default Chat;
