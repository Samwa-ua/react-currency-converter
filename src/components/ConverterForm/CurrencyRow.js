import React from "react";

import styles from "./CurrencyRow.module.css";

const CurrencyRow = ({ currencyOptions, selectedCurrency }) => {
  return (
    <div>
      <input type="number" className={styles.input} />
      <select className={styles.select} value={selectedCurrency}>
        {currencyOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyRow;
