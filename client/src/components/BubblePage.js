import React, { useState, useEffect } from "react";

import { fetchColorsApi } from "../api/fetchColors";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(() => {
    if (colorList.length === 0) {
      fetchColors();
    }
  }, []);

  const fetchColors = () => {
    fetchColorsApi()
      .then((data) => {
        setColorList(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <ColorList
        colors={colorList}
        updateColors={setColorList}
        fetchColors={fetchColors}
      />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
