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

// Verificando se uma tarefa existe 

let verificaTarefa = "Ir à academia"
if (tarefas.includes(verificaTarefa)) {
    console.log(`A tarefa ja existe na lista`);
} else {
    tarefas.push(verificaTarefa);
    console.table(tarefas);
}

// Transformando a Lista em String

console.log(`Antes do join`);
console.table(tarefas);
console.log("Lista de tarefas como String: ", tarefas.join(", "));

/// Extraindo uma Parte da Lista

console.log("Extraindo parte da lista");
console.table(tarefas);
console.log(`Parte da lista (índices 2 a 4): ${tarefas.slice(2, 4)}`); // ['Lavar a louça', 'Comprar mercado',]
console.log("Depois do slice");
console.table(tarefas);

