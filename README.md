# STARBUCKS([참고](https://github.com/ParkYoungWoong/starbucks-vanilla-app))

_Fastcampus Front-end Starbucks Clone 강의 내용을 정리해둔 자료입니다._

## 시작 작업

- index.html위치에서 favicon.ico를 자동으로 찾아준다.

  - 다른 png 파일로 변경하고 싶다면 link 태그 이용

- 오픈그래프([참고](https://ogp.me/))

  - 웹페이지가 소셜 미디어(페이스북 등)로 공유될 때 우선적으로 활용되는 정보를 지정합니다.

  ```html
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Starbucks" />
  <meta property="og:title" content="Starbucks Coffee Korea" />
  <meta property="og:description" content="스타벅스는 세계에서 가장 큰 다국적 커피 전문점으로, 64개국에서 총 23,187개의 매점을 운영하고 있습니다." />
  <meta property="og:image" content="./images/starbucks_seo.jpg" />
  <meta property="og:url" content="https://starbucks.co.kr" />
  ```

- 트위터카드([참고](https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started))

  - 웹페이지가 소셜 미디어(트위터)로 공유될 때 우선적으로 활용되는 정보를 지정합니다.

  ```html
  <meta property="twitter:card" content="summary" />
  <meta property="twitter:site" content="Starbucks" />
  <meta property="twitter:title" content="Starbucks Coffee Korea" />
  <meta property="twitter:description" content="스타벅스는 세계에서 가장 큰 다국적 커피 전문점으로, 64개국에서 총 23,187개의 매점을 운영하고 있습니다." />
  <meta property="twitter:image" content="./images/starbucks_seo.jpg" />
  <meta property="twitter:url" content="https://starbucks.co.kr" />
  ```

- google material icons([참고](https://material.io/resources/icons/?style=baseline), [Getting Start](https://material.io/develop/web/getting-started))
  - innerText의 내용으로 아이콘을 만들어줌
  ```html
  <div class="material-icons">login</div>
  <div class="material-icons">upload</div>
  ```

## 헤더와 드롭다운

### 로고

- 모든 inline 태그는 baseline이 존재한다.
- `position` 속성을 이용해 수직/수평 가운데 정렬 등을 할 수 있다.

### 서브메뉴

- a태그 href 속성
  - `"#"`은 해시라는 특정한 기능을 갖고 있기 때문에 페이지에 약간의 변화가 있을수도 있음.
  - `"javascript:void(0)"`을 권장

### 메인메뉴

- `BEM(Block Element Modifier)`

  - `요소__일부분`

  ```html
  <div class="container">
    <div class="name"></div>
    <div class="item">
      <div class="name"></div>
    </div>
  </div>

  <div class="container">
    <div class="container__name"></div>
    <div class="item">
      <div class="item__name"></div>
    </div>
  </div>
  ```

  - `요소--상태`

  ```html
  <div class="btn primary"></div>
  <div class="btn success"></div>
  <div class="btn error"></div>

  <div class="btn btn--primary"></div>
  <div class="btn btn--success"></div>
  <div class="btn btn--error"></div>
  ```

### 전역 배지

- `lodash`

  - `throttle(func, ms)` : 일정시간에 한 번만 실행되게 제한을 걸 수 있음

- `gsap`
  - 애니메이션을 쉽게 사용하기 위함
  - `to(ele, duration_sec, option)`([참고](<http://greensock.com/docs/v3/GSAP/gsap.to()>))
  - `easing 함수`([참고](https://greensock.com/docs/v2/Easing))

### 요소 슬라이드

- `swiper js`

  - `new Swiper(selector, option)`

- 박스를 확대/축소해도 가운데에 유지 시키기
  1. position: absolute
  1. left: 50%
  1. margin-left: 현재 박스의 가로길이 / 2

### 유튜브 영상 배경

```html
<div class="container">
  <div class="item"></div>
</div>
```

```css
.container {
  width: 200px;
  background-color: royalblue;
}
.container .item {
  width: 100%;
  height: 0;
  padding-top: 56.25%; /* 부모 가로 길이를 따라감 */
}
```

- `16:9 = 100%:56.25%`

- `youtube iframe api`([참고](https://developers.google.com/youtube/iframe_api_reference?hl=ko))

```text
Failed to execute 'postMessage' on 'DOMWindow': The target origin provided ('https://www.youtube.com') does not match the recipient window's origin ('http://localhost:1234').
```

- 위와 같은 에러가 발생, 해결법은 아직 못 찾음

### 3D Animation

```html
<div class="container">
  <div class="item front">앞</div>
  <div class="item back">뒤</div>
</div>
```

```css
.container {
  width: 100px;
  height: 100px;
  background-color: orange;
  perspective: 300px; /* 원근법 */
}
.item {
  width: 100px;
  height: 100px;
  border: 4px solid red;
  box-sizing: border-box;
  font-size: 60px;
  backface-visibility: hidden; /* 뒷면 안보이게 */
  transition: 1s;
}
.item.front {
  position: absolute;
  transform: rotateY(0deg); /* 명시 해주는 것이 좋음 */
}
.container:hover .item.front {
  transform: rotateY(180deg);
}
.item.back {
  transform: rotateY(-180deg);
}
.container:hover .item.back {
  transform: rotateY(0deg);
}
```

### 스크롤 위치 계산 애니메이션

- `scrollMagic`
