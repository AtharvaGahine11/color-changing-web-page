function getRandomColor() {
    const color = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    return color;
  }

  function changeColor() {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
    document.getElementById('colorCode').textContent = `Current Color: ${newColor}`;
  }


