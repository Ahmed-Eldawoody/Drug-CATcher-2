// Dependencies
import React, { useContext } from "react";
import CreatableSelect from "react-select/creatable";
//
//
//
//
//
import { Companies } from "../Data";
import { Context } from "../Context";
//
//
//
//
//
// CompanyName Component
export default function CompanyName() {
  //
  const { setCompanyName, operationCountries, companyName } = useContext(
    Context
  );
  //
  function Select() {
    // if you add one country then remove it the operationCountries value will be null
    if (operationCountries === null || operationCountries.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  //
  //
  function Options() {
    if (operationCountries === null || operationCountries.length === 0) {
      return [];
    } else if (
      operationCountries.length === 1 &&
      operationCountries[0].label === "Country1"
    ) {
      return [
        {
          value: "Company1",
          label: "Company1"
        },
        {
          value: "Company2",
          label: "Company2"
        }
      ];
    } else if (
      operationCountries.length === 1 &&
      operationCountries[0].label === "Country2"
    ) {
      return [
        {
          value: "Company3",
          label: "Company3"
        }
      ];
    } else if (
      operationCountries.length === 1 &&
      operationCountries[0].label === "Country3"
    ) {
      return [];
    } else {
      return Companies;
    }
  }
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
  console.log(companyName);
  //
  // JSX
  return (
    <div>
      <CreatableSelect
        onChange={setCompanyName}
        isSearchable
        isDisabled={Select()}
        placeholder="Company Name"
        options={Options()}
        theme={customTheme}
        isClearable
        noOptionsMessage={() => "Add your company"}
      />
    </div>
  );
}
