//--------------- Consumindo API com Node------------------

import fetch from "node-fetch";

const user = 'brunofelixf';
const user2 = 'rprrafa';
const url = 'https://api.github.com/users/';

 // ----------------------Fetch--------------------------
function tipo1(){
  fetch(`${url}${user}`)
    .then( resp => resp.json() )
    .then( user => console.log(user) )
}
// -----------------------Async Await------------------
async function tipo2(){
  let resposta = await fetch(`${url}${user}`)
  let dado = await resposta.json();
  console.log(dado);
}
// --------------- Paralelos---------------------------
async function tipo3(){
 const promise1 = fetch(`${url}${user}`)
 const promise2 = fetch(`${url}${user2}`)

 const promises = await Promise.all([promise1,promise2])

 let dado1 = await promises[0].json()
 let dado2 = await promises[1].json()

 console.log(dado1.name);
 console.log(dado2.name);
}

// tipo1();
// tipo2();
tipo3();