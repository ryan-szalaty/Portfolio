const quotes = [
    "Make the thing do the thing that you want the thing to do.",
    "Tutorial Hell is only escaped by entering Development Hell.",
    "Disregard society. Acquire API key.",
    "Who said programming is stressful? It's actually infuriating.",
    "Alas, today, we mourn the loss of yet another monitor and keyboard.",
    "A wise old developer once said, \"What the heck did I just copy from Stack Overflow?\"",
    "If it works, don't fix it."
];

let quote = quotes[0];

document.getElementById('quote').innerText = quote;

getQuote = () => {
    const quoteElement = document.getElementById('quote');
    quote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.innerText = quote;
    quoteElement.animate([
        {
            opacity: 0,
            left: 0
        },
        {
            opacity: 1,
            left: "5%",
            transition: "ease-in-out"
        }
    ], 2000);
}

setInterval(getQuote, 5000);



