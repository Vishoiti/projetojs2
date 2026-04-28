// LIMPEZA E VALIDAÇÃO

const email="   email@email.com        ";
//trim = remove os espaços inicio e fim
const emailLimpo= email.trim();
console.log(emailLimpo)

// VALIDAÇÃO
if(emailLimpo.includes("@")){
    console.log("email valido")
}else{
    console.log("email invalido")
}    

// TRANSFORMAÇÃO DE TEXTOS

const tituloArtigo="Como aprender JAVA RAIZ"
// METODO UPPER ( MAIUSCULO ) E LOW ( MINUSCULO )
const texto1 = tituloArtigo.toUpperCase();
console.log(texto1)
// SPLIT - TRANSFORMA O TEXTO EM ARRAY
const text2 =tituloArtigo.split(" ");
console.log(text2)
// JOIN - JUNTA TUDO EM UMA UNICA STRING
const texto3 = text2.join(" ");
console.log(texto3)