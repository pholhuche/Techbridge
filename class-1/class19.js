let page = document.getElementsByClassName("body")
    newName = new Promise((resolve, reject) => {

    setTimeout(()=>{
        resolve("Kachi")
    },3000);
})

const greeting = async ()=>{
    page[0].textContent="....loading"
    page[0].style="text-align:center;color:red"
    name = await newName
    page[0].textContent="welcome"+ name
}

greeting()



// count = 0
// page = document.querySelector('.body')
// console.log(page)

// // let name;
// // setTimeout(() => {
// //   name = 'Kachi'
// // }, 5000);


// // setInterval(() => {
// //   count++
// //   console.log(count)
// // }, 1000);
// // setInterval(() => {
// //   console.log(name);
// // }, 1000);


// let k = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Kachi")
//   }, 5000);
// })
// let name;
// let number = 0
// // k.then(value => {name = value
// //   console.log(name)
// // }).then(result =>{
// //   console.log(name)
// //   console.log(number)
// //   number++
// // } ).then(result => {
// //   console.log(number)
// // }).catch(err=>console.log(err));

// k.then(value => {return value}).catch(err => console.log(err))
// console.log(k);
// // console.log(name)

// // let p = new Promise((resolve, reject) => {
// //   a = 1+1
// //   if (a == 2){
// //     resolve("correct")
// //   } else{
// //     reject("incorrect")
// //   }
// // })

// // p.then(value => console.log(value)).catch(err=>console.log(err));
// // console.log(name);

// // let w = new Promise((resolve, reject) => {
  
// // })

// testFunction = async () => {
//   page.innerHTML = "loading..."
//   page.style = "text-align : center" 
//   name  = await k
 
//   page.innerHTML = "welcome " + name
// }

// testFunction();
