var membersOfTheHouse = [];

for (var i = 0; i < data.results[0].members.length; i++) {
    membersOfTheHouse.push(data.results[0].members[i]);
}

var app = new Vue({
    el: "#app",
    data: {
        membersOfTheHouse: []
    }
});

function generaTabla() {

    var membersOfTheHouseShowns = [];

    var partyBox = Array.from(document.querySelectorAll("input[name=party_box]:checked")).map(elt => elt.value);

    var stateSelected = document.querySelector("#state_selected").value;

    for (var i = 0; i < membersOfTheHouse.length; i++) {
        if ((partyBox[0] == membersOfTheHouse[i].party || partyBox[1] == membersOfTheHouse[i].party || partyBox[2] == membersOfTheHouse[i].party) && (stateSelected == "ALL" || membersOfTheHouse[i].state == stateSelected)) {
            membersOfTheHouseShowns.push(membersOfTheHouse[i]);
        }
    }

    app.membersOfTheHouse = membersOfTheHouseShowns;

}

generaTabla()

function updateUI() {
    generaTabla();
}

$("#FilterForm").on("change", updateUI);