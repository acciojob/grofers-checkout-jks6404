const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
const table = document.querySelector('table');
const prices = document.querySelectorAll('.price');

let totalPrice = 0;
for (let i = 0; i < prices.length; i++) {
  totalPrice += parseFloat(prices[i].innerText);
}

const newRow = document.createElement('tr');
const totalCell = document.createElement('td');
	totalCell.id="ans";
totalCell.setAttribute('colspan', '2');
totalCell.innerText = 'Total Price: ' + totalPrice.toFixed(2); // Format the total price with 2 decimal places

newRow.appendChild(totalCell);
table.appendChild(newRow);

	};

getSumBtn.addEventListener("click", getSum);
