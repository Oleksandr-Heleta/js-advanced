 /*
            Создайте функцию, которая по клику на "показать день недели" возвращает день недели для выбранной даты с интута.
            День нужно возвратить в div#result в текстовом формате т.е понедельник, вторник, суббота и т.д
          */



const dateSelector = document.getElementById("MyDateSelector");
const showDateBtn = document.getElementById("ShowDayButton");
const resultDiv = document.getElementById("result");
const dayOfWeek = document.createElement("h3");

const daysOfWeek = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];

function getDate() {
  const date = new Date(dateSelector.value);
  return date;
}

function showDate() {
  const fullDate = getDate();
  const dayNumber = fullDate.getDay();

  dayOfWeek.innerText = daysOfWeek[dayNumber];

  resultDiv.appendChild(dayOfWeek);
}

showDateBtn.addEventListener("click", showDate);
