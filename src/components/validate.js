export const validate = (data) => {
  const errors = {};
  if (!data.username.trim()) errors.username = "username required";
  delete errors.username;

  if (!data.email) errors.email = "email required";
  else if (
    !/^([a-z]+)([\w\.\_]{3,20})(\@)([a-z]{2,8})\.([a-z]{2,7})/gim.test(
      data.email
    )
  )
    errors.email = "Email address is invalid";
  else delete errors.email;

  if (!data.password) errors.password = "password is rquired";
  else if (data.password.length < 6)
    errors.password = "Password need to be 6 characters or more";
  else delete errors.password;

  if (!data.confirmPassword) errors.confirmPassword = "Confirm the password";
  else if (data.confirmPassword !== data.password)
    errors.confirmPassword = "password do not match";
  else delete errors.confirmPassword;

  if (!data.isAccepted) delete errors.isAccepted;
  else errors.isAccepted = "Accept our regulations";

  return errors;
};
