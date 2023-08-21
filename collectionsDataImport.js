import { courseData } from "./collectionsData.js";

// 依課程類別建立群組
let courseA = [];
let courseB = [];
let courseC = [];
let courseD = [];

// 將data內資料，依類別放入四個群組
courseData.forEach((course) => {
  switch (course.category) {
    case "A":
      courseA.push(course);
      break;
    case "B":
      courseB.push(course);
      break;
    case "C":
      courseC.push(course);
      break;
    case "D":
      courseD.push(course);
      break;
  }
});

// 檢查四個群組是否放入正確
console.log("a is: " + courseA.length);
console.log("b is: " + courseB.length);
console.log("c is: " + courseC.length);
console.log("d is: " + courseD.length);

// 依群組生成內容
// category_A
let coursesA = document.querySelector(".cate_A");
courseA.forEach((course) => {
  let title = course.title;
  let location = course.location;
  let listPrice = course.listPrice;
  let course_start_date = course.course_start_date;
  let course_link = course.course_link;
  let img_link = course.img_link;
  coursesA.innerHTML = '<img src="' + img_link + '"/>';
});
// category_B
let coursesB = document.querySelector(".cate_B");
let newContent = "hello";
coursesB.innerHTML = newContent;
// category_C
let coursesC = document.querySelector(".cate_C");

// category_D
let coursesD = document.querySelector(".cate_D");
