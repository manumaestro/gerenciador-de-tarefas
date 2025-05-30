let tarefas = ['Estudar JavaScript', 'Fazer exercícios de matemática', 'Lavar a louça', 'Comprar mercado', 'Ir à academia', 'Ler um livro', 'Fazer revisão para o teste', 'Limpar o quarto', 'Estudar para concurso', 'Organizar computador'];

console.log("Antes do push");
console.table(tarefas);

// Adicionando uma nova tarefa
tarefas.push("Jogar the last of us", "Fazer a janta");

console.log("Depois do push");
console.table(tarefas);
