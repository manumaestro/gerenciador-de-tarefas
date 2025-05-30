let tarefas = ['Estudar JavaScript', 'Fazer exercícios de matemática', 'Lavar a louça', 'Comprar mercado', 'Ir à academia', 'Ler um livro', 'Fazer revisão para o teste', 'Limpar o quarto', 'Estudar para concurso', 'Organizar o computador'];

console.log("Antes do push");
console.table(tarefas);

// Adicionando uma nova tarefa 

tarefas.push("Jogar the last of us", "Fazer a janta");

console.log("Depois do push");
console.table(tarefas);

// Removendo a última tarefa

let tarefaRemovida = tarefas.pop();

console.log("Depois do pop");
console.table(tarefas);

console.log("Tarefa removida: ", tarefaRemovida);

// Adicionando uma nova tarefa no início da lista

tarefas.unshift("Fazer o almoço");

console.log("Depois do unshift");
console.table(tarefas);

// Removendo a primeira tarefa 

let primeiraTarefa = tarefas.shift();

console.log("Depois do shift");
console.table(tarefas);

console.log("Tarefa removida: ", primeiraTarefa);
