const urlLegislators = "https://openstates.org/api/v1/legislators/";

const initLegislators = {
    method: "GET",
    headers: { "X-API-Key": "c936feb6-07a8-4609-8bb3-475885618382" }
};

function importScript(name) {
    var s = document.createElement("script");
    s.src = name;
    document.querySelector("#ajax").appendChild(s);
}