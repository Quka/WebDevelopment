const apiKey = "api_key=42f01c91e2888f5feed811e84e2c0b5e"
const moviesUrl = "https://api.themoviedb.org/3/"


// GET MOVIES

const getAsync = async (url) => {
    try {
        return await axios.get(url)
    } catch (error) {
        console.error(error)
    }
}

async function movieHtmlBuilder () {
    let mainContent = document.getElementById("main-content")
    let movies = (await getAsync(moviesUrl + "discover/movie?sort_by=popularity.desc&" + apiKey)).data.results

    for (let i = 0; i < movies.length; i++) {
        
        // THE MOVIES
        const m = movies[i];

        let article = document.createElement("article")

        let articleH2 = document.createElement("h2")
            articleH2.innerHTML = m.original_title
            article.append(articleH2)
        
        mainContent.append(article)
    }
}

movieHtmlBuilder()










// NAVIGATION

let navBtn = document.getElementById("nav-btn");
let navMenu = document.getElementById("menu");

navBtn.addEventListener("click", () => {
    if(navMenu.className != "active") {
        navMenu.className = "active";
    } else {
        navMenu.className = "";
    }
})