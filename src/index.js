const { historicalFacts } = require('./facts');
const { animals } = require('./animals');
const lolcatjs = require('lolcatjs');

lolcatjs.options.seed = Math.round(Math.random() * 1000);
lolcatjs.options.colors = true;


const showHistoricalFact = () => {
    const historicalFact = historicalFacts[Math.floor(Math.random() * historicalFacts.length)];
    const characters = animals(historicalFact);
    const character = characters[Math.floor(Math.random() * characters.length)].art;
    lolcatjs.fromString(character);
}

module.exports = {
    showHistoricalFact
};