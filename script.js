let btn = document.querySelector("button");
let phrase = document.querySelector(".phrase");
let auteur = document.querySelector(".auteur");
let quotee = [];

let url = "https://type.fit/api/quotes";
async function getQuote() {
  try {
    let quot = await fetch(url);
    quotee = await quot.json();
    // console.log(quotee);
    getRandomQuote();
  } catch (error) {
    document.querySelector("#quote").innerHTML = "<h1>Erreur de connexion</h1>";
  }
}
getQuote(url).catch((error) => {
  console.log(error.message);
});

function getRandomQuote() {
  let num = Math.floor(Math.random() * quotee.length);
  let quote = quotee[num];
  //   console.log(quote);
  phrase.innerText = quote.text;
  auteur.innerText = quote.author == null ? "Inconnu" : quote.author;
}
btn.addEventListener("click", getRandomQuote);
