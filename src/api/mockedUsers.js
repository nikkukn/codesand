// src/api.js
/* export const fetchUser = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id) {
          resolve({ id, name: "Raman Kumar" });
        } else {
          reject(new Error("Failed to fetch user"));
        }
      }, 1000);
    });
  }; */

  // src/api/api.js
export const fetchProducts = async () => {
    const response = await fetch('https://dummyjson.com/products');
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return await response.json();
  }
  
  