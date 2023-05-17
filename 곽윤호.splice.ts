const pokemonList:string[] = ['피카츄', '라이츄', '파이리', '꼬부기'];
//? array.splice()메서드는 첫 번째 매개변수로 인덱스를 지정하고
//? 두 번째 매개변수로 몇 개의 인덱스를 제거할지 입력하는것 같다.
//? 그 후의 매개변수로는 첫 번째 매개변수로 입력한 인덱스부터 요소를 삽입한다.
// pokemonList.splice(0, 2, '야도란', '또가스');
// pokemonList.splice(4, 0, '야도란', '또가스');
// console.log(pokemonList);

function exampleOne(array:string[], change1:string, change2:string):string {
  // const result = array.splice(0, 2, change1, change2);
  //* 변수 초기화 과정에서 array.splice()메서드를 입력하게 되면
  //* 인덱스로부터 제거된 값으로 새로운 배열을 만들어 변수에 할당한다
  const result:string[] = [...array]
  result.splice(0, 2, change1, change2);
  //* 마찬가지로 위와같이 작성하고 exampleOne함수를 실행하면
  //* 매개변수 array로 입력한 배열은 원본을 유지하고
  //* 사본을 return한다
  return result.join('');
}

const result = exampleOne(pokemonList, '야도란', '또가스');
console.log(pokemonList);
console.log(result);