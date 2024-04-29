const school = {
    name: "XYZ School",
    establishYear: 1990,
    departments: {
      math: { teachers: 5, students: 150 },
      science: { teachers: 4, students: 120 },
      history: { teachers: 3, students: 100 },
      english: { teachers: 4, students: 130 },
    },
    courses: ["math", "science", "history", "english"],
    students: [
      {
        name: "Alice",
        className: "Grade 5",
        scores: { math: 95, science: 88, history: 85, english: 92 },
      },
      {
        name: "Bob",
        className: "Grade 4",
        scores: { math: 80, science: 78, history: 92, english: 85 },
      },
      {
        name: "Charlie",
        className: "Grade 5",
        scores: { math: 88, science: 90, history: 78, english: 88 },
      },
      {
        name: "Diana",
        className: "Grade 4",
        scores: { math: 92, science: 85, history: 88, english: 90 },
      },
    ],
  };
  
  function countCalculation(school) {
    const { departments } = school;
    const { math, history } = departments;
  
    const mathTeachersCount = math.teachers;
    const mathStudentsCount = math.students;
    const historyTeachersCount = history.teachers;
    const historyStudentsCount = history.students;
  
    return {
      mathTeachersCount,
      historyTeachersCount,
      mathStudentsCount,
      historyStudentsCount,
    };
  }
  console.log(countCalculation(school));
  
  function findTopStudent(school, subject) {
    let obj = {};
    let maxmarks = 0;
    school.map((ele)=>{
        if(maxmarks<ele.scores[subject]){
            maxmarks=ele.scores[subject]
            obj=ele
        }
    })
    console.log(obj);
  }
  
  findTopStudent(school.students, "math");
  
  
  function addNewDept(school,newdept){
    let newobj={...school}
    newobj.departments['art']=newdept
    console.log(newobj)
  }
  addNewDept(school,{teachers:2,students:50})
  
  
  function generateGreeting(name, language="English"){
    let greetings = {
      English: `Hello ${name}`,
      Spanish: `Halo ${name}`,
      French: `Banjour ${name}`
    }
    console.log(greetings[`${language}`])
  }
  (generateGreeting("Alice")); 
  (generateGreeting("Bob", "Spanish")); 
  (generateGreeting("Charlie", "French")); 