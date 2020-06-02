/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var qualquer = [1,2,3,4,5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function novaFuncao(arr){
... return arr;
... }

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
novaFuncao(qualquer[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function consulta_array(vec,pos){
... return vec[pos];
... }

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var louco = [1,'um',true,null,undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
> consulta_array(louco,0);
1
> consulta_array(louco,1);
'um'
> consulta_array(louco,2);
true
> consulta_array(louco,3);
null
> consulta_array(louco,4);
undefined

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book( bookname ) {
	var allBooks = {
		'Cujo': {
			quantidadedePaginas:300,
			autor:'Stephen King',
			editora:'Sextante'
		},
		'Azincourt':{
			quantidadedePaginas:500,
			autor:'Bernard Cornwell',
			editora:'Ediouro'
		},
		'Innsmouth':{
			quantidadedePaginas:120,
			autor:'H.P. Lovecraft',
			editora:'Cia. das Letras'
		}
	};
	return !bookname ? allBooks : allBooks[ bookname ];
}


/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
'O livro Cujo tem ' + book('Cujo').quantidadedePaginas + ' páginas!';

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
'O autor do livro Cujo é ' + book('Cujo').autor;

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
'O livro Cujo foi publicado pela editora ' + book('Cujo').editora;
