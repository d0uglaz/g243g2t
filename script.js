const btnTeste = document.querySelector("#btnTeste");
const escreve = document.querySelector("#textoHeader");
btnTeste.onclick = () =>{
    alert("Jesus é meu parceiro!")
}
const nome = "DOUGLAS LIBÓRIO!".split("");

const escreveNome = (pos)=>{
    if(pos < nome.length){
        let saida = "";
        for(let i=0; i < pos; i++){
         saida += nome[pos];
         setTimeout(() => {
             escreve.innerHTML = saida;
             pos++;
             escreveNome(pos);
            }, 1000);
        }    
    }
}
(()=>{
   escreveNome(0);
})();