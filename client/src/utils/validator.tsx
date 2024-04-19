export function validator(formData: any, schema: any) {
  const errors: any = {};

  // 각 필드별 유효성 검사
  Object.keys(schema).forEach((field) => {
    const fieldRules = schema[field];

    if (fieldRules.presence && !formData[field]) {
      errors[field] = `${fieldRules.presence.message}`;
    }

    // 형식 확인
    if (
      fieldRules.format &&
      formData[field] &&
      !fieldRules.format.pattern.test(formData[field])
    ) {
      errors[field] = `${fieldRules.format.message}`;
    }

    // 길이 확인
    if (
      fieldRules.length &&
      formData[field] &&
      formData[field].length < fieldRules.length.minimum
    ) {
      errors[field] = `Value should over ${fieldRules.length.minimum}.`;
    }

    // 패스워드와 패스워드 확인 필드가 있고, 값이 다를 경우 오류 반환
    if (
      field === "passwordConfirm" &&
      formData[field] !== formData["password"]
    ) {
      errors[field] = "It's not matched.";
    }
  });

  return errors;
}
