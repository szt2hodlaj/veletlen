const hetNapjai = ["hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat", "vasárnap"];
const randomIndex = Math.floor(Math.random() * 7);
const randomIndex2 = Math.floor(Math.random() * 6);
const randomIndex3 = Math.floor(Math.random() * 5);
const randomIndex4 = Math.floor(Math.random() * 4);
const randomIndex5 = Math.floor(Math.random() * 3);
const randomIndex6 = Math.floor(Math.random() * 2);
const ujTomb = [];

ujTomb.push(hetNapjai[randomIndex]);
hetNapjai.splice(randomIndex, 1);
ujTomb.push(hetNapjai[randomIndex2]);
hetNapjai.splice(randomIndex2, 1);
ujTomb.push(hetNapjai[randomIndex3]);
hetNapjai.splice(randomIndex3, 1);
ujTomb.push(hetNapjai[randomIndex4]); 
hetNapjai.splice(randomIndex4, 1);
ujTomb.push(hetNapjai[randomIndex5]);
hetNapjai.splice(randomIndex5, 1);
ujTomb.push(hetNapjai[randomIndex6]);
hetNapjai.splice(randomIndex6, 1);

ujTomb.push(hetNapjai[hetNapjai.length - 1]);

function getRandomOrder(arr) {
    const copyArr = [...arr]; 
    const randomOrder = [];
  
    while (copyArr.length > 0) {
      const randomIndex = Math.floor(Math.random() * copyArr.length); 
      const randomElement = copyArr.splice(randomIndex, 1)[0]; 
      randomOrder.push(randomElement);
    }
  
    return randomOrder;
}
const veletlenSorrendHetNapjai = getRandomOrder(hetNapjai);