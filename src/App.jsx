import React from "react";
import AppLink from "./AppLink";
import { NavLink } from "react-router-dom";
import LearnExternalCss from "./learnCss/LearnExternalCss";
import LearnForm from "./LearnForm/LearnForm";
import SetLocalStorage from "./LearnLocalStorage/SetLocalStorage";
import GetLocalStorage from "./LearnLocalStorage/GetLocalStorage";
import RemoveLocalStorage from "./LearnLocalStorage/RemoveLocalStorage";
import SessionStorage from "./LearnSessionStorage/SessionStorage";
import Routing from "./LearnRouting/Routing";
import NestedRouting from "./NestedRouting/NestedRouting";
import NestedROuting1 from "./NestedRouting/NestedROuting1";
import UseState from "./LearnUseState/UseState";
import UseState1 from "./LearnUseState/UseState1";
import UseState2 from "./LearnUseState/UseState2";
import UseState3 from "./LearnUseState/UseState3";
import UseState4 from "./LearnUseState/UseState4";
import UseState5 from "./LearnUseState/UseState5";
let a = 3;
let b = 2;
const App = () => {
  return (
    <>
      {/* <AppLink></AppLink> */}
      {/* <Routing></Routing> */}
      {/* <LearnExternalCss></LearnExternalCss> */}
      {/* <LearnForm /> */}
      {/* <SetLocalStorage></SetLocalStorage> */}
      {/* <GetLocalStorage></GetLocalStorage> */}
      {/* <RemoveLocalStorage></RemoveLocalStorage> */}
      {/* <SessionStorage></SessionStorage> */}
      <NestedRouting />
      {/* <NestedROuting1></NestedROuting1> */}
      {/* <UseState></UseState> */}
      {/* <UseState1></UseState1> */}
      {/* <UseState2 /> */}
      {/* <UseState3 /> */}
      {/* <UseState4 /> */}
      {/* <UseState5 /> */}
    </>
  );
};

export default App;
