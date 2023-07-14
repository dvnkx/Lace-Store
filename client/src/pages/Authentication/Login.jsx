import React from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";

import { fetchAuth, selectIsAuth } from "../../redux/slices/auth";

import { AuthInput } from "../../components/forms";
import { CustomLink, SubmitButton } from "../../components/ui/index";

import { loginSchema } from "../../schemas";

import "./styles.css";

export const Login = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values));

    if (!data.payload) {
      return alert("Authenticate failed");
    }

    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
  };

  if (isAuth) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <AuthInput
          {...register("email")}
          error={Boolean(errors.email?.message)}
          errorMessage={errors.email?.message}
          type="email"
          placeholder={"EMAIL"}
        />
        <AuthInput
          {...register("password")}
          error={Boolean(errors.password?.message)}
          errorMessage={errors.password?.message}
          type="password"
          placeholder={"PASSWORD"}
        />
        <SubmitButton disabled={!isValid} type={"submit"}>
          Submit
        </SubmitButton>
        <CustomLink to={"/registration"}>Registration </CustomLink>
      </form>
    </div>
  );
};

export default Login;
