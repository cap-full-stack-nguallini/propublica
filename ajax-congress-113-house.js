const url = "https://api.propublica.org/congress/v1/113/house/members.json";

const init = {
    method: "GET",
    headers: { "X-API-Key": "CRxdynx7oKsVh7nTo9VDDKo9qYI5oMgOF52rYb0k" },
    mode: "cors",
    cache: "default"
};

const errorMsg = "The data could not be loaded. Come back later.";

function importScript(name) {
    var s = document.createElement("script");
    s.src = name;
    document.querySelector("#ajax").appendChild(s);
}