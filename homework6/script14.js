const processStudents = (...students) => {
  students.forEach(({ name, grades }) => {
    const averageGrade =
      grades.reduce((sum, grade) => sum + grade, 0) / grades.length;

    console.log(`Name: ${name}, Average Grade: ${averageGrade.toFixed(2)}`);
  });

  const names = students.map(({ name }) => name);
  console.log("Combined Names:", names);
};

// const student1 = { name: "John", age: 20, grades: [90, 80, 85] };
// const student2 = { name: "Jane", age: 22, grades: [95, 90, 93] };

// processStudents(student1, student2);
