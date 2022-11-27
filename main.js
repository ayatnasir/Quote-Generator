let array = ["What you seek is seeking you.",
"Lovers do not finally meet somewhere. They are in each other all along." ,
"Raise your words, not voice. It is rain that grows flowers, not thunder.",
"Would you become a pilgrim on the road of love? The first condition is that you make yourself humble as dust and ashes.",
"You are not a drop in the ocean. You are the entire ocean, in a drop.",
"Why do you stay in prison, when the door is so wide open?",
"The Prophets accept all agony and trust it. For the water has never feared the fire.",
"Ignore those that make you fearful and sad, that degrade you back towards disease and death."]

console.log(quote)

function getRandomQuote() {
   let randomQuote = Math.floor(Math.random() * array.length);
return array[randomQuote]
}

function showQuote() {
    document.getElementById('quote-el').style.fontStyle = 'italic'
   document.getElementById('quote-el').textContent = getRandomQuote()
   
}
