const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

let table = document.getElementById("table");

const getSum = () => {
    let allPrices = document.querySelectorAll("td[class = price]");
    
    
    let sum = 0;

    for(let i= 0; i < allPrices.length; i++){
        sum = sum + parseInt(allPrices[i].innerHTML.trim());

    }

    let newRow = document.createElement("tr");
	 newRow.setAttribute("id", "ans");
    let cell1 = document.createElement("td");
    cell1.textContent = "Total is :";
    let cell2 = document.createElement("td");
    cell2.textContent = sum;

    newRow.appendChild(cell1);
    newRow.appendChild(cell2);

    table.appendChild(newRow);
  
};

getSumBtn.addEventListener("click", getSum);
