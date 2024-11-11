// Task 2: Create the Portfolio Module

// Import named exports

import { assets } from './asset.js';

// Define and export function
export function calculatePortfolioValue() {
    return assets.reduce((total, asset) => total + asset.price * asset.quantity, 0);
}

// Export function
export function getPortfolioAllocation() {
    const totalValue = calculatePortfolioValue();
    return assets.map(asset => ({
        name: asset.name,
        allocation: ((asset.price * asset.quantity) / totalValue) * 100
    }));
}
