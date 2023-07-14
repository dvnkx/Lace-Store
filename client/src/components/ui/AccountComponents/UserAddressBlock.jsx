import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from "react-redux";

import "./styles.css";

import axios from "../../../axios";
import { addressSchema } from "../../../schemas";

import { UserInput } from "../../forms/index";

import Buttons from "../Buttons/Buttons";

const UserAddressBlock = ({ setVisible }) => {
  const { _id } = useSelector((state) => state.auth.data);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      lastName: "",
      name: "",
      surname: "",
      postIndex: "",
      region: "",
      street: "",
      city: "",
      phoneNumber: "",
      email: "",
    },
    resolver: yupResolver(addressSchema),
    mode: "onChange",
  });

  const onSubmit = async (values) => {
    await axios.post(`/user/address:${_id}`, values);

    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="address-data-form">
      <UserInput
        section={"Last name"}
        {...register("lastName")}
        error={Boolean(errors.lastName?.message)}
        errorMessage={errors.lastName?.message}
        placeholder={"Shevchenko"}
      />
      <UserInput
        section={"Name"}
        error={Boolean(errors.name?.message)}
        errorMessage={errors.name?.message}
        {...register("name")}
        placeholder={"Taras"}
      />
      <UserInput
        section={"Surname"}
        error={Boolean(errors.surname?.message)}
        errorMessage={errors.surname?.message}
        {...register("surname")}
        placeholder={"Grigorovich"}
      />
      <UserInput
        section={"Post index"}
        error={Boolean(errors.postIndex?.message)}
        errorMessage={errors.postIndex?.message}
        {...register("postIndex")}
        placeholder={"20210"}
      />
      <UserInput
        section={"Region"}
        error={Boolean(errors.region?.message)}
        errorMessage={errors.region?.message}
        {...register("region")}
        placeholder={"Cherkasy region"}
      />
      <UserInput
        section={"Street"}
        error={Boolean(errors.street?.message)}
        errorMessage={errors.street?.message}
        {...register("street")}
        placeholder={"Shkilniy provulok"}
      />
      <UserInput
        section={"City"}
        error={Boolean(errors.city?.message)}
        errorMessage={errors.city?.message}
        {...register("city")}
        placeholder={"Moryntsi"}
      />
      <UserInput
        section={"Phone number"}
        error={Boolean(errors.phoneNumber?.message)}
        errorMessage={errors.phoneNumber?.message}
        {...register("phoneNumber")}
        type={"tel"}
        placeholder={"38068888888"}
      />
      <UserInput
        section={"Email"}
        error={Boolean(errors.email?.message)}
        errorMessage={errors.email?.message}
        {...register("email")}
        type={"email"}
        placeholder={"shevchenko@gmail.com"}
      />
      <Buttons disabled={!isValid} setVisible={setVisible} />
    </form>
  );
};

export default UserAddressBlock;
