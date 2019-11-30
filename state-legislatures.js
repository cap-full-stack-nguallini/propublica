cadVariables = location.search.substring(1, location.search.length);
arrVariables = cadVariables.split("&");

for (i = 0; i < arrVariables.length; i++) {
    arrVariableActual = arrVariables[i].split("=");
    if (isNaN(parseFloat(arrVariableActual[1])))
        eval(arrVariableActual[0] + "='" + unescape(arrVariableActual[1]) + "';");
    else
        eval(arrVariableActual[0] + "=" + arrVariableActual[1] + ";");
}

function generaTabla() {

    var tabla = "";

    tabla += "<thead>\
            <tr>\
            <th scope='col'>Name</th>\
            <th scope='col'>Party</th>\
            <th scope='col'>Chamber</th>\
			<th scope='col'>State</th>\
            </tr>\
            </thead>\
            <tbody>";
    for (var i = 0; i < legislators.length; i++) {
        for (var k = 0; k < states.length; k++) {
            if (legislators[i].state === states[k].id) {
                stateId = states[k].id;
                stateName = states[k].name;
                if (legislators[i].chamber === "lower") {
                    chamberTitle = states[k].chambers.lower.title;
                } else if (legislators[i].chamber === "upper") {
                    chamberTitle = states[k].chambers.upper.title;
                }
            } else if (legislators[i].state === null) {
                chamberTitle = "";
                stateId = "";
                stateName = "";
            }
        }
        if (stateLegislatureSelected === stateId) {
            tabla += "<tr>";
            for (var j = 0; j < 1; j++) {
                tabla += "<td><a class='iframe' href='" + legislators[i].url + "'>" + legislators[i].full_name + "</a></td>\
                    <td>" + legislators[i].party + "</td>\
                    <td>" + chamberTitle + "</td>\
					<td>" + stateName + "</td>"
            }
            tabla += "</tr>";
        }
    }
    tabla += "</tbody>";
    return tabla;
}

document.getElementById("state-legislators-data").innerHTML = generaTabla();