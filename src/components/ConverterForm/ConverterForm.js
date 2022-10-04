import React from "react";

import styles from "./ConvertForm.module.css";

import CurrencyRow from "./CurrencyRow";

const ConverterForm = () => {
  return (
    <div className={styles.form}>
      <h2>Convert</h2>
      <CurrencyRow />
      <p className={styles.equals}>=</p>
      <CurrencyRow />
    </div>
  );
};

export default ConverterForm;
