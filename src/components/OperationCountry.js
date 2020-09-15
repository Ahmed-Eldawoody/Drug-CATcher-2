// Dependencies
import React, { useContext } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
//
//
//
//
//
import { Countries } from "../Data";
import { Context } from "../Context";
//
//
//
//
//
//
// OperationCountry Component
export default function OperationCountry() {
  //
  const { operationCountries, setOperationCountries } = useContext(Context);
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
  console.log(operationCountries);
  //
  // JSX
  return (
    <div>
      <Select
        onChange={setOperationCountries}
        components={makeAnimated()}
        theme={customTheme}
        options={Countries}
        isSearchable
        isMulti
        placeholder="Operation Countries"
      />
    </div>
  );
}
