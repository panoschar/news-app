

function getNews() {
 
    fetch(`https://newsapi.org/v2/everything?q=football&apiKey=75aee15d7fea48038aee8d5dd15f8657`)
  
.then((response) => response.json())
.then(data => console.log(data.articles));
        document.querySelector('main-news').innerHTML = data.articles;
    
    };
 

