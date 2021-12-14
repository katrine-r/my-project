import React from "react";
import classes from "./YourColorList.module.scss";
import YourColorListItem from "./YourColorListItem/YourColorListItem";

const YourColorList = ({ 
  allColors, 
  colorDefault, 
  onPickColorHandler,
  setTextCopied 
}) => {
  return (
    <div className={classes.YourColorList}>
      <ul className={classes.List}>
        {allColors.map((color, index) => {
          return (
            <YourColorListItem
              key={index}
              id={color.id}
              colorHEX={color.colorHEX}
              colorRGB={color.colorRGB}
              colorDefault={colorDefault}
              onPickColorHandler={onPickColorHandler}
              setTextCopied={setTextCopied}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default YourColorList;
