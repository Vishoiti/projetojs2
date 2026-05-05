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
// Metodo tofixed


const precoProduto=199.99;
const desconto=0.15; //15%
const precoFinal=precoProduto *(1-desconto);
console.log(precoFinal);
//`` - Template string - concatenação
console.log(`R$ ${precoFinal.toFixed(2)}`);


// Dom (Document object model)

const titulo=document.getElementById("titulo")

titulo.innerText= "o DOM mudou o texto";

titulo.style.color="blue";

/* CRIANDO O APP */
const produtos =[
    {nome:"Teclado Mecânico",preco:300,emPromocao:true},
    {nome:"Mouse Gamer",preco:150,emPromocao:false},
    {nome:"Monitor Gamer",preco:1300,emPromocao:true},
    {nome:"Pad Mouse XL",preco:400,emPromocao:false},
];

const container =document.getElementById("listar-produtos");
const mostrarTotal = document.getElementById("resultado-total");

//Map: Transforma o array de objetos em um arry de strings html e css

function todosProdutos(lista){
    mostrarTotal.innerText="";
    const htmlProdutos =lista.map(item =>`
        <div class="card"></div>
            <h3>${item.nome}</h3>
            <p>Preço: R$ ${item.preco}</p>
            ${item.emPromocao ? '<span class="tag">Promoção</span>':''}        
            </div>
        `).join('');
    
    container.innerHTML=htmlProdutos;
}

//FILTER: cria uma nova lista apenas com o que selecionou

function filtrarPromocoes(){
    const promocionais= produtos.filter(item => item.emPromocao);
    todosProdutos(promocionais)
}
//REDUCE: Reduz o array a um unico valor(soma dos preços)

function calcularTotal(){
    const total =produtos.reduce((acumulador,item) => {
    return acumulador + item.preco;
    },0);
    mostrarTotal.innerText= `Valor total R$ ${Total}`;
}