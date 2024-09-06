const countVotes = (/*recibe*/) => {
    //Code
}

const showResults = (/*recibe*/) => {
    //Code
}

const main = () => {
    let votes = [
        { candidate: 'Alice' },
        { candidate: 'Bob' },
        { candidate: 'Alice' },
        { candidate: 'Alice' },
        { candidate: 'Bob' }
    ];
    //Code

}

main();


// // Función para contar los votos de cada candidato
// function countVotes(votesArray) {
//     const voteCount = {};
//     votesArray.forEach(vote => {
//       voteCount[vote.candidate] = (voteCount[vote.candidate] || 0) + 1;
//     });
//     return voteCount;
//   }
  
//   // Función para mostrar los resultados en un alert
//   function showResults(results) {
//     let message = "Resultados de la votación:\n";
//     for (const candidate in results) {
//       message += `${candidate}: ${results[candidate]} votos\n`;
//     }
//     alert(message);
//   }
  
//   // Función principal para coordinar todo el proceso
//   function main() {
//     // Simulamos una votación con varios candidatos
//     const votes = [
//       { candidate: "Candidato A" },
//       { candidate: "Candidato B" },
//       { candidate: "Candidato A" },
//       { candidate: "Candidato C" },
//       // ... más votos
//     ];
  
//     // Contamos los votos
//     const results = countVotes(votes);
  
//     // Mostramos los resultados
//     showResults(results);
//   }
  
//   // Llamamos a la función principal
//   main();