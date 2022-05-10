let getString = () => {
  return prompt("Ingresar cadena de texto");
};

let string = getString();

let getTextParentesis = () => {
  let regExp = /\(([^)]+)\)*/;
  let matches = regExp.exec(string);
  alert(matches?.[1] ?? "");
};
