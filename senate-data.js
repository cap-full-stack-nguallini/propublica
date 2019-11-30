function quitarNulos(item) {
    if (item != null) {
        return item;
    } else {
        return "";
    }
}

function generaTabla() {

    var tabla = "";

    tabla += "<thead>\
            <tr>\
            <th scope='col'>Senator</th>\
            <th scope='col'>Party</th>\
            <th scope='col'>State</th>\
            <th scope='col'>Seniority</th>\
            <th scope='col'>Votes</th>\
            </tr>\
            </thead>\
            <tbody>";
    for (var i = 0; i < data.results[0].members.length; i++) {
        tabla += "<tr>";
        for (var j = 0; j < 1; j++) {
            tabla += "<td><a href='" + quitarNulos(data.results[0].members[i].url) + "'>" + quitarNulos(data.results[0].members[i].first_name) + " " + quitarNulos(data.results[0].members[i].middle_name) + " " + quitarNulos(data.results[0].members[i].last_name) + "</a></td>\
                    <td>" + quitarNulos(data.results[0].members[i].party) + "</td>\
                    <td>" + quitarNulos(data.results[0].members[i].state) + "</td>\
                    <td>" + quitarNulos(data.results[0].members[i].seniority) + "</td>\
                    <td>" + quitarNulos(data.results[0].members[i].votes_with_party_pct + "%") + "</td>";
        }
        tabla += "</tr>";
    }
    tabla += "</tbody>";

    return tabla;
}

document.getElementById("senate-data").innerHTML = generaTabla();