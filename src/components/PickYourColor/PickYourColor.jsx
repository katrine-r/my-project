import React, { useState } from "react";
import classes from "./PickYourColor.module.scss";
import YourColorList from "./YourColorList/YourColorList";

const ChooseYourColor = () => {
  const [allColors, setAllColors] = useState([
    { id: "color1", colorHEX: "#9253a1", colorRGB: "(146, 83, 161)" },
    { id: "color2", colorHEX: "#f063a4", colorRGB: "(240, 99, 164)" },
    { id: "color3", colorHEX: "#2dc5f4", colorRGB: "(45, 197, 244)" },
    { id: "color4", colorHEX: "#fcee21", colorRGB: "(252, 238, 33)" },
    { id: "color5", colorHEX: "#f16164", colorRGB: "(241, 97, 100)" },
    { id: "color6", colorHEX: "#70327e", colorRGB: "(112, 50, 126)" },
    { id: "color7", colorHEX: "#a42953", colorRGB: "(164, 41, 99)" },
    { id: "color8", colorHEX: "#0b6a88", colorRGB: "(11, 106, 136)" },
    { id: "color9", colorHEX: "#f89e4f", colorRGB: "(248, 158, 79)" },
    { id: "color10", colorHEX: "#ec015a", colorRGB: "(236, 1, 90)" }
  ]);

  const [colorDefault, setColorDefault] = useState("");
  const [textCopied, setTextCopied] = useState({ value: "", copied: false });
  const pickColorBackground = [classes.PickYourColor];

  const onPickColorHandler = (id) => {
    console.log("Click color", id);
    setColorDefault(id);
  };

  if (colorDefault) {
    pickColorBackground.push(classes[colorDefault]);
  }
  console.log(colorDefault);
  console.log(textCopied);

  return (
    <div className={pickColorBackground.join(" ")}>
      {textCopied.copied ? (
        <span className={classes.PositionColorCopied}>
          Copied: {textCopied.value}
        </span>
      ) : null}
      <h1>Pick Your Color</h1>
      <div className={classes.Wrapper}>
        <YourColorList
          allColors={allColors}
          colorDefault={colorDefault}
          onPickColorHandler={onPickColorHandler}
          textCopied={textCopied}
          setTextCopied={setTextCopied}
        />
      </div>
    </div>
  );
};

export default ChooseYourColor;
