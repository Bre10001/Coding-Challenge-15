
// Task 4: Create the Main Application

// main.js

import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import { Transaction } from './transaction.js';

function displayPortfolioDetails() {
    const portfolioValue = calculatePortfolioValue();
    const portfolioAllocation = getPortfolioAllocation();

    document.getElementById('portfolioDetails').innerText = `Total Portfolio Value: $${portfolioValue.toFixed(2)}`;
    
    const portfolioPercentages = document.getElementById('portfolioPercentages');
    portfolioPercentages.innerHTML = '';
    portfolioAllocation.forEach(asset => {
        const li = document.createElement('li');
        li.textContent = `${asset.name}: ${asset.allocation.toFixed(2)}%`;
        portfolioPercentages.appendChild(li);
    });
}

function displayTransactionLog(transaction) {
    const transactionLog = document.getElementById('transactionLog');
    const li = document.createElement('li');
    li.textContent = `${transaction.type.toUpperCase()} ${transaction.quantity} units of ${transaction.assetId}`;
    transactionLog.appendChild(li);
}

// Initial portfolio display
displayPortfolioDetails();

try {
    const transaction1 = new Transaction(1, 'buy', 5); // Buying 5 AAPL stocks
    displayTransactionLog(transaction1);

    const transaction2 = new Transaction(2, 'sell', 2); // Selling 2 MSFT stocks
    displayTransactionLog(transaction2);

    // Update portfolio details after transactions
    displayPortfolioDetails();
} catch (error) {
    console.error(error.message);
}
