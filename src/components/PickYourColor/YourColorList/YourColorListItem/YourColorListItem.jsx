import React from "react";
import classes from "./YourColorListItem.module.scss";

const YourColorListItem = ({
  id,
  colorHEX,
  colorRGB,
  colorDefault,
  onPickColorHandler
}) => {
  const colorItem = [classes.ListItem];

  if (id) {
    colorItem.push(classes[id]);
  }

  if (colorDefault === id) {
    colorItem.push(classes.ColorActive);
  }

  return (
    <div className={classes.YourColorListItem}>
      <li
        className={colorItem.join(" ")}
        onClick={() => onPickColorHandler(id)}
      ></li>
      <div className={classes.WrapperColor}>
        <span>{colorHEX}</span>
        <span>{colorRGB}</span>
      </div>
    </div>
  );
};

export default YourColorListItem;
