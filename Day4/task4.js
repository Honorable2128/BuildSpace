const students = [
  {
    id: 1,
    name: "John Doe",
    score: 60,
    subject: "Mathematics",
  },
  {
    id: 2,
    name: "Johnson Mercy",
    score: 30,
    subject: "Physics",
  },
  {
    id: 3,
    name: "Femi Mike",
    score: 70,
    subject: "English",
  },
  {
    id: 4,
    name: "Peter Moses",
    score: 90,
    subject: "Yoruba",
  },
  {
    id: 5,
    name: "Jack Monday",
    score: 75,
    subject: "History",
  },
  {
    id: 6,
    name: "Andrew Mark",
    score: 15,
    subject: "Geography",
  },
];

function getPassingStudents(students, passMark) {
  return students.filter((student) => student.score >= passMark);
}

function getAverageScore(students) {
  const total = students.reduce((sum, student) => {
    return sum + student.score;
  }, 0);
  return total / students.length;
}

function getTopStudent(students){
    return students.reduce((highest, student) => {
        if(student.score > highest.score){
            return student
        } else{
            return highest
        }
    })
}

function assignGrade(score){
    if(score >= 70){
        return "A"
    } else if(score >= 60){
        return "B"
    } else if(score >= 50){
        return "C"
    } else if(score >= 45){
        return "D"
    } else if(score >= 40){
        return "E"
    } else{
        return "F"
    }
}

// challenge with the help of AI
const studentsWithGrades = students.map((student) => {
  return {
    ...student, grade: assignGrade(student.score)
  }
})

console.log(studentsWithGrades);

