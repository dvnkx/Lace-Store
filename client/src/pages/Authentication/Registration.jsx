import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import { selectIsAuth, fetchRegistr } from "../../redux/slices/auth";

import { AuthInput } from "../../components/forms/index";
import { SubmitButton, CustomLink } from "../../components/ui/index";

import { registrSchema } from "../../schemas";

const Registration = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      avatarUrl: "",
      fullName: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(registrSchema),
    mode: "onChange",
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchRegistr(values));

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
    <div className="reg-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <AuthInput
          {...register("avatarUrl")}
          error={Boolean(errors.avatarUrl?.message)}
          errorMessage={errors.avatarUrl?.message}
          type="text"
          placeholder={"URL (optional)"}
        />
        <AuthInput
          {...register("fullName")}
          error={Boolean(errors.fullName?.message)}
          errorMessage={errors.fullName?.message}
          type="text"
          placeholder={"FULL NAME"}
        />
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
        <SubmitButton disabled={!isValid} type="submit">
          Submit
        </SubmitButton>
        <CustomLink to={"/login"}>Back </CustomLink>
      </form>
    </div>
  );
};

export default Registration;
