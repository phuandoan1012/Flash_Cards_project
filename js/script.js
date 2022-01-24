/******************************************
*****************************************/

/*** 
 * `quotes` array 
***/
quotes = [{
    quote: "The people who are crazy enough to think they can change the world are the ones who do.",
    source: "Tim Cook",
    citation: "Twitter",
    year: 2015
},
{
    quote: "Don't let the noise of others' opinions drown out your own inner voice.",
    source: "Steve Jobs"
},
{
    quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    source: "Steve Jobs"
},
{
    quote: "Move fast and break things. Unless you are breaking stuff, you are not moving fast enough.",
    source: "Mark Zuckerberg"
},
{
    quote: "The biggest risk is not taking any risk.",
    source: "Mark Zuckerberg"
},
{
    quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    source: "Patrick McKenzie",
    citation: "Twitter",
    year: 2016
}]


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
    // Generates a random number represented for the index of the selected random quote.
    let random = Math.floor(Math.random() * quotes.length);

    // Grab a random object from the 'quotes' array, and store it in a variable
    let randomObj = quotes[random];

    // Return the object variable
    return randomObj;
}


/***
 * `printQuote` function
***/
function printQuote() {
    // calls the getRandomQuote() function
    let randomQuote = getRandomQuote();

    // Initiate HTML string with
    let PtoHTML1 = "<p class='quote'>" + randomQuote.quote + "</p><p class='source'>" + randomQuote.source;

    // Check if the citation property exists 
    if (randomQuote.hasOwnProperty('citation')) {
        // Concatenate some elements to the HTML string
        PtoHTML1 = PtoHTML1.concat("<span class='citation'>", randomQuote.citation, "</span>");
    }

    // Check if the year property exists 
    if (randomQuote.hasOwnProperty('year')) {
        // Concatenate some elements to the HTML string
        PtoHTML1 = PtoHTML1.concat("<span class='year'>", randomQuote.year, "</span>");
    }

    // Concatenate the closing </p> tag to the HTML string
    PtoHTML1 = PtoHTML1.concat("</p>");

    // Set the innerHTML of the quote-box div
    document.getElementById('quote-box').innerHTML = PtoHTML1;

    // log out the random quote object and the complete HTML string
    console.log(randomQuote);
    console.log(PtoHTML1);
}


/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/

document.getElementById('load-quote').addEventListener("click", printQuote);