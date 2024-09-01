// console.log("Jack Ma maslahatlari");
// const list =[
//     "Yaxshi talaba boling", // 0-20
//     "Togri boshliq tanlang va koproq xato qiling", // 20-30
//     "Uzingizni ishingizni boshlang", // 30-40
//     "Siz kuchli bolgan narsalarni qiling", // 40-50
//     "Yoshlarga investitsiya qiling", // 50-60
//     "Endi dam oling foydasi yoq" // 60
// ]

// callback
// function maslahatBering (a, callback) {
//     if (typeof a !== "number") callback("insert a number", null);
//     else if (a <=20) callback(null, list[0]);
//     else if (a > 20 && a <= 30 ) callback(null, list[1]);
//     else if (a > 30 && a <= 40 ) callback(null, list[2]);
//     else if (a > 40 && a <= 50 ) callback(null, list[3]);
//     else if (a > 50 && a <= 60 ) callback(null, list[4]);
//     else{
//         setInterval(function () {
//             callback(null, list[5]);
//         }, 1000)
       
//     }

// }

// console.log('passed here 0');
// maslahatBering(61, (err, data) => {
//     if (err) console.log("ERROR:", err);
//     else{
//         console.log(data);
//     }
// })
// console.log("passed here");


// Async function
// async function maslahatBering (a) {
//     if (typeof a !== "number") throw new Error ("insert a number");
//     else if (a <=20) return list[0];
//     else if (a > 20 && a <= 30 ) return list[1];
//     else if (a > 30 && a <= 40 ) return list[2];
//     else if (a > 40 && a <= 50 ) return list[3];
//     else if (a > 50 && a <= 60 ) return list[4];
//     else{
//         return new Promise ((resolve, reject) => {
//        setTimeout( () => {
//            resolve(list[5]);
//        }, 3000);
//       }); 
//    }
//   }

// call via then/catch
// console.log("passed here 0");
// maslahatBering(20)
// .then(data => {
//     console.log('Javob:', data);
// })
// .catch(err => {
//     console.log("ERROR:", err);
// });
// console.log("passed here 1");




// async function run(){
//     let javob = await maslahatBering(65);
//     console.log(javob);
//     javob = await maslahatBering(70);
//     console.log(javob);
//     javob = await maslahatBering(50);
//     console.log(javob);

// }
// run();



// A-TASK
// const harf = 'b';
// const soz = 'berib boldi';

// function harfTopish(harf, soz) {
//     let soni = 0;
//     for (let i = 0; i < soz.length; i++) {
//       if (soz[i] === harf) {
//         soni++;
//       }
//     }
//     return soni;
//   } 
//   const javob = harfTopish(harf, soz);
//   console.log("javob:", javob); 



// B-Task 


// function countDigits(str) {
//     let soni = 0;
//     for (let i = 0; i < str.length; i++) {
//       if (!isNaN(str[i]) && str[i] !== ' ') {
//         soni++;
//       }
//     }
//     return soni;
//   }
  
//   const javob = countDigits("a7sdfg23a45sdf94jw0h");
//   console.log("javob:", javob);


//C-Task
// let gap1 = "mitgroup16";
// let gap2 = "itm1rgoup6";
// function checkContent(gap1, gap2) {
//     let qolipGap1 = gap1.toLowerCase().split('').sort().join('');
//     let qolipGap2 = gap2.toLowerCase().split('').sort().join('');

//    return qolipGap1 === qolipGap2 ;

// }
// console.log(checkContent(gap1, gap2));



// D-Task

// class Shop {
//     constructor(non, lagmon, cola) {
//         this.products = {
//             non: non,
//             lagmon: lagmon,
//             cola: cola
//         };
//     }
//     _getTime() {
//         const date = new Date();
//          const hours = date.getHours(); 
//         const minutes = date.getMinutes(); 
//         return `${hours}:${minutes}`;
//     }

//     sotish(mahsulot, miqdor) {
//         if (this.products[mahsulot] >= miqdor) {
//             this.products[mahsulot] -= miqdor;
//             console.log(`hozir ${this._getTime()}da ${miqdor}ta ${mahsulot} sotildi!`);
//         } else {
//             console.log(`hozir ${this._getTime()}da ${mahsulot}dan yetarli miqdorda mavjud emas!`);
//         }
//     }
//     qoldiq() {
//         console.log(`hozir ${this._getTime()}da ${this.products.non}ta non, ${this.products.lagmon}ta lagmon va ${this.products.cola}ta cola mavjud!`);
//     }
//      qabul(mahsulot, miqdor) {
//         this.products[mahsulot] += miqdor;
//         console.log(`Hozir ${this._getTime()}da ${miqdor}ta ${mahsulot} qabul qilindi!`);
//     }
// }

// const shop = new Shop(4, 5, 2);
// shop.qoldiq(); 
// shop.sotish('nom' , 3); 
// shop.qabul('cola' , 12); 
//     shop.qoldiq();


// E-Task

// function reverseString(str) {
//     let newString = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }
// console.log(reverseString('"annyong"'));


// F - task

let soz = "Welldone"; 
let harf = "l"

    function findDoublers(soz, harf) {
        if ( soz.indexOf(harf) !== soz.lastIndexOf(harf)) {
            return true;
        } else {
            return false;
        };
       
    };
    console.log(findDoublers(soz, harf));



