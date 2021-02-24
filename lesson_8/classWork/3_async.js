/*

  Задание:

    Написать при помощи async-await скрипт, который:

    Получает список компаний:  http://www.json-generator.com/api/json/get/ceRHciXcVu?indent=2
    Перебирает, выводит табличку:

    # | Company  | Balance | Показать дату регистрации | Показать адресс |
    1.| CompName | 2000$   | button                    | button
    2.| CompName | 2000$   | 20/10/2019                | button
    3.| CompName | 2000$   | button                    | button
    4.| CompName | 2000$   | button                    | button

    Данные о дате регистрации и адресс скрывать при выводе и показывать при клике.

*/
const asyncDiv = document.getElementById('async');

 async function getCompanesFunc() {
    const companiesFetch = await fetch( 'http://www.json-generator.com/api/json/get/ceRHciXcVu?indent=2');
    const companiesObj = await companiesFetch.json();
    // console.log(companiesObj);
    return renderCompanies(companiesObj);
 }

 function renderCompanies(arr) {
   console.log(arr);
   const table = document.createElement('table');
   const tableHead = document.createElement('tr');
   tableHead.innerHTML = ' <tr><th>#</th><th>Company</th><th>Balance</th><th>Показать дату регистрации</th><th> Показать адресс</th></tr>';
   table.appendChild(tableHead);
   let count = 1;
   arr.forEach(element => {
    const tdAdress = `
      ${element.address.country}, 
      ${element.address.city}, 
      ${element.address.street}
      ${element.address.house};
    `;
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${count} </td>
      <td>${element.company} </td>
      <td>${element.balance} </td>
      <td>  <span>${element.registered}</span> <button>Show</button></td>
      <td>  <span>${tdAdress}</span>  <button>Show</button></td>
      `;
    count++;
    const showBtn = tr.querySelectorAll('button');
    showBtn.forEach((e) =>{
      e.addEventListener('click', showFunc);
    });

    const showText = tr.querySelectorAll('span');
    showText.forEach((e) =>{
      e.style.visibility = 'hidden';
    });
    table.appendChild(tr);
   });
  asyncDiv.appendChild(table);
 }

 function showFunc(e) {
  const span = e.target.parentNode.querySelector('span');
  if (span.style.visibility === 'hidden'){
    span.style.visibility = "visible";
    e.target.innerText = "Hide";
  } else {
    span.style.visibility = "hidden";
    e.target.innerText = "Show";
  }
 }
 getCompanesFunc();