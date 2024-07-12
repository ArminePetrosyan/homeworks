const students = [
  { name: "Alice", ID: 1, grades: [85, 90, 78] },
  { name: "Bob", ID: 2, grades: [92, 88, 84] },
];

function addStudent(name, ID, grades) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].ID === ID) {
      console.log(`Student with ID ${ID} already exists.`);
      return;
    }
  }

  const studentObj = {
    name,
    ID,
    grades,
  };

  students.push(studentObj);
  console.log(`Student '${name}' with ID ${ID} added successfully.`);
}

// addStudent("test", 99, [9, 8]);

function addGrade(ID, grade) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].ID === ID) {
      students[i].grades.push(grade);
      console.log(
        `Grade ${grade} added to student '${students[i].name}' with ID ${ID}.`
      );
      return;
    }
  }
  console.log(`Student with ID ${ID} not found.`);
}

// console.log(addGrade(1, 95));

function calculateAverageGrade(ID) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].ID === ID) {
      const grades = students[i].grades;
      if (grades.length === 0) {
        console.log(
          `Student '${students[i].name}' with ID ${ID} has no grades.`
        );
        return 0;
      }
      let sum = 0;
      for (let j = 0; j < grades.length; j++) {
        sum += grades[j];
      }
      const average = sum / grades.length;
      return average;
    }
  }
  console.log(`Student with ID ${ID} not found.`);
}

// console.log(calculateAverageGrade(1));

function findHighestGrade(ID) {
  let highestGrade = -Infinity;
  let studentFound = false;

  for (let i = 0; i < students.length; i++) {
    if (students[i].ID === ID) {
      const grades = students[i].grades;
      if (grades.length === 0) {
        console.log(
          `Student '${students[i].name}' with ID ${ID} has no grades.`
        );
        return 0;
      }
      for (let j = 0; j < grades.length; j++) {
        if (grades[j] > highestGrade) {
          highestGrade = grades[j];
        }
      }
      studentFound = true;
      break;
    }
  }

  if (!studentFound) {
    console.log(`Student with ID ${ID} not found.`);
  }

  return highestGrade;
}
// console.log(findHighestGrade(88));

function findLowestGrade(ID) {
  let lowestGrade = -Infinity;
  let studentFound = false;

  for (let i = 0; i < students.length; i++) {
    if (students[i].ID === ID) {
      const grades = students[i].grades;
      if (grades.length === 0) {
        console.log(
          `Student '${students[i].name}' with ID ${ID} has no grades.`
        );
        return 0;
      }
      lowestGrade = grades[0];

      for (let j = 1; j < grades.length; j++) {
        if (grades[j] < lowestGrade) {
          lowestGrade = grades[j];
        }
      }
      studentFound = true;
      console.log(
        `Lowest grade for student '${students[i].name}' with ID ${ID} is ${lowestGrade}.`
      );
      break;
    }
  }

  if (!studentFound) {
    console.log(`Student with ID ${ID} not found.`);
    return 0;
  }

  return lowestGrade;
}

// console.log(findLowestGrade(1));

function getStudentsAboveThreshold(threshold) {
  let aboveThresholdStudents = [];
  for (let i = 0; i < students.length; i++) {
    const average = calculateAverageGrade(students[i].ID);
    if (average > threshold) {
      aboveThresholdStudents.push(students[i]);
    }
  }
  return aboveThresholdStudents;
}

// console.log(getStudentsAboveThreshold(84));
