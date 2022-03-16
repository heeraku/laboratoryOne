// async function callApi(){
//   // 実際にAPIを叩く処理
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const users = await res.json();
//   console.log(users);
// }

// callApi();

//위의 async , await가 가장 많이 쓰는 방법인데,
// 아래와 같이 간략하게 쓰는 방법도 있다.

// function callApi(){
//   fetch("https://jsonplaceholder.typicode.com/users")
//   .then(function (res) {
//     return res.json();
//   })
//   .then(function (users) {
//     console.log(users);
//   });
// }

// callApi();
