const fs=require('fs');
let students=[{
    name: "Mark Taylor",
    subject: "C++",
    grade: 9
},
{
    name: "John Deeper",
    subject: "Embeded Computer science",
    grade: 10
},
{
    name: "Bill Torvalds",
    subject: "C#",
    grade: 9
}];

let data=JSON.stringify(students);
fs.writeFileSync("students.json",data);

fs.readFile("./students.json",(err,data)=>{
  let readStudents=JSON.parse(data);
  readStudents.forEach(element => {
      console.log(element.name);
  });
});