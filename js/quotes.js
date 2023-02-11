const quotes = [
    {
        quote: "The way to get started is to quit talkin and begin doing.",
        author: "Walt Disney",
    },
    {
        quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
        author: "Robert Louis Stevenson",
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller",
    },
    {
        quote: "Life is 10% what happens to me and 90% of how I react to it.",
        author: "Charles Swindoll",
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt",
    },
    {
        quote: "You are enough just as you are.",
        author: "Meghan Markle",
    },
    {
        quote: "Everything you've ever wanted is on the other side of fear.",
        author: "George Addair",
    },
    {
        quote: "A person without regrets is a nincompoop.",
        author: "Mia Farrow",
    },
    {
        quote: "The greatest mistake you can make is to be continually fearing that you’ll make one.",
        author: "Elbert Hubbard",
    },
    {
        quote: "There is only one certainty in life and that is that nothing is certain.",
        author: "G.K. Chesterton",
    },
    {
        quote: "A problem is a chance for you to do your best.",
        author: "Duke Ellington",
    },
    {
        quote: "What’s wrong with being sentimental? Sentimental means you like stuff.",
        author: "Paul McCartney",
    },
    {
        quote: "Even the worst haircut eventually grows out.",
        author: "Lisa Kogan",
    },
    {
        quote: "Morale is when your hands and feet keep on working when your head says it can’t be done.",
        author: "Ben Morcell",
    },
    {
        quote: "Speak your mind, even if your voice shakes.",
        author: "Maggie Kuhn",
    },
    {
        quote: "There’s power in looking silly and not caring that you do.",
        author: "Amy Poehler",
    },
    {
        quote: "Action is the antidote to despair.",
        author: "Joan Baez",
    },
    {
        quote: "The best bridge between despair and hope is a good night’s sleep.",
        author: "Harry Ruby",
    },
];

const quote = document.querySelector("#quote p:first-child");
const author = document.querySelector("#quote p:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
// Math.random으로 0~1(1은 미포함) 난수 생성, quotes.length로 quotes array 길이 구해서 곱해줌, Math.floor로 정수로 바꿔줌

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
