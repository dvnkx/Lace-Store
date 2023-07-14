import { body } from "express-validator";

export const loginValidation = [
  body("email", "Wrong email format").isEmail(),
  body("password", "Password length must be minimum 8 symbols").isLength({
    min: 8,
  }),
];

export const registerValidation = [
  body("email", "Wrong email format").isEmail(),
  body("password", "Password length must be minimum 8 symbols").isLength({
    min: 8,
  }),
  body("fullName", "Full name length must be minimum 2 symbols").isLength({
    min: 2,
  }),
  body("avatarUrl", "Wrong url reference").optional(),
];

export const createCardValidation = [
  body("brand", "Wrong brand name").isString(),
  body("model", "Wrong model name").isString(),
  body("cost", "Wrong cost format").isNumeric(),
  body("color", "Wrong color name").isString(),
  body("materials", "Wrong materials name").isString(),
  body("fastener", "Wrong fastener").isString().optional(),
  body("soleHeight", "Wrong format").isNumeric(),
  body("generalHeight", "Wrong format").isNumeric(),
  body("technology", "Wrong technology").isString().optional(),
  body("images", "Wrong number of images").isArray().isLength({ min: 1 }),
  body("sex", "Wrong sex").isString(),
  body("forKids").isBoolean(),
];

export const updateUserValidation = [
  body("fullName", "Password length must be minimum 2 symbols").isLength({
    min: 2,
  }),
  body("email", "Wrong email format").isEmail(),
  body("birthday", "Wrong birthday date").isDate(),
];

export const createDeliveryAddressValidation = [
  body("lastname", "Lastname is too short").isString().isLength({ min: 2 }),
  body("name", "Name is too short").isString().isLength({ min: 2 }),
  body("surname", "Surname is too short").isString().isLength({ min: 2 }),
  body("postIndex", "Post index is too short").isNumeric().isLength({ min: 3 }),
  body("region", "Wrong region format").isString(),
  body("street", "Wrong street format").isString(),
  body("city", "Wrong city format").isString(),
  body("phoneNumber", "Wrong mobile phone format").isMobilePhone(),
  body("email", "Wrong email format").isEmail(),
];
