export const validatedata = (email, password, repassword, flag) => {
  // console.log("VALIDATING flag = ",flag);
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/.test(password);
  const isREPasswordValid =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/.test(repassword);
  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordValid) return "Password is not valid";
  if (flag) {
    if (!isREPasswordValid) return "Re-Enter Password is not valid";
    if (password === repassword) {
      console.log("here!!!");
      return null;
    }

    return "Password is not match with Re-Enter Password";
  }
  return null;
};
