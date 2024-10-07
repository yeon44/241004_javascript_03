// let ex_01 = prompt("세자리 이상의 정수를 입력하세요.", "");
// if (ex_01 % 4 == 0) {
//   document.write(ex_01, "은 4의 배수입니다");
// } else {
//   document.write(ex_01, "은 4의 배수가 아닙니다");
// }

// let ex_02 = prompt("이름을 입력하세요", "");
// let score = prompt("점수를 입력하세요", "");
// if (score >= 95 && score <= 100) {
//   document.write(ex_02, " 학생은 A+등급 입니다");
// } else if (score >= 90 && score <= 95) {
//   document.write(ex_02, " 학생은 A등급 입니다");
// } else if (score >= 85 && score <= 90) {
//   document.write(ex_02, " 학생은 B+등급 입니다");
// } else if (score >= 80 && score <= 85) {
//   document.write(ex_02, " 학생은 B등급 입니다");
// } else if (score >= 75 && score <= 80) {
//   document.write(ex_02, " 학생은 C+등급 입니다");
// } else if (score >= 70 && score <= 75) {
//   document.write(ex_02, " 학생은 C등급 입니다");
// } else if (score >= 65 && score <= 70) {
//   document.write(ex_02, " 학생은 D+등급 입니다");
// } else if (score >= 60 && score <= 65) {
//   document.write(ex_02, " 학생은 D등급 입니다");
// } else {
//   document.write(ex_02 + " 학생은 F입니다");
// }

let ex_03 = 1;
while (ex_03 <= 12) {
  document.write(ex_03, ",");
  ex_03++;
}

document.write("<hr>");

let ex_04 = 1;
while (ex_04 <= 12) {
  document.write(
    `<img src="./img/instagram-${ex_04}.jpg" style="width: 120px;" >`
  );
  ex_04++;
}

document.write("<hr>");

// for (let ex_05 = 0; ex_05 <= 8; ex_05++) {
//   if (ex_05 % 2 == 0) {
//     document.write(`<img src="./img/img${ex_05}.jpg" style = "width:120px;">`);
//   }
// }

let ex_05 = 0;

while (ex_05 <= 8) {
  if (ex_05 % 2 == 0) {
    document.write(`<img src="./img/img${ex_05}.jpg" style = "width:120px;">`);
  }
  ex_05++;
}

//계속 뒤에 다른 빈 이미지가 떠요..
