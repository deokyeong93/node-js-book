const string = '가나다';
const number = 1;
const boolean = false;
const obj = {
  outside: {
    inside: {
      key: 'value',
    },
  },
};

console.time('전체 시간');
console.log('평범한 로그, 쉼표로 구분해 여라 값을 찍는게 가능');
console.log(string, string, string);
console.error('에러 메세지는 console.error에 담는게 가능');

console.table([
  { name: '제로', birth: 1994 },
  { name: 'hero', birth: 1988 },
]);

console.dir(obj, { colors: true, depth: 2 });
console.dir(obj, { colors: false, depth: 1 });

console.time('시간 측정');
for (let i = 0; i < 10000; i++) {}
console.timeEnd('시간 측정');

function b() {
  console.trace('에러 위치 추적');
}

function a() {
  b();
}
a();

console.timeEnd('전체 시간');
