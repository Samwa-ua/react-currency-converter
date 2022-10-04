import React from "react";
import useFetch from "../../hooks/useFetch";

import styles from "./Header.module.css";

const Header = () => {
  const { data: exchangeRate, isPending } = useFetch(
    "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"
  );

  const currencyRate = exchangeRate
    .filter((currency) => currency.cc === "USD" || currency.cc === "EUR")
    .map((currency) => (
      <div>
        <p key={currency.cc}>
          {currency.cc}/UAH <span>{currency.rate}</span>
        </p>
      </div>
    ));
  return (
    <header className={styles.header}>
      <h2>Exchange Currency Converter</h2>
      {isPending && <p>Loading</p>}
      <div className={styles.currencyRate}>{currencyRate}</div>
    </header>
  );
};

export default Header;
