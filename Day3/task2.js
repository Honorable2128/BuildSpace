// Student Score Analyzer
const scores =  [78, 92, 65, 88, 54, 71, 96, 83];
const totalScore = scores.reduce((sum, score) => score + sum,0)
const averageScore = totalScore / scores.length
const lowestScore = Math.min(...scores)
const highestScore = Math.max(...scores)
const passed = scores.filter(score => score >= 50).length;
const failed = scores.filter(score => score < 50).length;

function analyzeScores(score){
    if(score.length === 0){
        console.log("No score array when there is an empty array");
        return;
    }
}


console.log(averageScore);
console.log(totalScore);
console.log(lowestScore);
console.log(highestScore);
console.log(passed);
console.log(failed);
analyzeScores(scores)


