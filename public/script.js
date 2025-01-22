const cantAlumnos = Number(prompt("¿Cuántos alumnos son?"));
const preguntasExamen = prompt("¿De cuántas preguntas es el examen?");
const respuestaAfirmativa = "s";
let acertadas = 0;
let totalAcertadas = 0;

for (let i = cantAlumnos; i > 0; i--) {
  const nombre = prompt("¿Cuál es el nombre del alumno?");
  for (let m = 1; preguntasExamen >= m; m++) {
    const pregunta = prompt(`La pregunta ${m} es correcta`);
    if (pregunta === respuestaAfirmativa) acertadas++;
  }
  const nota = (20 / parseInt(preguntasExamen)) * acertadas;
  const pElement = document.createElement("p");
  pElement.id = `estudiante${i}`;
  pElement.innerHTML = `${nombre}: ${nota}<br/>`;
  document.body.appendChild(pElement);
  totalAcertadas += acertadas;
  acertadas = 0;
}

const h3Element = document.createElement("h3");
h3Element.id = "totalAcertadas";
h3Element.innerHTML = `Total de preguntas acertadas entre todos los alumnos:<br/>${totalAcertadas}/${
  cantAlumnos * preguntasExamen
}`;
document.body.appendChild(h3Element);
