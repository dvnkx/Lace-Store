import React from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import "./styles.css";

import { UserInput } from "../../forms/index";
import { Buttons } from "../index";

import axios from "../../../axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { editDataSchema } from "../../../schemas";

import { getUnixTime } from "date-fns";

const UserDataBlock = ({ setVisible }) => {
  const { fullName, email, birthday, _id } = useSelector(
    (state) => state.auth.data
  );
  const userData = {
    fullName,
    email,
    birthday,
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      fullName: fullName,
      email: email,
      birthday: "",
    },
    resolver: yupResolver(editDataSchema),
    mode: "onChange",
  });

  const onSubmit = async (values) => {
    values.birthday = getUnixTime(values.birthday);

    if (
      values.birthday === userData.birthday &&
      values.fullName === userData.fullName &&
      values.email === userData.email
    ) {
      return setVisible();
    }

    const { fullName, email, birthday } = values;

    await axios.patch(`/user/update:${_id}`, {
      fullName,
      email,
      birthday,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="user-data-form">
      <UserInput
        {...register("fullName")}
        type={"text"}
        section={"Full Name"}
        error={Boolean(errors.fullName?.message)}
        errorMessage={errors.fullName?.message}
      />
      <UserInput
        error={Boolean(errors.email?.message)}
        errorMessage={errors.email?.message}
        {...register("email")}
        type={"text"}
        section={"Email"}
      />
      <UserInput
        {...register("birthday")}
        type={"date"}
        section={"Birthday"}
        error={Boolean(errors.birthday?.message)}
        errorMessage={errors.birthday?.message}
      />
      <Buttons disabled={!isValid} setVisible={setVisible} />
    </form>
  );
};

export default UserDataBlock;
