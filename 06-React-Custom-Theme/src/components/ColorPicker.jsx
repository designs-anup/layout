const ColorPicker = () => {
  const handleColorChange = (event) => {
    const selectedColor = event.target.value;
    // document.body.style.backgroundColor = selectedColor;
    document.getElementById("baseColor").style.backgroundColor = selectedColor;

    document.getElementById("output").innerText = selectedColor;
    document.getElementById("outputRGB").innerText = hexToRGB(selectedColor)
  };

  function hexToRGB(hex){
    let r = parseInt(hex.slice(1,3), 16),
    g = parseInt(hex.slice(3,5), 16),
    b = parseInt(hex.slice(5,7), 16);

    return "rgb(" + r + "," + g + "," + b +")";
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
    </>
  )
}

export default ColorPicker
