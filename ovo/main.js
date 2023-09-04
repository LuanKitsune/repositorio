const catalogo = [{
	id: 1,
	nome: "kunai",
	preco: 5,
	imagem: "kunai.jpg",
},
{
	id: 2,
	nome: "shuriken",
	preco: 10,
	imagem: "shuriken.jpg",
},
{
	id: 3,
	nome: "katana",
	preco: 155,
	imagem: "katana.jpg",
},
{
	id: 4,
	nome: "luva-jonin",
	preco: 38,
	imagem: "luva-jonin.jpg",
},

{
	id: 5,
	nome: "colete",
	preco: 256,
	imagem: "colete.jpg",
},
{
	id: 6,
	nome: "mascara-anbu",
	preco: 95,
	imagem: "mascara-anbu.jpg",
},
{
	id: 7,
	nome: "kubikiribucho",
	preco: 87.469,
	imagem: "kubikiribucho.jpg",
}

]

for (const produtoCatalogo of catalogo){
	const cartaoProduto = `<div id="card-produto-1">
				<img 
				src="img/itens/${produtoCatalogo.imagem}"
				alt="Produto 1 da Loja Ninja"
				style="height:300px"
				/>
				<p>${produtoCatalogo.nome}</p>
				<p>$${produtoCatalogo.preco}</p>
				<button>Adicionar</button>
			</div>`;

document.getElementById('container-produto ').innerHTML += cartaoProduto


}

