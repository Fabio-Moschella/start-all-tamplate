const apiUrl = "https://flynn.boolean.careers/exercises/api/random/mail";

console.log("PRIMA DI GET");
axios.get(apiUrl).then((res) => {
  const arreyEmail = [];
  for (let i = 0; i < 10; i++) {
    arreyEmail.push(res.data.response);
  }
  console.log("DENTRO AL THEN", arreyEmail);
});

console.log("DOPO DEL GET");
