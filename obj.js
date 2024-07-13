function cartObj() {
  let rand = randomNumbers(1, 2)

  const priceList = {
    1: {
      'Lavash': {
        info: 'big cheese',
        price: 22000
      },
      'Hot-dog': {
        info: 'mini',
        price: 15000
      },
      'Cola': {
        info: '1.5 L',
        price: 9000
      },
    },
    2: {
      'Sushi': {
        info: 'max-roll',
        price: 32000
      },
      'Soya': {
        info: '200ml',
        price: 5000
      },
    }
  }
 let dostavka = 9000
 let obshiyNarh = 0
 let text = ''
 for (let i = 0; i < Object.keys(priceList[rand]).length; i++) {
   let names = Object.keys(priceList[rand])[i]
   let info = priceList[rand][names]
   let narh = info.price

   obshiyNarh = obshiyNarh + narh
   text = text + " " + names + " " + info.info
 }



 console.log(text, obshiyNarh, "sum", "etkazib berish", dostavka );
 console.log(`Jami ${obshiyNarh + dostavka} sum`);


 return priceList[rand]

}
cartObj()

function randomNumbers(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}



