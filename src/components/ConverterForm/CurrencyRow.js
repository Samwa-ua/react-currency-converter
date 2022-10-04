import React from "react";

import styles from "./CurrencyRow.module.css";

const CurrencyRow = () => {
  return (
    <div>
      <input type="number" className={styles.input} />
      <select className={styles.select}>
        <option value="UAH">UAH</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>
    </div>
  );
};

export default CurrencyRow;
