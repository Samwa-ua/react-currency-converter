import React from "react";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h2>Exchange Currency Converter</h2>
      <div>
        <p>
          USD/UAH <span>36</span>
        </p>
        <p>
          EUR/UAH <span>41</span>
        </p>
      </div>
    </header>
  );
};

export default Header;
