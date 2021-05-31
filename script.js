// Initiation
const main = document.getElementById("main");
const paragraf_1 = document.createElement("p");
const paragraf_2 = document.createElement("p");
const paragraf_3 = document.createElement("p");
const calculation = document.createElement("div");
const input_1 = document.createElement("input");
const operator = document.createTextNode(" + ");
const input_2 = document.createElement("input");
const button = document.createElement("button");
const result = document.createElement("div");
const result_text = document.createTextNode("Result = ");
const result_field = document.createElement("input");

// Adding value
paragraf_1.innerHTML = "I am programming!!!";
paragraf_2.innerHTML = "Hello World!!";
paragraf_3.innerHTML = "The best calculator";
input_1.value = 10;
input_2.value = 5;
button.innerHTML = "Calculate";
result_field.value = 105;

// Adding to dom
main.appendChild(paragraf_1);
main.appendChild(paragraf_2);
main.appendChild(paragraf_3);
main.appendChild(calculation);
calculation.appendChild(input_1);
calculation.appendChild(operator);
calculation.appendChild(input_2);
calculation.appendChild(button);
main.appendChild(result);
result.appendChild(result_text);
result.appendChild(result_field);

// Button listener
button.onclick = () => {
  const input1st = input_1.value;
  const input2nd = input_2.value;
  const result = input1st + input2nd;
  result_field.value = result;
};
