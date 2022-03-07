class UI {
    constructor() {
        this.result = document.querySelector("#result");
    }

    //print messages
    printMessage(message, classNames) {
        //create a div tag
        const div = document.createElement("div");
        //append message to the div
        div.appendChild(document.createTextNode(message));
        //add classes to the div
        div.className = classNames;
        //append div to father tag
        document.querySelector("#message").appendChild(div);

        //set time for remove div and messages
        setTimeout(() => {
            this.removeMessage();
        }, 3000)

    }

    //remove messages
    removeMessage() {
        const alert = document.querySelector(".alert");
        if (alert) {
            alert.remove();
        }
    }

    //show news that exist
    showNews(news) {
        //read every new
        news.forEach(newsInfo => {
            console.log(newsInfo);
            //show every new into the result tag
            this.result.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h2 class="card-title">${newsInfo.title.split("-" , 1)}</h2>
                        <p class="card-text">News Information : ${newsInfo.description}</p>
                        <span class="badge badge-secondary">source : ${newsInfo.source.name}</span>
                        <span class="badge badge-secondary">Date and Time : ${newsInfo.publishedAt}</span>
                        <a href="${newsInfo.url}" target ="_blank" class="btn btn-primary btn-block mt-1">Go somewhere</a>
                    </div>
                </div>
            </div>
            `
        });
    }
}
