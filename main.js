const grades = [
    { name: "Макар", score: 85 },
    { name: "Денис", score: 92 },
    { name: "Анна", score: 78 },
    { name: "Даша", score: 88 },
    { name: "Студент_X", score: 45 }
];


function findTopStudent(data) {
    return data.reduce((top, student) => student.score > top.score ? student : top, data[0]).name;
}