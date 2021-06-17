import React, { useEffect, useState } from "react";

const useNetwork = (onChange) => {
  const handleChage = () => {
    if (typeof onChange) {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  const [status, setStatus] = useState(navigator.onLine);
  useEffect(() => {
    window.addEventListener("online", handleChage);
    window.addEventListener("offline", handleChage);
  });
  return status;
};

/*
const App = () => {
  const handleNetworkChage = (online) => {
    console.log(online ? "We just went online" : "We are offline"); 
  }
  const online = useNetwork(handleNetworkChage); 
  return (
    <div className="App">
      <h1>{online ? "Online" : "Offline"}</h1>
    </div>
  );
};

export default App;
*/
