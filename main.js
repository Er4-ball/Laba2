const grades = [
    { name: "Макар", score: 85 },
    { name: "Денис", score: 92 },
    { name: "Анна", score: 78 },
    { name: "Даша", score: 88 },
    { name: "Студент_X", score: 45 }
];

function calculateAverage(data) {
    const total = data.reduce((sum, student) => sum + student.score, 0);
    return total / data.length;
}

function filterFailed(data, passScore) {
    return data.filter(student => student.score < passScore).map(student => student.name);
}

function addLetterGrade(data) {
    return data.map(student => {
        let letter = "C";
        if (student.score >= 90) letter = "A";
        else if (student.score >= 75) letter = "B";
        return { ...student, letter };
    });
}

function findTopStudent(data) {
    return data.reduce((top, student) => student.score > top.score ? student : top, data[0]).name;
}


console.log("1. Средний балл группы:", calculateAverage(grades));
console.log("2. Лучший студент:", findTopStudent(grades));
console.log("3. Список должников (балл < 60):", filterFailed(grades, 60));
console.log("4. Итоговый массив с буквенными оценками:");
console.log(addLetterGrade(grades));