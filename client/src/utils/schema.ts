export const joinSchema = {
  username: {
    presence: { allowEmpty: false, message: "필수 입력 정보입니다." },
    format: {
      pattern: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
      message: "유효한 이메일 주소의 형식이 아닙니다.",
    },
  },
  password: {
    presence: { allowEmpty: false, message: "필수 입력 정보입니다." },
    length: {
      minimum: 8,
    },
  },
  passwordConfirm: {
    presence: { allowEmpty: false, message: "필수 입력 정보입니다." },
    length: {
      minimum: 8,
    },
    equality: {
      attribute: "password",
      message: "패스워드가 일치하지 않습니다.",
    },
  },
  nickname: {
    presence: { allowEmpty: false, message: "필수 입력 정보입니다." },
    length: {
      maximum: 16,
      minimum: 1,
    },
  },
  gender: {
    presence: { allowEmpty: false, message: "필수 입력 정보입니다." },
  },
  region: {
    presence: { allowEmpty: false, message: "필수 입력 정보입니다." },
  },
  age: {
    presence: { allowEmpty: false, message: "필수 입력 정보입니다." },
  },
  height: {
    presence: { allowEmpty: false, message: "필수 입력 정보입니다." },
    length: {
      maximum: 3,
      minimum: 2,
    },
  },
  weight: {
    presence: { allowEmpty: false, message: "필수 입력 정보입니다." },
    length: {
      maximum: 3,
      minimum: 2,
    },
  },
};

export const loginSchema = {
  username: {
    presence: { allowEmpty: false, message: "필수 입력 정보입니다." },
    format: {
      pattern: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
      message: "유효한 이메일 주소의 형식이 아닙니다.",
    },
  },
  password: {
    presence: { allowEmpty: false, message: "필수 입력 정보입니다." },
    length: {
      minimum: 8,
    },
  },
};
