// Class
// O ES6 trouxe uma nova sintaxe para implementarmos funções construtoras. Agora podemos utilizar a palavra chave class. É considerada syntactical sugar, pois por baixo dos panos contua utilizando o sistema de protótipos de uma função construtora para criar a classe.

// Constructor 
// O método constructor(args) {} é um mpetodo especial de uma classe. Nele você irá definir todas as propriedades do objeto que será criado. Os argumentos passados em new, vão direto para o constructor

// Constuctor Return
// Por padrão a classe retorna this. Ou seja, this é o objeto criado com o new Class. Podemos modificar isso alterando o return do constructor, o problema é que perderá toda a referência do objeto.

// This
// Assim como em uma função construtora, this faz referência ao objeto criado com new. Você pode acessar as propriedades e métodos da classe utilizando o this

// Podemos passar qualquer valor dentros de uma propriedade

// Static vs Prototype
// Por padrão todos os métodos criados dentro da classe irão par ao protótipo da mesma. Porém podemos criar métodos diretamente na classe utilizando a palavra chave static. Assim como [].map() é um método de uma array e Array.from() é um método construtor Array.

// Static -> você pode utilizar um método static para retornar a própria classe com propriedades já pré definidas.

// Get e Set 
// Podemos definir comportamentos diferentes de get e set para um método

// Valor estático -> se definirmos apenas o get de um método, teremos então um valor estático que não será possível mudarmos

// Subclasses
// É possível criarmos uma subclasse, está irá ter acesso aos métodos da classe á qual ela esendeu através do seu prototypo

// Super -> É possivél utilizar a palavra chave super para falarmos com a classe que pai e acessarmos os seu métodos e propriedades

// Countdown
// Plugin de contagem regressiva
