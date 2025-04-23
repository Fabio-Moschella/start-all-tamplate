const apiUrl = "https://flynn.boolean.careers/exercises/api/random/mail";
const emailList = document.getElementById("emailList");
const fetchEmail = document.getElementById("fetchEmailList");
const arreyEmail = [];
console.log("PRIMA DI GET");
for (let i = 0; i < 10; i++) {
  axios.get(apiUrl).then((res) => {
    arreyEmail.push(res.data.response);
    if (arreyEmail.length === 10) {
      console.log(arreyEmail);
      for (let i = 0; i < arreyEmail.length; i++) {
        console.log(arreyEmail[i]);

        emailList.innerHTML += `<li>${arreyEmail[i]}</li>`;
      }
    }
  });
}
console.log("DOPO DEL GET");
