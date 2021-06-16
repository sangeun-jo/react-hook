import React, { useEffect, useState } from "react";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTile = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerHTML = title;
  };
  useEffect(updateTile, [title]);
  return setTitle;
};
/*
const App = () => {
  const titleUpdater = useTitle("Loading..."); 
  setTimeout(() => titleUpdater("Home"), 5000);
  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
}

export default App;
*/
