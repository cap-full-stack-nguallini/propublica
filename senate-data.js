var senators = [];

for (var i = 0; i < data.results[0].members.length; i++) {
    senators.push(data.results[0].members[i]);
}

var app = new Vue({
    el: "#app",
    data: {
        senators: []
    }
});

function generaTabla() {

    var senatorsShowns = [];

    var partyBox = Array.from(document.querySelectorAll("input[name=party_box]:checked")).map(elt => elt.value);

    var stateSelected = document.querySelector("#state_selected").value;

    for (var i = 0; i < senators.length; i++) {
        if ((partyBox[0] == senators[i].party || partyBox[1] == senators[i].party || partyBox[2] == senators[i].party) && (stateSelected == "ALL" || senators[i].state == stateSelected)) {
            senatorsShowns.push(senators[i]);
        }
    }

    app.senators = senatorsShowns;

}

generaTabla()

function updateUI() {
    generaTabla();
}

$("#FilterForm").on("change", updateUI);