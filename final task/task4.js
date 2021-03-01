const body = document.querySelector('body');

 async function getCompanesFunc() {
    const companiesFetch = await fetch( 'http://www.json-generator.com/api/json/get/cgwbLkTxnS?indent=2');
    const companiesObj = await companiesFetch.json();
    // console.log(companiesObj);
    return renderCompanies(companiesObj);
}
 
 function renderCompanies(arr) {
   console.log(arr);
   const table = document.createElement('table');
   const tableHead = document.createElement('tr');
   tableHead.innerHTML = ' <tr><th>index</th><th>company</th><th>email</th><th>phone</th><th>address</th></tr>';
   table.appendChild(tableHead);
  
   arr.forEach(element => {
   
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${element.index} </td>
      <td>${element.company} </td>
      <td>${element.email} </td>
      <td>${element.phone}</td>
      <td>  <span>${element.address}</span>  <button>Show</button></td>
      `;
   
    const showBtn = tr.querySelector('button');
    showBtn.addEventListener('click', showFunc);
 
    const showText = tr.querySelector('span');
    showText.style.visibility = 'hidden';
    
    table.appendChild(tr);
   });
  body.appendChild(table);
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
 };
 
 getCompanesFunc();