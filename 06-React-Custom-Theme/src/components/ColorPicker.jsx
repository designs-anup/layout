import { useState } from 'react'

const ColorPicker = () => {

  let [textColor, setTextColor] = useState('#fff000');

  const handleColorChange = (event) => {
    const selectedColor = event.target.value;
    // document.body.style.backgroundColor = selectedColor;
    document.getElementById("baseColor").style.backgroundColor = selectedColor;

    document.getElementById("output").innerText = selectedColor;
    document.getElementById("outputRGB").innerText = hexToRGB(selectedColor)
    document.getElementById("outputHSL").innerText = hexToHSL(selectedColor)

    textColor = selectedColor

    setTextColor(textColor)
  };
  /*
  function hexToRGB(hex){
    let r = parseInt(hex.slice(1,3), 16),
    g = parseInt(hex.slice(3,5), 16),
    b = parseInt(hex.slice(5,7), 16);

    return "rgb(" + r + "," + g + "," + b +")";
  }
  */

  // Converts hex (#RRGGBB) to RGB string 
  function hexToRGB(hex) {
    hex = hex.replace(/^#/, '');
    let r = parseInt(hex.slice(0, 2), 16);
    let g = parseInt(hex.slice(2, 4), 16);
    let b = parseInt(hex.slice(4, 6), 16);
    return `rgb(${r}, ${g}, ${b})`;
  }

  // Converts hex (#RRGGBB) to HSL string
  function hexToHSL(hex) {
    // Remove '#' if present
    hex = hex.replace(/^#/, '');
    // Parse r, g, b values
    let r = parseInt(hex.slice(0,2), 16) / 255;
    let g = parseInt(hex.slice(2,4), 16) / 255;
    let b = parseInt(hex.slice(4,6), 16) / 255;

    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if(max === min){
      h = s = 0; // achromatic
    } else {
      let d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch(max){
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }

    h = Math.round(h * 360);
    s = Math.round(s * 100);
    l = Math.round(l * 100);

    return `hsl(${h}, ${s}%, ${l}%)`;
  }

  return (
    <>
      <label htmlFor="color-picker">Choose a color:</label>  
      <input type="color" id="color-picker" onInput={handleColorChange} />
      <ul className="color-list">
        <li></li>
        <li id="baseColor"></li>
        <li></li>
      </ul>
      <div id="output"></div>
      <div id="outputRGB"></div>
      <div id="outputHSL"></div>
      <h2 style={{color: textColor}}>H2 text color is {textColor}</h2>
    </>
  )
}

export default ColorPicker
