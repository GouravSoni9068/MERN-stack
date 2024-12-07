
// function walk()
// {
//     console.log('Walk');
    
// }

// let arr=[10,20,30,40]
// console.log(arr.length);
// arr.forEach((ele)=>{
//     console.log(ele);
    
// })

// let obj={
//     user:"Gourav",
//     age:20
// }
// console.log(obj.user);


// let user={
//     userName:"Gourav",
//     age:20,
//     greet:()=>{
//         console.log('Good Morning');
//     }
// }
// console.log(user);

// console.log(user.age);
// console.log(user.userName);
// user.greet()




// var a=document.querySelector('h1');
// // a.innerText="shdb"
// a.style.backgroundColor="royalBlue"
// a.addEventListener("mouseover",(e)=>{
//     a.innerHTML="changed"
// })
// a.addEventListener("mouseleave",(e)=>{
//     a.innerHTML="Hello"
// })

// let names = ["Alice", "Bob", "Charlie", "Diana"];

// names.forEach((ele)=>{
//     console.log(ele);
    
// })

// let newName=names.map((ele)=>{
//     return ele+"G";
// })
// // console.log(newName);
// let newNames=names.filter((ele)=>{
//     return ele
// })
// console.log(newNames);








let obj={
    "id": "123456",
    "username": "johndoe",
    "email": "johndoe@example.com",
    "passwordHash": "hashed_password_string",
    "profile": {
      "firstName": "John",
      "lastName": "Doe",
      "avatarUrl": "https://example.com/avatar.jpg",
      "bio": "Software developer with a passion for music and coding.",
      "location": "San Francisco, CA, USA"
    },
    "preferences": {
      "theme": "dark",
      "language": "en-US",
      "notifications": {
        "email": true,
        "sms": false,
        "push": true
      }
    },
    "roles": ["user", "admin"],
    "security": {
      "twoFactorEnabled": true,
      "lastLogin": "2024-12-07T15:20:30Z",
      "loginHistory": [
        "2024-12-01T10:00:00Z",
        "2024-11-30T09:45:00Z"
      ]
    },
    "subscriptions": {
      "plan": "premium",
      "status": "active",
      "renewalDate": "2025-01-01T00:00:00Z"
    },
    "activity": {
      "lastActive": "2024-12-07T15:25:00Z",
      "projects": [
        {
          "id": "7890",
          "name": "BeatBox",
          "description": "A responsive music player built with HTML, CSS, and JavaScript.",
          "lastUpdated": "2024-11-30T08:00:00Z"
        }
      ]
    },
    "createdAt": "2022-01-01T00:00:00Z",
    "updatedAt": "2024-12-07T15:25:00Z"
  }


let {description}= obj.activity.projects[0]
// let {description}=first
// console.log(description);




// let names = ["Alice", "Bob", "Charlie", "Diana"];
// let newNames=[...names];
// console.log(newNames);


// let smallObj= {
//     "id": "123",
//     "username": "johndoe",
//     "email": "johndoe@example.com"
// }
// let newObj={...smallObj}


let names = ["John", "Jane", "Alice", "Bob", "Charlie"];

let lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones"];

// let i=0;
// let fullNames=names.map((ele)=>
// {
//     newEle= ele+" "+ lastNames[i]
//     i++
//     return newEle;
// })
// console.log(fullNames);

// let fullNames=[...names,...lastNames]
// console.log(fullNames);


const product = [
    { name: "Laptop", type: "Electronics" },
    { name: "Phone", type: "Electronics" },
    { name: "Tablet", type: "Electronics" },
    { name: "Notebook", type: "Stationery" },
    { name: "Pen", type: "Stationery" },
    { name: "Shoes", type: "Footwear" },
    { name: "T-shirt", type: "Clothing" },
    { name: "Watch", type: "Accessories" },
    { name: "Backpack", type: "Bags" },
    { name: "Headphones", type: "Electronics" }
];

// console.log(product);

// let electronicsProduct=product.filter((ele)=>{
//     if(ele.type==="Electronics")
//     {
//         return true;
//     }
// })
// console.log(electronicsProduct);


const users = [
    { name: "John Doe", age: 25 },
    { name: "Jane Smith", age: 30 },
    { name: "Alice Johnson", age: 22 },
    { name: "Bob Brown", age: 28 }
];
  
let newUsers=users.map((ele)=>{
    return `<div><h3>${ele.name}</h3><h5>${ele.age}</h5></div>`
})
let body=document.body;
newUsers.forEach((ele)=>{
    body.innerHTML+=ele
})
