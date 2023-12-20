/**
 * 목표
 * 1. 드래그 시작시 fill엘리먼트에 hold 클래스 추가
 * 2. fill엘리먼트 클래스를 invisible로 변경 (hint: setTimeout 함수의 비동기 처리 기능 사용)
 * 3. 드래그가 끝나면 empty엘리먼트에 fill엘리먼트를 자식 노드로 넣기
 * 4. 마우스가 호버되는 empty엘리먼트에 hovered 클래스 추가
 * 5. 마우스가 호버가 끝나면 empty엘리먼트에 hovered 클래스 제거
 */

const fill = document.querySelector(".fill");
const empty = document.querySelectorAll(".empty");

function handleHold() {
  fill.classList.add("hold");
}

function handleAdd() {
  // 3번 코드 넣기
}

function handleOver(e) {
  let target = e.target;
  let emptyElem = target.closest(".empty");

  empty.forEach((emptyElem) => {
    emptyElem.classList.remove("hovered");
  });
}

function handleOut(e) {
  let target = e.target;
  let emptyElem = target.closest(".empty");

  empty.forEach((emptyElem) => {
    emptyElem.classList.add("hovered");
  });
}

fill.addEventListener("mousedown", handleHold);
empty.addEventListener("mouseup", handleAdd);
empty.addEventListener("mouseover", handleOver);
empty.addEventListener("mouseout", handleOut);
