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

