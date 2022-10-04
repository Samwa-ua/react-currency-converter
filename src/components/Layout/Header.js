import React from "react";
import useFetch from "../../hooks/useFetch";

import styles from "./Header.module.css";

const Header = () => {
  const { data: exchangeRate, isPending } = useFetch(
    "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5"
  );

  const currencyRate = exchangeRate
    .filter((currency) => currency.ccy === "USD" || currency.ccy === "EUR")
    .map((currency) => (
      <div>
        <p>
          {currency.ccy}/{currency.base_ccy}{" "}
          <span>{Number(currency.sale).toFixed(2)}</span>
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
