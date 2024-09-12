import React, { createContext, useState } from "react";
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
import UseState from "./LearnUseState/UseState";
import UseState1 from "./LearnUseState/UseState1";
import UseState2 from "./LearnUseState/UseState2";
import UseState3 from "./LearnUseState/UseState3";
import UseState4 from "./LearnUseState/UseState4";
import UseState5 from "./LearnUseState/UseState5";
import UseEffect from "./LearnUseEffect/UseEffect";
import UseEffect1 from "./LearnUseEffect/UseEffect1";
import LearnForm1 from "./LearnForm/LearnForm1";
import Parent from "./PropDrilling/Parent";
import GreatGrandChild from "./PropDrilling/GreatGrandChild";

export let Context = createContext();

const App = () => {
  let [name, setName] = useState("Ram");
  return (
    <>
      <Context.Provider value={{ name: name, setName }}>
        <Parent />
        {/* <GreatGrandChild value={name} /> */}
      </Context.Provider>

      {/* <AppLink></AppLink> */}
      {/* <Routing></Routing> */}
      {/* <LearnExternalCss></LearnExternalCss> */}
      {/* <LearnForm /> */}
      {/* <SetLocalStorage></SetLocalStorage> */}
      {/* <GetLocalStorage></GetLocalStorage> */}
      {/* <RemoveLocalStorage></RemoveLocalStorage> */}
      {/* <SessionStorage></SessionStorage> */}
      {/* <NestedRouting /> */}
      {/* <NestedRouting1 /> */}
      {/* <UseState></UseState> */}
      {/* <UseState1></UseState1> */}
      {/* <UseState2 /> */}
      {/* <UseState3 /> */}
      {/* <UseState4 /> */}
      {/* <UseState5 /> */}
      {/* <UseEffect /> */}
      {/* <UseEffect1 /> */}
      {/* <LearnForm1 /> */}
    </>
  );
};

export default App;
