import Edit from "./../../assets/icons/edit";
import Stop from "./../../assets/icons/stop";
import Del from "./../../assets/icons/delete";

import css from "./Card.module.css";

const Card = ({ id, state, controls, states, onStateClick, details }) => {
  const handleStateClick = (state) => {
    onStateClick(id, state);
  };

  const handleEdit = () => {
    alert("Edit has been Clicked");
  };

  const handleStop = () => {
    alert("Stop has been Clicked");
  };

  const handleDelete = () => {
    alert("Delete has been Clicked");
  };

  return (
    <div className={`${css.Card} ${css[state]}`}>
      {states && (
        <div className={css.states}>
          <button
            className={`${css.state} ${css.state1}`}
            onClick={() => {
              handleStateClick("state1");
            }}
          ></button>

          <button
            className={`${css.state} ${css.state2}`}
            onClick={() => {
              handleStateClick("state2");
            }}
          ></button>

          <button
            className={`${css.state} ${css.state3}`}
            onClick={() => {
              handleStateClick("state3");
            }}
          ></button>

          <button
            className={`${css.state} ${css.state4}`}
            onClick={() => {
              handleStateClick("state4");
            }}
          ></button>
        </div>
      )}

      <div className={css.details}>{details}</div>

      {controls && (
        <div className={css.controls}>
          <button onClick={handleEdit}>
            <Edit />
          </button>

          <button onClick={handleStop}>
            <Stop />
          </button>

          <button onClick={handleDelete}>
            <Del />
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
