const historicalFacts = [
  "Napoleon was once attacked by a horde of bunnies. He had ordered a rabbit hunt, but they turned on him instead.",
  "Albert Einstein’s brain was stolen after his death, but it was eventually returned... for science.",
  "Cleopatra lived closer in time to the first Moon landing than to the construction of the Great Pyramid of Giza.",
  "Before alarm clocks, people were hired as ‘knocker-uppers’ to shoot peas at windows to wake people up.",
  "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.",
  "Winston Churchill was hit by a car on Fifth Avenue in New York. His response? ‘I should have looked both ways.’",
  "Roman Emperor Caligula declared war on Neptune, god of the sea, and commanded his soldiers to stab the ocean.",
  "In 1923, jockey Frank Hayes won a horse race despite being dead. He had a heart attack mid-race but stayed on the horse.",
  "In ancient Greece, throwing an apple at someone was considered a way to propose marriage.",
  "President Andrew Jackson had a pet parrot who learned to curse so well that it had to be removed from his funeral.",
  "In 1912, a French tailor named Franz Reichelt jumped off the Eiffel Tower wearing a homemade parachute. It didn’t work.",
  "King Henry VIII had people who were paid to wipe his bottom. They were called ‘Grooms of the Stool.’",
  "In 1838, the State of Missouri declared it legal to kill Mormons. It wasn’t repealed until 1976.",
  "Otto the Great, a Holy Roman Emperor, wore his crown so often that people called him 'Otto the Crowned.'",
  "In 1920, Babe Ruth outran a speeding train… well, at least for 100 yards until he collapsed from exhaustion.",
  "In ancient Rome, some people believed that drinking gladiator blood could cure epilepsy.",
  "Albert Einstein was offered the presidency of Israel in 1952, but he declined, saying he wasn’t good with people.",
  "The first known contraceptive was crocodile dung used by ancient Egyptians.",
  "The inventor of the Pringles can, Fred Baur, had his ashes buried in a Pringles can after he died.",
  "In the 1800s, dentures were often made from the teeth of dead soldiers. These ‘Waterloo teeth’ were in high demand.",
  "Peter the Great of Russia imposed a tax on beards in 1698 to promote Western grooming styles.",
  "In 1374, an outbreak of ‘dancing plague’ in Europe caused people to dance uncontrollably for days until they collapsed.",
  "The famous Viking, Erik the Red, was exiled from Iceland for murder and had to start a new life in Greenland.",
  "French military leader Charles de Gaulle survived 31 assassination attempts.",
  "The guillotine was still used in France up until 1977, the same year 'Star Wars' was released.",
  "During WWII, British soldiers were taught to salute magpies because of a superstition that seeing just one was bad luck.",
  "In 1820, the British navy banned sailors from wearing earrings… because they believed the earrings were hypnotizing them.",
  "In 1917, the U.S. government jailed a man for teaching his dog to raise its paw like a Nazi salute.",
  "Thomas Jefferson and John Adams both died on the same day—July 4, 1826, the 50th anniversary of the Declaration of Independence.",
  "In 1518, there was a ‘Dancing Plague’ in Strasbourg where people literally danced until they died from exhaustion."
];

const showHistoricalFact = () => {
    const historicalFact = historicalFacts[Math.floor(Math.random() * historicalFacts.length)];
    console.log(`\x1b[34m${historicalFact}\x1b[89m`);
}

module.exports = {
    showHistoricalFact
};