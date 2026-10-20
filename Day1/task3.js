let English = 78;
let Mathematics = 85;
let JavaScript = 92;
let Design = 70;

let totalScore = English + Mathematics + JavaScript + Design;
console.log(totalScore);

let Average = totalScore / 4;
console.log(Average);

function calculateGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else if (score >= 50) {
    return "E";
  } else {
    return "F";
  }
}

// Challenge
console.log(calculateGrade(59));
console.log(calculateGrade(60));
console.log(calculateGrade(69));
console.log(calculateGrade(70));
console.log(calculateGrade(79));
console.log(calculateGrade(80));
console.log(calculateGrade(89));
console.log(calculateGrade(90));
