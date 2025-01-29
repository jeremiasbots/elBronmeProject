const cantAlumnos = Number(prompt("¿Cuántos alumnos son?"));
const preguntasExamen = prompt("¿De cuántas preguntas es el examen?");
let acertadas = 0;
let totalAcertadas = 0;
const questionsWithAnswers = [];

function createQuestions() {
  for (let p = 0; p < preguntasExamen; p++) {
    const correctAnswer = prompt(
      `¿Cuál es la respuesta correcta de la pregunta ${p + 1} en formato A, B, C, D, E?`
    );
    const options = ["a", "b", "c", "d", "e"];
    if (!options.some((o) => o === correctAnswer.toLowerCase())) {
      alert("Respuesta con formato no válido, vuelva a recargar la página");
      return;
    }
    questionsWithAnswers.push({ questionIndex: p, correctAnswer });
  }
}
createQuestions();

for (let i = cantAlumnos; i > 0; i--) {
  const nombre = prompt("¿Cuál es el nombre del alumno?");
  for (let m = 1; preguntasExamen >= m; m++) {
    const pregunta = prompt(`Opción (A, B, C, D, E) de la pregunta ${m}`);
    const questionSome = questionsWithAnswers.find((x) => x.questionIndex === (m - 1));
    if (questionSome && pregunta === questionSome.correctAnswer) {
      acertadas++;
    }
  }
  const nota = (20 / parseInt(preguntasExamen)) * acertadas;
  const pElement = document.createElement("p");
  pElement.id = `estudiante${i}`;
  pElement.innerHTML = `${nombre}: ${nota} (${acertadas}/${preguntasExamen})<br/>`;
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
