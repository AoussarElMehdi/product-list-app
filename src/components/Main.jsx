import React, { useState, useEffect } from "react";
import Table from "./MuiTable";
import styles from "../assets/styles/main.module.css";
import { fetchProducts } from "../api/index";

const Main = () => {
  const [productData, setProductData] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchData = async () => {
    await fetchProducts()
    .then((data) => {
      setProductData(data);
      setCategories(prev => [...new Set(data.map((item) => item.category))])
    })
    .catch((e) => {
      console.error(e);
    });
  };

  const fetchDataByCategorie = (e) =>{
    fetchProducts(e.target.value)
    .then((data) => {
      setProductData(data);
    })
    .catch((e) => {
      console.error(e);
    });
  }


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className={styles.main_section}>
      <div className={styles.container}>
        <div className={styles.search_section}>
          <i className={`fas fa-search ${styles.search_icon}`}></i>
          <select className={styles.search_input} onChange={e => fetchDataByCategorie(e)}>
            <option value="all">Category</option>
            {categories.map((value,index) => (
              <option key={index} value={value}>{value}</option>
            ))}
          </select>
        </div>
        <Table products={productData} />
      </div>
    </main>
  );
};

export default Main;
