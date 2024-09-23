const historicalFacts = [];

const showHistoricalFact = () => {
    const historicalFact = historicalFacts[Math.floor(Math.random() * historicalFacts.length)];
    console.log(`\x1b[34m${historicalFact}\x1b[89m`);
}

module.exports = {
    showHistoricalFact
};