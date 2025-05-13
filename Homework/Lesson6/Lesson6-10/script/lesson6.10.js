let suits = ['spade', 'diamond', 'heart', 'club'];
let values = ['6', '7', '8', '9', '10', 'ace','jack','queen','king'];

const cards = [];
for (const suit of suits) {
    for (const value of values) {
        const card = {cardSuit: suit, value: value};
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red';
        } else {
            card.color = 'black';
        }
        cards.push(card);
    }
}
console.log(cards);
console.log(cards.find(card => card.value === 'ace' && card.cardSuit === 'spade'));
console.log(cards.find(card => card.value === '6'));
console.log(cards.find(card => card.color === 'red'));
console.log(cards.find(card => card.cardSuit === 'diamond'));
console.log(cards.filter(card => card.cardSuit === 'club' && (card.value !== '6' || card.value !== '7' || card.value !== '8' || card.value !== '9')));
