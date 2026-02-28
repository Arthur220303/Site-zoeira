function enviar(){

let msgInput = document.getElementById("msg");
let msg = msgInput.value;

if(msg.trim() === "") return;

let chat = document.getElementById("chat");

/* comandos */
if(msg.startsWith("/")){
msg = executarComando(msg);
chat.innerHTML += `<p class="system">${msg}</p>`;
}
else{
chat.innerHTML += `<p class="user">${msg}</p>`;
}

msgInput.value="";
chat.scrollTop = chat.scrollHeight;
}

/* comandos zoeira */
function executarComando(cmd){

switch(cmd){

case "/help":
return "📜 Comandos: /help /oi /fig";

case "/oi":
return "😈 Oi, tudo bem?";

case "/fig":
return "🖼️ Figura ativada!";

default:
return "❌ Comando não encontrado";
}

}
