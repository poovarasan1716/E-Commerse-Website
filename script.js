
// let first = document.getElementById('btn');
// let second =document.getElementById('btn1');
// let paragraph = document.getElementById('para');
// let data =[
//     {
//         key1 : 'value1',
//         key2 : 'value2',
//         key3 : 'value3',
//     },
//     {
//         key1 : 'value1',
//         key2 : 'value2',
//         key3 : 'value3',
//     },
// ]
// // function clf(){
// //     paragraph.innerHTML = 'content display successfully';
// // }
// // first.addEventListener('click',clf)

// function clf1(){
//     paragraph.innerHTML = '';
// }
// second.addEventListener('click',clf1)

// // let arr=[1,2,3,4,5,6,7,8,9]
// // function clf2(){
// //     data.map((item,index)=>{
// // console.log(item.key1);   
// // paragraph.innerHTML+= `${item.key1} <br>` })
// // }
// // first.addEventListener('click',clf2)

// async function clf2(){
//     let result = await fetch("https://fakestoreapi.com/products")
//     let output = await result.json();
//     output.map((item,index)=>{
// console.log(item.price);   
// // paragraph.innerHTML+= `${item.price} <br>`
// paragraph.innerHTML+= `
// <div>
// <img src=${item.image} width="100%">
// </div>
// `
// })
// }
// first.addEventListener('click',clf2)


// const imageContainer = document.getElementById("container");

// btn.addEventListener("click", productsData);
// btn1.removeEventListener("click", productsData);

// async function productsData() {
//     try {
//         let result = await fetch("https://fakestoreapi.com/products");
//         let outPut = await result.json();

//         outPut.forEach((item) => {
//             console.log(item)
//             imageContainer.innerHTML += `
//             <section class='product'>
//             <img src="${item.image}" alt="Product Image" >
//             <p>${item.title}</p>
//             </section>
//                     `;

//         });
//     } catch (error) {
//         console.error("Error fetching products:", error);
//     }
// }
// // ! css 
//  function changeBgColor() {
//     console.log('working')
//     imageContainer.style.backgroundImage = "url('./gr2.jpeg')";
// }

//  function removeImgDiv() {
//     imageContainer.innerHTML = ''
//     imageContainer.style.backgroundColor = 'white'
// }


const imageContainer = document.getElementById("container");

btn.addEventListener("click", productsData);
btn1.removeEventListener("click", productsData);

async function productsData() {
    try {
        let result = await fetch("https://fakestoreapi.com/products");
        let outPut = await result.json();
        console.log(result);
        outPut.forEach((item) => {
            imageContainer.innerHTML += `
            <section class='product'>
                <img src="${item.image}" alt="Product Image">
                 <p>Category: ${item.category}</p>
                 <p> Price:S${item.price}</p>
                 <p>${item.title}</p>
            
            </section>`;
        });
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

function changeBgColor() {
    console.log('working');
    imageContainer.style.backgroundImage = 'url("./gr1.jpeg")';
    imageContainer.style.backgroundSize = "cover";
    imageContainer.style.backgroundPosition = "center";
}

function removeImgDiv() {
    imageContainer.innerHTML = '';
    imageContainer.style.backgroundColor = 'white';
}




// const imageContainer = document.getElementById("container");

// btn.addEventListener("click", productsData);
// btn1.removeEventListener("click", productsData);

// async function productsData() {
//     try {
//         let result = await fetch("https://fakestoreapi.com/products");
//         let outPut = await result.json();

//         outPut.forEach((item) => {
//             console.log(item)
//             imageContainer.innerHTML += `
//             <section class='product'>
//             <img src="${item.image}" alt="Product Image">
//             <p>${item.title}</p>
//             </section>
//                     `;

//         });
//     } catch (error) {
//         console.error("Error fetching products:", error);
//     }
// }
// // ! css 
//  function changeBgColor() {
//     console.log('working')
//     imageContainer.style.backgroundColor = '#8f8f8f'
// }

//  function removeImgDiv() {
//     imageContainer.innerHTML = ''
//     imageContainer.style.backgroundColor = 'white'
// }