import React from "react";
import HeaderLevel from "./HeaderLevel";
import BottomInstructions from "./BottomInstructions";
import MergeSortComponent from "../algorithm/MergeSortComponent";
import ArrayGen from "./ArrayGen";
import MergeSort from "../algorithm/MergeSort";

function Level1() {
  
  return (
    <div>
      <HeaderLevel />
      <ArrayGen />
      <BottomInstructions />
      <MergeSortComponent />

      <div id="result"></div>
      <div>This is Level1</div>
     
      <div id="left"></div>
     

      
    </div>
  );
}

export default Level1;
