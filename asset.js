// Task 1: Create the Asset Module

// Define an array of assets

export const assets = [
    { id: 1, name: "Apple Inc.", type: "stock", price: 150, quantity: 100 },
    { id: 2, name: "Microsoft Corp.", type: "stock", price: 250, quantity: 200 },
    { id: 3, name: "Tesla Inc.", type: "stock", price: 700, quantity: 50 },
  ];
  
  export function getAssetById(id) {
      return assets.find(asset => asset.id === id);
  }
  
