# level 2

프론트엔드스쿨 5조 level 2

이 문제는 https://github.com/bradtraversy/50projects50days?tab=readme-ov-file 를 참고해 만들었습니다.

<br>

[노션 링크 바로가기](https://www.notion.so/Level-2-977e3099cf0e41bbb2b02a8c70e15c2a)

[데모 보기](https://50projects50days.com/projects/drag-n-drop/)

<br>

## 프로젝트 시작 방법!!


### 1. 본인 이름의 branch 생성

<br> 

1-1. branches 클릭 <br> <br>
<img width="600px" src="https://github.com/tekit-school-five-member/level-2/assets/60402888/05e2709f-74f6-4ae6-a170-0b996ec7a0cc" />

<br>

1-2. new branch 클릭 <br> <br>
<img width="600px" src="https://github.com/tekit-school-five-member/level-2/assets/60402888/541daf5c-83f8-4c69-b0b0-6d1b306c33f9" />

<br>

1-3. 브랜치명에 본인 이름 넣고 create new branch <br> <br>
<img width="600px" src="https://github.com/tekit-school-five-member/level-2/assets/60402888/43744ee9-6fbd-4f0d-89fa-0e82bbbe5833" />

<br> <br>

### 2. Organization 레퍼지토리 포크 하기

<br>

2-1. 본인의 포크한 레퍼지토리에 가서 clone 주소 복사 <br> <br>
<img width="600px" src="https://github.com/tekit-school-five-member/level-2/assets/60402888/eb640901-5731-49d4-8dd8-941d02c6ac9f"/>

<br>

2-2. 클론하기
```
git clone <your repository clone address> ./
```

<br> <br>

### 3. PR 날리기

<br>

3-1. vscode에서 수정 후 본인 repository에 푸시
```
git push -u origin <branch name>
```

<br>

3-2. Contribute → Open pull request <br> <br>
<img width="600px" src="https://github.com/tekit-school-five-member/level-2/assets/60402888/7a68414f-a103-44eb-802f-7f42b5feeacd"/>

<br>

3-3. base와 compare 브랜치 잘 확인 후 pull request 생성하기 (base: **본인 이름 브랜치** ← compare: **본인이 패치하고싶은 브랜치**) <br> <br>
<img width="600px" src="https://github.com/tekit-school-five-member/level-2/assets/60402888/7c24f71d-1360-41fb-8a51-e50629550e9c"/>

<br>

3-4. pull request 작성시 아래 이미지를 참고해주세요. <br> <br>
<img width="600px" src="https://github.com/tekit-school-five-member/level-3/assets/60402888/270e9372-7b61-42db-9045-0f58ce6c3408"/>

<br>
<br>

## 목표

- [ ] 드래그 시작시 <code>fill</code>엘리먼트에 hold 클래스 추가

```js
elem.className += " hold";
```

<br>

- [ ] <code>fill</code>엘리먼트 클래스를 <code>invisible</code>로 변경 (hint: setimeout 함수의 비동기 처리 기능 사용)

<br>

- [ ] 드래그가 끝나면 <code>empty</code>엘리먼트에 <code>fill</code>엘리먼트를 자식 노드로 넣기

```js
parentElem.appendChild(elem);
```

<br>

- [ ] 마우스가 호버되는 <code>empty</code>엘리먼트에 hovered 클래스 추가

```
 this.className += " hovered";
```

<br>

- [ ] 마우스가 호버가 끝나면 <code>empty</code>엘리먼트에 hovered 클래스 제거
