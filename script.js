function enviar(){

let msg = document.getElementById("msg").value;
if(msg.trim() === "") return;

let chat = document.getElementById("chat");

chat.innerHTML += `<p>${msg}</p>`;

document.getElementById("msg").value="";
chat.scrollTop = chat.scrollHeight;

}
