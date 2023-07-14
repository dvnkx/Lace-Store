import React, { useReducer } from "react";
import { useSelector } from "react-redux";
import "./styles.css";

import { toggleAccountReducer } from "../../helpers/AccountReducer";
import { getBirthdayDate } from "../../helpers/getDate";

import { account } from "../../assets/index";

import { SideNav } from "../../components/routes/index";

import {
  AccountBlock,
  UserPasswordBlock,
  UserDataBlock,
  UserAddressBlock,
} from "../../components/ui/index";

import { passwordData } from "../../helpers/AccountData";

const Account = () => {
  const [state, dispatch] = useReducer(toggleAccountReducer, {
    data: false,
    address: false,
    password: false,
  });

  const { fullName, email, birthday, deliveryAddress, avatarUrl } = useSelector(
    (state) => state.auth.data
  );

  const personalData = [
    fullName,
    email,
    birthday ? getBirthdayDate(birthday) : "09.09.1814",
  ];
  const addressData = Object.values(deliveryAddress);

  return (
    <div className="account-container">
      {
        <>
          <SideNav avatar={avatarUrl ? avatarUrl : account} />
          <div className="user-data-block">
            {!state.data ? (
              <AccountBlock
                setVisible={() => dispatch({ type: "data" })}
                data={personalData}
                section={"Personal Data"}
              />
            ) : (
              <UserDataBlock setVisible={() => dispatch({ type: "data" })} />
            )}
          </div>
          <div className="address-block">
            {!state.address ? (
              <AccountBlock
                setVisible={() => dispatch({ type: "address" })}
                section={"My shipping addresses"}
                data={addressData}
              ></AccountBlock>
            ) : (
              <UserAddressBlock
                setVisible={() => dispatch({ type: "address" })}
              />
            )}
          </div>

          <div className="password-block">
            {!state.password ? (
              <AccountBlock
                setVisible={() => dispatch({ type: "password" })}
                section={"Change Password"}
                data={passwordData}
              />
            ) : (
              <UserPasswordBlock
                setVisible={() => dispatch({ type: "password" })}
              />
            )}
          </div>
        </>
      }
    </div>
  );
};

export default Account;
