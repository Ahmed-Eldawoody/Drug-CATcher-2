import React, { useState } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  //
  // initial states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("20");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [operationCountries, setOperationCountries] = useState([]);
  const [companyName, setCompanyName] = useState({});
  const [objective, setObjective] = useState([]);
  const [more, setMore] = useState("");
  //
  //
  //
  //
  //
  return (
    <Context.Provider
      value={{
        firstName,
        lastName,
        email,
        phoneNumber,
        countryCode,
        operationCountries,
        companyName,
        objective,
        more,
        setFirstName,
        setLastName,
        setEmail,
        setPhoneNumber,
        setCountryCode,
        setOperationCountries,
        setCompanyName,
        setObjective,
        setMore
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
