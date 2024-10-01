# Níveis de Herói Baseados em Experiência
Este projeto implementa uma classe heroi em JavaScript, que representa um herói com um nome e uma quantidade de experiência (xp). O nível do herói é determinado pela sua experiência, e o herói pode se apresentar, indicando seu nome e nível.

## Estrutura do Código
### Classe heroi
A classe heroi possui as seguintes propriedades e métodos:

Propriedades:

- nome: Armazena o nome do herói.
- xp: Armazena a quantidade de experiência do herói (em pontos).

Métodos:

constructor(nome, xp): O construtor da classe, usado para criar uma nova instância de herói. Ele recebe dois parâmetros:

nome: nome do herói.
xp: experiência do herói (em pontos).

Apresentar(): Este método determina o nível do herói com base em sua experiência (xp) e exibe o nome e o nível do herói no console. Os níveis são categorizados da seguinte forma:

- Ferro: 0 <= xp <= 1000

- Bronze: 1001 <= xp <= 2000

- Prata: 2001 <= xp <= 5000

- Ouro: 5001 <= xp <= 7000

- Platina: 7001 <= xp <= 8000

- Ascendente: 8001 <= xp <= 9000

- Imortal: 9001 <= xp <= 10000

- Radiante: xp > 10000

## Técnicas Utilizadas:

- Classes em JavaScript: O código utiliza a sintaxe de classes para definir o comportamento e propriedades de um herói.

- Estrutura condicional if-else: O método apresentar utiliza a estrutura condicional para verificar diferentes faixas de experiência (xp) e atribuir um nível apropriado ao herói.

- Template String: O método apresentar utiliza a sintaxe de template strings para exibir o nome e o nível do herói no console de forma dinâmica.

- Orientação a Objetos: Este exemplo é uma demonstração simples de orientação a objetos, onde cada herói é uma instância da classe heroi, com propriedades e comportamentos definidos.

## Exemplo de Uso
Aqui está um exemplo de como instanciar um novo herói e chamá-lo para se apresentar:

```javascript
let h1 = new heroi("Joãozinho Voador", 7500);
h1.apresentar();
```

Neste exemplo, o herói "Joãozinho Voador" tem 7500 pontos de experiência, então ele será classificado como de nível Ouro.


Saída Esperada
Ao executar o exemplo acima, a saída será:

```bash
Meu nome é Joãozinho Voador e eu sou um herói com nível Ouro´´´