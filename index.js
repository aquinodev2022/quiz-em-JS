alert("\n\nSeja bem-vindo ao quiz de conhecimentos gerais! \n\nVamos jogar? Tente acertar o máximo de perguntas!");

const perguntas = [
  {
    pergunta: "\n1) De quem é a famosa frase “Penso, logo existo”?\n",
    opcoes: ["a) Platão", "b) Sócrates", "c) Descartes", "d) Francis Bacon\n"],
    resposta: "c"
  },
  {
    pergunta: "\n2) Qual o nome do presidente do Brasil que ficou conhecido como Jango?\n",
    opcoes: ["a) Jânio Quadros", "b) João Goulart", "c) Getúlio Vargas", "D) João Figueiredo\n"],
    resposta: "b"
  },
  {
    pergunta: "\n3) Quais as duas datas que são comemoradas em novembro?\n",
    opcoes: ["a) Independência do Brasil e Dia da Bandeira", "b) Black Friday e Dia da Árvore", "c)   Dia de Finados e Dia Nacional do Livro", "D) Proclamação da República e Dia Nacional da Consciência Negra\n"],
    resposta: "d"
  },
  {
    pergunta: "\n4) Quem pintou o quadro Guernica?\n",
    opcoes: ["a) Paul Cézanne", "b) Tarsila do Amaral", "c) Pablo Picasso", "D) Salvador Dalí\n"],
    resposta: "c"
  },
  {
    pergunta: "\n5) Quanto tempo a luz do Sol demora para chegar à Terra?”?\n",
    opcoes: ["a) 8 minutos", "b) 12 minutos", "c) 1 dia", "d) 12 segundos\n"],
    resposta: "a"
  },
  {
  pergunta: "\n6) Em que período da pré-história o fogo foi descoberto”?\n",
  opcoes: ["a) Neolítico", "b) Paleolítico", "c) Período da Pedra Polida", "d) Idade dos Metais\n"],
  resposta: "b"
  },
  {
  pergunta: "\n7) Qual a montanha mais alta do Brasil?\n",
  opcoes: ["a) Pico da Bandeira", "b) Monte Roraima", "c) Pico Paraná", "d) Pico da Neblina\n"],
  resposta: "d"
  },
  {
  pergunta: "\n8) Quem é o autor de “O Príncipe”?\n",
  opcoes: ["a) Montesquieu", "b) Maquiavel", "c) Rousseau", "d) Thomas Hobbes\n"],
  resposta: "b"
  },
  {
  pergunta: "\n9) Quais destas doenças são sexualmente transmissíveis?\n",
  opcoes: ["a) Aids, tricomoníase e ebola", "b) Botulismo, cistite e gonorreia", "c) Gonorreia, clamídia e sífilis", "d) Hepatite B, febre tifoide e hanseníase\n"],
  resposta: "c"
  },
  {
  pergunta: "\n10) Que líder mundial ficou conhecida como “Dama de Ferro”?\n",
  opcoes: ["a) Angela Merkel", "b) Dilma Rousseff", "c)  Hillary Clinton", "d) Margaret Thatcher\n"],
  resposta: "d"
  },
  {
    pergunta: "\n11) Quem foi o primeiro presidente do Brasil?”?\n",
    opcoes: ["a) Marechal Deodoro da Fonseca", "b) Floriano peixoto", "c) Getúlio Vargas", "d) Tancredo Neves\n"],
    resposta: "a"
  },
  {
    pergunta: "\n12) Quem escreveu a peça de teatro Romeu e Julieta?\n",
    opcoes: ["a) Henrik Ibsen", "b) Anton Tchekhov", "c)  William Shakespeare", "d) Molière\n"],
    resposta: "c"
  },
  {
    pergunta: "\n13) Qual é a maior cordilheira do mundo\n",
    opcoes: ["a) Andes", "b) Alpes", "c) Himalaias", "d) Montanhas Rochosas\n"],
    resposta: "a"
  }, 
  {
    pergunta: "\n14) Quem foi o líder da Revolução Cubana em 1959?\n",
    opcoes: ["a) Raúl Castro", "b) Fidel Castro", "c)  Fulgencio Batista", "d) Che Guevara\n"],
    resposta: "b"
  },
  {
    pergunta: "\n15) Quem pintou a Mona Lisa?\n",
    opcoes: ["a) Michelangelo", "b) Leonardo da Vinci", "c) Vincent van Gogh", "d) Pablo Picasso\n"],
    resposta: "b"
  }
];

const mostrarRespostaIncorreta = (respostaCorreta) => {
  alert(`\nResposta incorreta! A resposta correta era ${respostaCorreta}.`);
};

const executarQuiz = () => {
  let pontuacao = 0;
  for (let i = 0; i < perguntas.length; i++) { // loop para percorrer cada objeto no array perguntas
    let respostaUsuario;
    do {
      respostaUsuario = prompt(perguntas[i].pergunta + "\n" + perguntas[i].opcoes.join("\n")); // Exibe as perguntas, opções e armazena a resposta do usuário
      // Verifica se a resposta do usuário não é uma das opções válidas
      if (!['a', 'b', 'c', 'd'].includes(respostaUsuario.toLowerCase())) {
        alert("Por favor, digite uma opção válida (a, b, c ou d)!");
      }
    } while (!['a', 'b', 'c', 'd'].includes(respostaUsuario.toLowerCase())); // Repete o loop até que o usuário digite uma opção válida (a, b, c ou d)

    if (respostaUsuario.toLowerCase() === perguntas[i].resposta.toLowerCase()) { // Caso o usuário acerte a pergunta 
      pontuacao++;
      alert("\nResposta correta! Muito bem!");
    } else {
      // Chama a função para mostrar a alternativa correta
      mostrarRespostaIncorreta(perguntas[i].resposta.toUpperCase());
    }
  }
  // Pontuação final do usuário
  alert(`Quiz finalizado! Sua pontuação é: ${pontuacao}/${perguntas.length}! Obrigado por jogar!`);
};

// Inicializando o quiz 
executarQuiz();