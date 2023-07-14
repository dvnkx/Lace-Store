import React from "react";

import { pencil } from "../../../assets/index";

import "./styles.css";

const AccountBlock = ({ data, children, section, setVisible }) => {
  return (
    <div className="info-block">
      <h1>{section}</h1>
      <div className="data">
        {setVisible && (
          <button onClick={setVisible} className="info">
            <img alt="pencil" src={pencil} />
          </button>
        )}
        {data && (
          <ul>
            {data.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        )}
      </div>
      {children}
    </div>
  );
};

export default AccountBlock;
