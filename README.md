# INIT-PROJECT

## 실행방법

- npx react-native start

## project rename 변경하는 방법

npm install react-native-rename -g

1. npx react-native-rename "Travel App" -b "com.junedomingo.travelapp" 로 변경
2. ios 폴더 내 폴더들 프로젝트 이름으로 명 변경(ex- init_project -> TravelApp)
3. ios 폴더내 pod.lock 파일 삭제
4. npm install
5. pod install(ios폴더내에서하기)
6. xcode로 ios 폴더 열어서 시뮬레이터 실행되는 것 수정하기
7. npx start



## lib

1. react-native
2. react-navigation
3. axios+react-query
4. zustand
5. styled-components
