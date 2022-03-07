//classes
const ui = new UI();
const newsApi = new News();



//eventListeners

eventListeners();
function eventListeners(){
    //access to the search button
    document.querySelector("#submitBtn").addEventListener("click" , search);
}





//functions
//read and show value of every input
function search(e) {
    e.preventDefault();

    //read the value of every input
    const newsName = document.querySelector("#news-name").value;
    const country = document.querySelector("#country").value;
    const category = document.querySelector("#category").value;

    //validate every input
    if (newsName !== "" || country !== "" || category !== ""){
        newsApi.queryAPI(newsName,country,category)
            .then(news =>{
                const newsArray = news.news.articles;
                if (newsArray.length > 0){
                    ui.showNews(newsArray);
                }else{
                    ui.printMessage("There are no news with this filtering" , "text-center alert alert-danger mt-4");
                }
            })
    }else{
        ui.printMessage("Please fill at least one field" , "text-center alert alert-danger mt-4");
    }
}















