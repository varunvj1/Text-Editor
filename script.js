//Update the text in the output textArea
function updateText() {
  let input = document.getElementById("text-input").value;
  document.getElementById("text-output").innerText = input;
}

function makeBold(elem) {
  //elem is the Bold button element
  //Toggle the .active class (Bootstrap class)
  elem.classList.toggle("active");

  //Toggle the .bold class to make the text bold
  document.getElementById("text-output").classList.toggle("bold");
}

function makeItalic(elem) {
  elem.classList.toggle("active");
  document.getElementById("text-output").classList.toggle("italic");
}

function makeUnderline(elem) {
  elem.classList.toggle("active");
  let output = document.getElementById("text-output");
  if (output.classList.contains("underline")) {
    output.classList.remove("underline");
  } else {
    output.classList.add("underline");
  }
}

function alignText(elem, alignType) {
  let output = document.getElementById("text-output");
  output.style.textAlign = alignType;

  /* If one align button is active, make other align buttons inactive */
  //All the align buttons have class name as ALIGN
  let buttonList = document.getElementsByClassName("align");
  for (let i = 0; i < buttonList.length; i++) {
    //Remove .active class from all align buttons
    buttonList[i].classList.remove("active");
  }

  //Make the seleceted align button active
  elem.classList.toggle("active");
}
