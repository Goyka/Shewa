export const joinSchema = {
  username: {
    presence: { allowEmpty: false, message: "Required field." },
    format: {
      pattern: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
      message: "It's not valid.",
    },
  },
  password: {
    presence: { allowEmpty: false, message: "Required field." },
    length: {
      minimum: 8,
    },
  },
  passwordConfirm: {
    presence: { allowEmpty: false, message: "Required field." },
    length: {
      minimum: 8,
    },
    equality: {
      attribute: "password",
      message: "It isn't matched.",
    },
  },
  nickname: {
    presence: { allowEmpty: false, message: "Required field." },
    length: {
      maximum: 16,
      minimum: 1,
    },
  },
  gender: {
    presence: { allowEmpty: false, message: "Required field." },
  },
  region: {
    presence: { allowEmpty: false, message: "Required field." },
  },
  age: {
    presence: { allowEmpty: false, message: "Required field." },
  },
  height: {
    presence: { allowEmpty: false, message: "Required field." },
    length: {
      maximum: 3,
      minimum: 2,
    },
  },
  weight: {
    presence: { allowEmpty: false, message: "Required field." },
    length: {
      maximum: 3,
      minimum: 2,
    },
  },
};

export const loginSchema = {
  username: {
    presence: { allowEmpty: false, message: "Required field." },
    format: {
      pattern: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
      message: "It's not valid.",
    },
  },
  password: {
    presence: { allowEmpty: false, message: "Required field." },
    length: {
      minimum: 8,
    },
  },
};
