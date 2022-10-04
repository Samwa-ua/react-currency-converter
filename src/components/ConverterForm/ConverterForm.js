import React, { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";

import styles from "./ConvertForm.module.css";

import CurrencyRow from "./CurrencyRow";

const BASE_URL =
  "https://api.exchangerate.host/latest?base=UAH&symbols=USD,EUR";

const ConverterForm = () => {
  const [currencyOptions, setSetCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        const firstCurrency = Object.keys(data.rates)[0];
        setSetCurrencyOptions([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(data.base);
        setToCurrency(firstCurrency);
      });
  }, []);

  return (
    <div className={styles.form}>
      <h2>Convert</h2>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
      />
      <p className={styles.equals}>=</p>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
      />
    </div>
  );
};

export default ConverterForm;
