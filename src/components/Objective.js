// Dependencies
import React, { useContext } from "react";
import CreatableSelect from "react-select/creatable";
import makeAnimated from "react-select/animated";
//
//
//
//
//
import { ObjectiveC } from "../Data";
import { Context } from "../Context";
//
//
//
//
//
//
// OperationCountry Component
export default function Objective() {
  //
  const { objective, setObjective } = useContext(Context);
  //
  //
  //
  // Custom theme for the multiSelect
  function customTheme(theme) {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        // primary25: "blue",
        primary: "blue"
      }
    };
  }
  //
  //
  //
  //
  //
  // JSX
  return (
    <div>
      <CreatableSelect
        onChange={setObjective}
        components={makeAnimated()}
        theme={customTheme}
        options={ObjectiveC}
        isMulti
        placeholder="Objective"
      />
    </div>
  );
}
