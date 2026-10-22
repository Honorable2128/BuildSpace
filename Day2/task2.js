// Age Calculator
function calculateAge(birthYear, currentYear){
    if(birthYear > currentYear){
        return "Birth Year can't be greater than current year."
    }
    let age = currentYear - birthYear
    return age
}

console.log(calculateAge(2005, 2026));


function canVote(age){
    if(age >= 18){
        return "You can vote"
    } else if(age < 18){
        return "You are a minor."
    }
    else{
        return age
    }
}

console.log(canVote(calculateAge(2005, 2026)));
console.log(canVote(calculateAge(2260, 2026)));
console.log(canVote(calculateAge(1990, 2026)));
console.log(canVote(calculateAge(2010, 2026)));



