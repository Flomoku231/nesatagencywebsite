function Validation(values) {
  let errors = {};

  if (!values.fullName.trim()) {
    errors.fullName = "Full Name is required";
  }

  if (!values.phoneNumber.trim()) {
    errors.phoneNumber = "Phone Number is required";
  } 
  // else if (!/^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(values.phoneNumber)) {
  //   errors.phoneNumber = "Phone number is not valid";
  // }
  if (!values.email) {
    errors.email = "Email is required.";
  } else if (
    !/^([a-zA-Z0-9_])+@(([a-zA-Z0-9])+\.)+([a-zA-Z0-9]{2,4})+$/i.test(
      values.email
    )
  ) {
    errors.email = "Email is not valid.";
  }
  if (!values.hospital.trim()) {
    errors.hospital = "Hospital/Clinic is required";
  }
  if (!values.hospitalAddress.trim()) {
    errors.hospitalAddress = "Hospital/Clinic address is required";
  }
  if (!values.password.trim()) {
    errors.password = "Password is required.";
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 digits.";
  }
  if (!values.comfirmedPassword) {
    errors.comfirmedPassword = "Comfirmed password is required";
  } else if (values.comfirmedPassword !== values.password) {
    errors.comfirmedPassword = "Password does not match.";
  }
  
  return errors;
}

export default Validation;
