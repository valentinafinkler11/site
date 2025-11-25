function search() {

    let input = document.getElementById("searchInput").value.toLowerCase();

    const sections = {

        "html": ["html", "front-end", "estrutura"],

        "banco": ["banco de dados", "dados", "importante"],

        "mobile": ["mobile", "aplicativos", "servidores"],

        "integracao": ["integram", "sistemas", "fluxo"],

        "exemplo": ["ifood", "nubank", "exemplos"]

    };
 
    for (let id in sections) {

        let match = sections[id].some(keyword => keyword.includes(input));

        document.getElementById(id).style.display = match || input === "" ? "block" : "none";

    }

}

 