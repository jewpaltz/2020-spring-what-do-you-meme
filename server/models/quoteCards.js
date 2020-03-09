const quoteCards =[
    'For me, math class is like watching a foreign movie without subtitles.',
    'Maybe if we tell people the brain is an app, they will start using it.',
    'When nothing goes right, go left.',
    'A cop pulled me over and told me “Papers”, so I said “Scissors, I win!” and drove off.',
    'Mom: Why is everything on the floor? Me: Gravity!',
    'Sure, I do marathons. On Netflix.',
    'Did it for the memories – totally worth it!',
];

function add(text) {
    quoteCards.push(text);
}

module.exports = {
    list: quoteCards,
    add: add
}

;