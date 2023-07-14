import React from "react";
import { SideNav } from "../../components/routes";
import { useSelector } from "react-redux";
import "./styles.css";

import { account } from "../../assets/index";

import { Spinner, OrderComponent } from "../../components/ui";

const Orders = () => {
  const { data, status } = useSelector((state) => state.auth);
  const isLoading = status === "loading";

  return (
    <div className="orders-container">
      {isLoading ? (
        <Spinner marginLeft={"40%"} />
      ) : data && data.orders.length !== 0 ? (
        <>
          <SideNav avatar={data.avatarUrl ? data.avatarUrl : account} />
          <div className="orders-block">
            <h1>Orders: {data.orders.length}</h1>
            <div className="orders">
              {data.orders.map((order) => (
                <OrderComponent key={order._id} order={order} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <SideNav avatar={data && data.avatarUrl ? data.avatarUrl : account} />
          <div className="no-orders">
            <p>There are no orders</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Orders;
