const valid = ({ fullname, rollNumber, email, phone }) => {
  const err = {};

  if (!fullname) {
    err.fullname = "Please add your full name.";
  } else if (fullname.length > 25) {
    err.fullname = "Full name is up to 25 characters long.";
  }

  if (!rollNumber) {
    err.rollNumber = "Please add your Roll Number.";
  } else if (rollNumber.replace(/ /g, "").length !== 10) {
    err.rollNumber = "Invalid Roll Number";
  }

  if (!email) {
    err.email = "Please add your email.";
  } else if (validateEmail(email)) {
    err.email = "Email format is incorrect.";
  }

  if (!phone) {
    err.phone = "Please add your Phone Number.";
  } else if (phone.length < 6) {
    err.phone = "Phone Number must be at least 6 characters.";
  }

  return {
    errMsg: err,
    errLength: Object.keys(err).length,
  };
};

function validateEmail(email) {
  // eslint-disable-next-line
  const re =
    /^(([^<>()[\]\\.,;:\s@\"] + (\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export default valid;
