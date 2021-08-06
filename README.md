# STARBUCKS([참고](https://github.com/ParkYoungWoong/starbucks-vanilla-app))

_Fastcampus Front-end Starbucks Clone 강의 내용을 정리해둔 자료입니다._

## Front-end

- index.html위치에서 favicon.ico를 자동으로 찾아준다.

  - 다른 png 파일로 변경하고 싶다면 link 태그 이용

- 오픈그래프([참고](https://ogp.me/))

  - 웹페이지가 소셜 미디어(페이스북 등)로 공유될 때 우선적으로 활용되는 정보를 지정합니다.

  ```html
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Starbucks" />
  <meta property="og:title" content="Starbucks Coffee Korea" />
  <meta
    property="og:description"
    content="스타벅스는 세계에서 가장 큰 다국적 커피 전문점으로, 64개국에서 총 23,187개의 매점을 운영하고 있습니다."
  />
  <meta property="og:image" content="./images/starbucks_seo.jpg" />
  <meta property="og:url" content="https://starbucks.co.kr" />
  ```

- 트위터카드([참고](https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started))

  - 웹페이지가 소셜 미디어(트위터)로 공유될 때 우선적으로 활용되는 정보를 지정합니다.

  ```html
  <meta property="twitter:card" content="summary" />
  <meta property="twitter:site" content="Starbucks" />
  <meta property="twitter:title" content="Starbucks Coffee Korea" />
  <meta
    property="twitter:description"
    content="스타벅스는 세계에서 가장 큰 다국적 커피 전문점으로, 64개국에서 총 23,187개의 매점을 운영하고 있습니다."
  />
  <meta property="twitter:image" content="./images/starbucks_seo.jpg" />
  <meta property="twitter:url" content="https://starbucks.co.kr" />
  ```

- google material icons([참고](https://material.io/resources/icons/?style=baseline), [Getting Start](https://material.io/develop/web/getting-started))
  - innerText의 내용으로 아이콘을 만들어줌
  ```html
  <div class="material-icons">login</div>
  <div class="material-icons">upload</div>
  ```
