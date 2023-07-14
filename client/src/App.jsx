import React, { useEffect, lazy, Suspense } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import WithSuspense from "./hooks/withSuspense.jsx";

import { fetchAuthMe, selectIsAuth } from "./redux/slices/auth.js";

import { Navbar, Footer } from "./components/routes/index.js";

import { Landing } from "./pages/Landing/Landing.jsx";

export const Registration = lazy(() =>
  import("./pages/Authentication/Registration.jsx")
);
const Login = lazy(() => import("./pages/Authentication/Login.jsx"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound.jsx"));
const Category = lazy(() => import("./pages/Category/Category.jsx"));
const Sneaker = lazy(() => import("./pages/Products/Sneaker[id].jsx"));
const Account = lazy(() => import("./pages/Account/Account.jsx"));
const Orders = lazy(() => import("./pages/Account/Orders.jsx"));
const Basket = lazy(() => import("./pages/Basket/Basket.jsx"));
const Favorites = lazy(() => import("./pages/Favorites/Favorites.jsx"));

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    dispatch(fetchAuthMe());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/user">
          {isAuth && (
            <Route
              path="account"
              element={
                <WithSuspense
                  Children={<WithSuspense Children={<Account />} />}
                />
              }
            />
          )}
          <Route
            path="basket"
            element={<WithSuspense Children={<Basket />} />}
          />
          <Route
            path="orders"
            element={<WithSuspense Children={<Orders />} />}
          />
        </Route>
        <Route path="/products">
          <Route
            path="men"
            element={<WithSuspense Children={<Category />} />}
          />
          <Route
            path="women"
            element={<WithSuspense Children={<Category />} />}
          />
          <Route
            path="kids"
            element={<WithSuspense Children={<Category />} />}
          />
          <Route path=":id" element={<WithSuspense Children={<Sneaker />} />} />
          <Route
            path="favorites"
            element={<WithSuspense Children={<Favorites />} />}
          />
        </Route>
        <Route path="login" element={<WithSuspense Children={<Login />} />} />
        <Route
          path="registration"
          element={<WithSuspense Children={<Registration />} />}
        />
        <Route path="*" element={<WithSuspense Children={<NotFound />} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
