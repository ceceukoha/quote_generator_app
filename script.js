const getQuote = async () =>{

    var url = "https://type.fit/api/quotes";

    const response = await fetch(url);
    const allQuotes = await response.json();

    const indx = Math.floor(Math.random()*allQuotes.length);

    const quotes=allQuotes[indx].text;
    const authors=allQuotes[indx].author;


    if(authors==null){
        authors = "Anonymous";
    }

    const text=document.getElementById("quote");
    const author=document.getElementById("author");

    text.innerHTML = ''+"" + quotes;
    author.innerHTML="~ "+authors;

    const tweetButton=document.getElementById("tweet");

    tweetButton.href="https://twitter.com/intent/tweet?text=" + quotes+" ~ "+authors;
}
getQuote();