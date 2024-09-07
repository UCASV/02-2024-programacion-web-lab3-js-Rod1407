const countVotes = (votes) => {
    let results = {};
    for (let i = 0; i < votes.length; i++) {
        let candidate = votes[i].candidate;
        if (results[candidate]) {
            results[candidate]++;
        } else {
            results[candidate] = 1;
        }
    }
    return results;
}

const showResults = (results) => {
    let message = 'Resultados de la votación:\n';
    for (let candidate in results) {
        message += `${candidate}: ${results[candidate]} votos\n`;
    }
    alert(message);
}

const main = () => {
    let votes = [
        { candidate: 'Alice' },
        { candidate: 'Bob' },
        { candidate: 'Alice' },
        { candidate: 'Alice' },
        { candidate: 'Bob' }
    ];
    let voteCount = countVotes(votes);
    showResults(voteCount);
}

main();