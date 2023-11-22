import React, { createContext, useState, useEffect } from 'react';
import { fetchCategories } from './ProductService'; 

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [priceFilter, setPriceFilter] = useState({ min: 0, max: 1000 }); 

  useEffect(() => {
    
    const getCategories = async () => {
      const fetchedCategories = await fetchCategories();
      setCategories(fetchedCategories);
    };
    getCategories();
  }, []);

  return (
    <ProductContext.Provider value={{ categories, priceFilter, setPriceFilter }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };



