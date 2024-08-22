function emailValidation(email) {
  const regExp = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
  return regExp.test(email);
}
export default emailValidation;
