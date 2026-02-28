/* =========================
ENVIAR MENSAGEM
========================= */

function enviar(){

let msgInput = document.getElementById("msg");
let msg = msgInput.value.trim();

if(msg === "") return;

let chat = document.getElementById("chat");

/* Detectar comando */
if(msg.startsWith("/")){
msg = executarComando(msg);
chat.innerHTML += `
<p class="system">${msg}</p>
`;
}
else{
chat.innerHTML += `
<p class="user">${msg}</p>
`;
}

/* Som opcional (se tiver arquivo) */
// new Audio("msg.mp3").play();

msgInput.value="";
chat.scrollTop = chat.scrollHeight;

}

/* =========================
SISTEMA DE COMANDOS
========================= */

function executarComando(cmd){

cmd = cmd.toLowerCase();

switch(cmd){

case "/help":
return `
📜 Comandos:
<br>/help
<br>/oi
<br>/fig
<br>/clear
`;

case "/oi":
return "😈 Oi! Tudo bem?";

case "/fig":
return "🖼️ Comando fig ativado 😈";

case "/clear":
document.getElementById("chat").innerHTML =
"<p class='system'>Chat limpo 🧹</p>";
return "🧹 Chat limpo";

default:
return "❌ Comando não encontrado";
}

}

/* =========================
ENTER PARA ENVIAR
========================= */

document.addEventListener("keypress", function(e){

if(e.key === "Enter"){
enviar();
}

});
