import { createContext, useState } from "react";

export const ToggleContext = createContext();

export const ProviderToggleContext = ({ children }) => {
  const [toggleValue, setToggleValue] = useState("left");

  const handleClick = () =>
    setToggleValue(toggleValue === "left" ? "right" : "left");

  return (
    <ToggleContext.Provider
      value={{
        toggleValue,
        handleClick,
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
};

/* 
const ToggleProvider = ({ children }) => {
  const [toggleValue, setToggleValue] = useState("left");

  const handleClick = () => {
    setToggleValue((prevValue) => (prevValue === "left" ? "right" : "left"));
  };

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  const value = { toggleValue, handleClick };

  return (
    <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>
  );
};

*/
