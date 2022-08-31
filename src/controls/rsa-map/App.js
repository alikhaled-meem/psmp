import { useState } from "react";

import Chat from "./components/Chat/Chat";
//import Flow from "./components/Flow/Flow";
import UncontrolledFlow from "./components/UncontrolledFlow/UncontrolledFlow";

import css from "./App.module.css";

const App = () => {
  const [ClickedMsg, setClickedMsg] = useState("");

  const handleMsgClick = (txt) => {
    setClickedMsg(txt);
  };

  return (
    <div className={css.App}>
      <div className={`${css.tree} ${css.padding20}`}>
        {/*<Flow />*/}
        <UncontrolledFlow clickedMsg={ClickedMsg} />
      </div>

      <div className={`${css.chat} ${css.paddingInline20}`}>
        <Chat handleMsgClick={handleMsgClick} />
      </div>
    </div>
  );
};

export default App;
