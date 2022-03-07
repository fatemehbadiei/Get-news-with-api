class News {
    constructor() {
        this.APIkey = "55daf32111c345b69bdbe3b7b8dba13d";
    }

    async queryAPI(newsName, country, category) {
        //make url according to value of every input
        let url = "https://newsapi.org/v2/";

        //validate every value of input
        if (country === "" && category === "") {
            url += "everything?";
        } else {
            url += "top-headlines?";
        }

        //if newName exist
        if (newsName !== "") {
            url += `q=${newsName}&`;
        }
        //if country exist
        if (country !== "") {
            url += `country=${country}&`;
        }
        //if category exist
        if (category !== "") {
            url += `category=${category}&`;
        }

        url += `apiKey=${this.APIkey}`;

        //fetch url
        const newsResponse = await fetch(url);
        const news = await newsResponse.json();
        return{
            news
        }
    }
}

