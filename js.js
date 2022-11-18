// 자바스크립트 기초강좌: 100분 완성 강의 내용
// (https://www.youtube.com/watch?v=KF6t61yuPCY&t=692s)

// 변수
let name = "Mike" // 변경 가능한 변수형
const name = "Mike" // 변경 불가능한 변수형

// 모든 변수를 const로 선언하고 꼭 필요할 때 let을 쓰는게 좋음
// 변수에는 문자, 숫자, $, _만 사용
// 가급적 상수는 대문자로 알려주기
// 변수명은 읽기 쉽고 이해하기 쉽게 선언하기

const massage = `My name is ${name}`; // 문자열에 변수 넣을 때는 큰따옴표 사용

// 대화상자(기본 설정)
alert(123); // 창 띄워서 메세지 전달
const name = prompt("이름을 입력해주세요"); 
// 입력 시 사용, prompt로 입력되는 것은 모두 문자형
const isAdult = confirm("당신은 성인입니까?") 
// 확인과 취소 선택할 수 있음, 확인: true 반환, 취소: false 반환 

// 단점: 확인창 눌러줘야 함(스크립트 일시 정지), 스타일링 불가
// 장점: 빠르고 간단하게 적용가능


// 형변환
String(3) // 문자열로 변환
Number("5") // 정수로 변환
Boolean(1) // 숫자 0, 빈 문자열, null, undefined, NaN 은 false로 변환, 이외에는 모두 true로 변환

// 주의사항
Number(null) // 0
Number(undefined) // NaN
Number(0) // false
Number("0") // true
Number("") // false
Number(" ") // true


// 반복문 
for (let i = 0; i < 10; i++) console.log(i);
while (true) {
  console.log(1);
}
switch(S){
  case A:
  case B:
}


// 함수
function Hi(name) {
  console.log(`Hi, ${namx}`);
} // 함수 선언문

let Hi = function(name) {
  console.log(`Hi, ${namx}`);
} // 함수 표현식 

// 둘 다 함수를 선언하는 방식
// 함수 선언문: 어디서든 호출 가능, JS에서 함수 선언문을 코드 실행 시 미리 읽기 때문
// 함수 표현식: 


// 객체
const me = {
  name: 'kwak',
  age: 35,
}
 
// 접근
me.name // 'kwak'
me['age'] // 35
 
// 추가
me.gender = 'male'
 
//삭제
delete me.hairColor;
 
 
// 배열
let days = ['월', '화', '수'];
days.push('목'); // 배열 뒤에 추가
days.unshift('금', '토', '일'); // 배열 앞에 추가
days.pop(); // 배열 뒤에서부터 제거 
days.shift();// 배열 앞에서부터 제거


// DOM(Doucument Object Model)
// 랜더링 엔진이 브라우저에서 html파일을 한줄 한줄 해석한 후에 
// 그 문서를 객체화하여 Javascript로 접근할 수 있도록 함 

#document // 가장 최상위 노드
