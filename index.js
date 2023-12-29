// const arr = {
//   name: "ravi Singh",
//   age: 20,
//   gender: "male",
// };
// // arr["friend"] = "anuj";
// // console.log(arr);

// // for in loop
// for(a in arr){
// //   console.log(a + " : "+arr[a])
// }
// prectice set
// alert("intro in js");
let obj = {
  ravi: 89,
  shivam: 87,
  anuj: 89,
};
// for(let i in obj){
//     console.log("name :"+i+" marks: "+obj[i]);
// }
for (let i = 0; i < Object.keys(obj).length; i++) {
  console.log(
    "name :" + Object.keys(obj)[i] + "marks:" + obj[Object.keys(obj)[i]],
  );
}
