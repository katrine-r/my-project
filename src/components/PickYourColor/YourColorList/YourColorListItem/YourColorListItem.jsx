import React from "react";
import classes from "./YourColorListItem.module.scss";
import { CopyToClipboard } from "react-copy-to-clipboard";

const YourColorListItem = ({
  id,
  colorHEX,
  colorRGB,
  colorDefault,
  onPickColorHandler,
  setTextCopied,
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
        <CopyToClipboard
          text={colorHEX}
          onCopy={() => setTextCopied({ value: colorHEX, copied: true })}
        >
          <span>{colorHEX}</span>
        </CopyToClipboard>
        <CopyToClipboard
          text={colorRGB}
          onCopy={() => setTextCopied({ value: colorRGB, copied: true })}
        >
          <span>{colorRGB}</span>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default YourColorListItem;
