var quotes = [

    {
        quote: "“Be yourself; everyone else is already taken.”",
        auother: '― Oscar Wilde'
    },
    {
       quote: "“So many books, so little time.”",
       auother: '― Frank Zappa' 
    },
    {
       quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
       auother: '― Albert Einstein' 
    },
    {
       quote: "“A room without books is like a body without a soul.”",
       auother: '― Marcus Tullius Cicero' 
    },
    {
       quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
       auother: '― Bernard M. Baruch' 
    },
    {
       quote: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
       auother: '― Dr. Seuss' 
    },
    {
       quote: "“You only live once, but if you do it right, once is enough.”",
       auother: '― Mae West' 
    },
    {
       quote: "“Be the change that you wish to see in the world.”",
       auother: '― Mahatma Gandhi' 
    },
    {
       quote: "“I have not failed. I've just found 10,000 ways that won't work.”",
       auother: '― Thomas A. Edison' 
    },
    {
       quote: "“Life is what happens to us while we are making other plans.”",
       auother: '― Allen Saunders' 
    },


    

];

var getindex;
var currentindex;
var previousindex = -1;
var firstclick = false;
var btn = document.getElementById("btndisplay");

function getrandomindex() {
    getindex = Math.floor(Math.random()* quotes.length);
    return getindex;
}




function displayquotes() {


    do {
        currentindex = getrandomindex(); 
    } while (currentindex == previousindex);

    document.getElementById("quote").innerHTML = quotes[currentindex].quote;
    document.getElementById("author").innerHTML = quotes[currentindex].auother;
    
    previousindex = currentindex;

}

btn.onclick = displayquotes;