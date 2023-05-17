interface resultType {
  [key:string]:string|null;
}

function diffFinder(targetArray:string[], compareArray:string[], originalArray:string[]) :resultType {
  let duplicatedElement:null|string = null;
  let replaceElement:null|string    = null;

  targetArray.forEach((element, index) => {
    if (compareArray.includes((element))===true) {
      duplicatedElement  = element;
      replaceElement     = originalArray[index];
      targetArray[index] = replaceElement;
    }
  });

  const result:resultType = {
    duplicatedElement : duplicatedElement,
    replaceElement : replaceElement
  };
  return result;
}

const pokemon:string[]             = ['피카츄','라이츄','파이리','꼬부기'];
const digimon:string[]             = ['코로몬','테일몬','가브몬','꼬부기'];
const digimonOriginalData:string[] = ['코로몬','테일몬','가브몬','어니몬'];

console.log(diffFinder(digimon, pokemon, digimonOriginalData));