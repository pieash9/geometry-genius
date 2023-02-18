//random color generate for background function
function randomColorGenerate(cardId) {
  const card = document.getElementById(cardId);
  card.addEventListener("mouseover", function () {
    const randomColor = Math.floor(Math.random() * 13700000).toString(16);
    card.style.backgroundColor = "#" + randomColor;
  });
  card.addEventListener("mouseout", function () {
    card.style.backgroundColor = "";
  });
}
randomColorGenerate("card1");
randomColorGenerate("card2");
randomColorGenerate("card3");
randomColorGenerate("card4");
randomColorGenerate("card5");
randomColorGenerate("card6");

//function to get input tag value by using id
function getInputValueById(inputId) {
  const inputElement = document.getElementById(inputId).value;
  const inputText = parseFloat(inputElement);
  if (isNaN(inputElement) || inputElement == "" || inputText < 0) {
    //validation check if the value is empty not number or less then zero it will ask to input correctly
    throw new Error("Input a valid positive number !!");
  } else {
    return inputText;
  }
}
// function to get innerText by id
function getElementNameByID(elementId) {
  const textElement = document.getElementById(elementId);
  const textValue = textElement.innerText;
  return textValue;
}
let serial = 0;
// card 1 triangle calculation
document.getElementById("triangle-btn").addEventListener("click", function () {
  try {
    serial += 1;
    const triangleBase = getInputValueById("triangle-base");
    const triangleHeight = getInputValueById("triangle-height");

    const geometryName = getElementNameByID("triangle");
    const triangleAreaResult = Number(
      (0.5 * triangleBase * triangleHeight).toFixed(2)
    );

    displayResultTable(serial, geometryName, triangleAreaResult);
  } catch (error) {
    alert(error.message);
  }
});
// card 2 triangle calculation
document.getElementById("rectangle-btn").addEventListener("click", function () {
  try {
    serial += 1;
    const rectangleWidth = getInputValueById("rectangle-width");
    const rectangleLength = getInputValueById("rectangle-length");

    const geometryName = getElementNameByID("rectangle");
    const rectangleAreaResult = Number(
      (rectangleWidth * rectangleLength).toFixed(2)
    );

    displayResultTable(serial, geometryName, rectangleAreaResult);
  } catch (error) {
    alert(error.message);
  }
});
// card 3 triangle calculation
document
  .getElementById("parallelogram-btn")
  .addEventListener("click", function () {
    try {
      serial += 1;
      const parallelogramBase = getInputValueById("parallelogram-base");
      const parallelogramHeight = getInputValueById("parallelogram-height");

      const geometryName = getElementNameByID("parallelogram");
      const parallelogramAreaResult = Number(
        (parallelogramBase * parallelogramHeight).toFixed(2)
      );

      displayResultTable(serial, geometryName, parallelogramAreaResult);
    } catch (error) {
      alert(error.message);
    }
  });
// card 4 rhombus calculation
document.getElementById("rhombus-btn").addEventListener("click", function () {
  try {
    serial += 1;
    const rhombusDiagonal1 = getInputValueById("rhombus-diagonal1");
    const rhombusDiagonal2 = getInputValueById("rhombus-diagonal2");

    const geometryName = getElementNameByID("rhombus");
    const rhombusAreaResult = Number(
      (0.5 * (rhombusDiagonal1 * rhombusDiagonal2)).toFixed(2)
    );

    displayResultTable(serial, geometryName, rhombusAreaResult);
  } catch (error) {
    alert(error.message);
  }
});
// card 5 rhombus calculation
document.getElementById("pentagon-btn").addEventListener("click", function () {
  try {
    serial += 1;
    const pentagonP = getInputValueById("pentagon-p");
    const pentagonB = getInputValueById("pentagon-b");

    const geometryName = getElementNameByID("pentagon");
    const pentagonAreaResult = Number(
      (0.5 * (pentagonP * pentagonB)).toFixed(2)
    );

    displayResultTable(serial, geometryName, pentagonAreaResult);
  } catch (error) {
    alert(error.message);
  }
});
// card 6 rhombus calculation
document.getElementById("ellipse-btn").addEventListener("click", function () {
  try {
    serial += 1;
    const ellipseA = getInputValueById("ellipse-a");
    const ellipseB = getInputValueById("ellipse-b");

    const geometryName = getElementNameByID("ellipse");
    const Pi = 3.1416;
    const ellipseAreaResult = Number((Pi * (ellipseA * ellipseB)).toFixed(2));

    displayResultTable(serial, geometryName, ellipseAreaResult);
  } catch (error) {
    alert(error.message);
  }
});
// calculation area and add result to the table function

function displayResultTable(serial, geometryName, calculationResult) {
  const tableContainer = document.getElementById("table-container");
  const tr = document.createElement("tr");
  tr.innerHTML = `

     <td>${serial}. ${geometryName}</td>
     <td  ><span id="calculation-result">${calculationResult}</span><span id="setMsq">cm</span><sup>2</sup></td>
     <td>
     <button id="convert-to-meter-square"
                    class="btn btn-sm w-28 h-7 rounded bg-[#1090D8]  border-blue-500 hover:bg-blue-600 normal-case"
                  >
                  Covert to m<sup>2</sup>
                  </button>
     </td>
  `;
  tableContainer.appendChild(tr);

  // convert  cm to meter
  document
    .getElementById("convert-to-meter-square")
    .addEventListener("click", function () {
        console.log('c');
      const textElement = document.getElementById("calculation-result");
      const value = parseFloat(textElement.innerText);
      const result = value / 100;
      const setInnerText = document.getElementById("calculation-result");
      setInnerText.innerText = result;
      const setInnerText2 = document.getElementById("setMsq");
      setInnerText2.innerText = "m";
      // document.getElementById('convert-to-meter-square').setAttribute("disabled",true)
    });
}
