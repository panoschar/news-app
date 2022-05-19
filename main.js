



function displayNews() {
    document.getElementById('main-news').innerHTML = "";

    fetch(`https://newsapi.org/v2/everything?q=football&apiKey=75aee15d7fea48038aee8d5dd15f8657`)

        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            for (let i = 0; i < data.articles.length; i++) {
                document.getElementById('main-news').innerHTML  += `<li>${data.articles[i].content}</li>`

            }
        });

};
displayNews();