function getInputFieldValueById(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  inputField.value = " ";
  return inputFieldValue;
}

function getTextElementValueById(elementId) {
  const textElement = document.getElementById(elementId);
  const textElementValueString = textElement.innerText;
  const TextElementValue = parseFloat(textElementValueString);
  return TextElementValue;
}

function setTextElementValueById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}
