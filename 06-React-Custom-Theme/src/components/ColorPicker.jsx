const ColorPicker = () => {
  const handleColorChange = (event) => {
    const selectedColor = event.target.value;
    // document.body.style.backgroundColor = selectedColor;
    document.getElementById("baseColor").style.backgroundColor = selectedColor;
  };

  return (
    <>
      <label htmlFor="color-picker">Choose a color:</label>  
      <input type="color" id="color-picker" onInput={handleColorChange} />
      <ul className="color-list">
        <li></li>
        <li id="baseColor"></li>
        <li></li>
      </ul>
    </>
  )
}

export default ColorPicker
