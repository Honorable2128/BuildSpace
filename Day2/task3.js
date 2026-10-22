// Password s Checker
function checkPassword(password) {
  let missing = [];
  if (password < 8) {
    missing.push("At least 8 characters");
  }

  if (!/[0-9]/.test(password)) {
    missing.push("A Number");
  }

  if (!/[A-Z]/.test(password)) {
    missing.push("An Uppercase letter");
  }

  if (!/[a-z]/.test(password)) {
    missing.push("a lowercase letter");
  }

  let strength;

  if (missing.length >= 3) {
    strength = "weak";
  } else if (missing.length >= 1) {
    strength = "medium";
  } else {
    strength = "strong";
  }

  console.log("Password s:", strength);

  if (missing.length > 0) {
    console.log("Missing requirements:", missing);
  } else {
    console.log("All requirements met!");
  }

  return strength;
}

checkPassword("abc");
checkPassword("abcdefgh");
checkPassword("Abcdefgh");
checkPassword("Abcdefg1");
checkPassword("ABC12345");
