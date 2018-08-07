# CodingTemplate

## Requirement

### Styling methodology

Base rule is FLOCSS.
https://github.com/hiloki/flocss

### Directory

```

//HTML時の出力先
- dist/
  - index.html
  - common/
    - css/
    - js/
    - img/
    - inc/
  - page-primary/
    - page-secondary/
  - archive/
    - single/

- src
  - js/
  - scss/
  - mock/
    - common/
      - js/libs.js
      - img/
      - inc/
    - page-primary/
      - page-secondary/
    - archive/
      - single/
      
```

## Usage

```
//データの更新のみを行う
$ npm run build
//データの変更を監視する
$ npm run watch
//データの更新を行い、変更を監視する
$ npm run start
```

## Install

```
$ npm install
```
