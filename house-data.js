function quitarNulos(item) {
    if (item != null) {
        return item;
    } else {
        return "";
    }
}

function generaTabla() {

    var partyBox = Array.from(document.querySelectorAll("input[name=party_box]:checked")).map(elt => elt.value);

    var stateSelected = document.querySelector("#state_selected").value;

    var tabla = "";

    tabla += "<thead>\
            <tr>\
            <th scope='col'>Name</th>\
            <th scope='col'>Party</th>\
            <th scope='col'>State</th>\
            <th scope='col'>Years in Office</th>\
            <th scope='col'>% Votes w/ Party</th>\
            </tr>\
            </thead>\
            <tbody>";
    for (var i = 0; i < data.results[0].members.length; i++) {
        tabla += "<tr>";
        for (var j = 0; j < 1; j++) {
            if ((partyBox[0] == data.results[0].members[i].party || partyBox[1] == data.results[0].members[i].party || partyBox[2] == data.results[0].members[i].party) && (stateSelected == "ALL" || data.results[0].members[i].state == stateSelected)) {
                tabla += "<td><a href='" + quitarNulos(data.results[0].members[i].url) + "'>" + quitarNulos(data.results[0].members[i].first_name) + " " + quitarNulos(data.results[0].members[i].middle_name) + " " + quitarNulos(data.results[0].members[i].last_name) + "</a></td>\
                    <td>" + quitarNulos(data.results[0].members[i].party) + "</td>\
                    <td>" + quitarNulos(data.results[0].members[i].state) + "</td>\
                    <td>" + quitarNulos(data.results[0].members[i].seniority) + "</td>\
                    <td>" + quitarNulos(data.results[0].members[i].votes_with_party_pct + "%") + "</td>";
            }
        }
        tabla += "</tr>";
    }
    tabla += "</tbody>";

    return tabla;
}

document.getElementById("house-data").innerHTML = generaTabla();

function updateUI() {
    document.getElementById("house-data").innerHTML = generaTabla();
}

$("#FilterForm").on("change", updateUI);