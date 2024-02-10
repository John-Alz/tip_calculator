let catindad = 20000;
let porcentaje = 30;
let resultado = (catindad * porcentaje)  / 100;
console.log(resultado);
let divison = resultado / 5;
console.log(divison);
let divisonDos = catindad / 5;
console.log(divisonDos);
let total = divisonDos + divison;
console.log(total);

const infoMap = [
    { 
      valueInputOne: 5,
    },
    { 
      valueInputOne: 10,
    },
    { 
      valueInputOne: 15,
    },
    { 
      valueInputOne: 25,
    },
    { 
      valueInputOne: 25,
    },
  ]

let mapping = infoMap.map((item) => {
    console.log(item.valueInputOne);
})