function quitarNulos(item) {
    if (item != null) {
        return item;
    } else {
        return "";
    }
}

function generaGlanceTabla() {

    var tabla = "\
			<thead>\
            <tr>\
            <th scope='col'>Party</th>\
            <th scope='col'>N&#176; of Reps</th>\
            <th scope='col'>% Voted w/ Party</th>\
            </tr>\
            </thead>\
            <tbody>\
			<tr>\
            <td>Democrats</td>\
            <td>" + statistics.number_of_democrats + "</td>\
            <td>" + statistics.average_votes_wich_party_pct_for_democrats + "</td>\
            </tr>\
            <tr>\
            <td>Republicans</td>\
            <td>" + statistics.number_of_republicans + "</td>\
            <td>" + statistics.average_votes_wich_party_pct_for_republicans + "</td>\
            </tr>\
            <tr>\
            <td>Independents</td>\
            <td>" + statistics.number_of_independents + "</td>\
            <td>" + statistics.average_votes_wich_party_pct_for_independents + "</td>\
            </tr>\
			<td>Total</td>\
            <td>" + statistics.total_number_of_members + "</td>\
            <td>" + statistics.total_average_votes_wich_party_pct + "</td>\
            </tr>\
			</tbody>";

    return tabla;
}

function generaLeastLoyalTabla() {

    var tabla = "";

    tabla += "<thead>\
            <tr>\
            <th scope='col'>Name</th>\
            <th scope='col'>N&#176; Party Votes</th>\
            <th scope='col'>% Party Votes</th>\
            </tr>\
            </thead>\
            <tbody>";
    for (var i = 0; i < statistics.least_loyal_bottom_ten_percent_of_party.length; i++) {
        tabla += "<tr>";
        for (var j = 0; j < 1; j++) {
            tabla += "<td><a href='" + quitarNulos(statistics.least_loyal_bottom_ten_percent_of_party[i].url) + "'>" + quitarNulos(statistics.least_loyal_bottom_ten_percent_of_party[i].first_name) + " " + quitarNulos(statistics.least_loyal_bottom_ten_percent_of_party[i].middle_name) + " " + quitarNulos(statistics.least_loyal_bottom_ten_percent_of_party[i].last_name) + "</a></td>\
                    <td>" + Math.round(((statistics.least_loyal_bottom_ten_percent_of_party[i].total_votes * statistics.least_loyal_bottom_ten_percent_of_party[i].votes_with_party_pct) / 100)) + "</td>\
                    <td>" + statistics.least_loyal_bottom_ten_percent_of_party[i].votes_with_party_pct + "</td>"
        }
        tabla += "</tr>";
    }
    tabla += "</tbody>";

    return tabla;
}

function generaMostLoyalTabla() {

    var tabla = "";

    tabla += "<thead>\
            <tr>\
            <th scope='col'>Name</th>\
            <th scope='col'>N&#176; Party Votes</th>\
            <th scope='col'>% Party Votes</th>\
            </tr>\
            </thead>\
            <tbody>";
    for (var i = 0; i < statistics.most_loyal_top_ten_percent_of_party.length; i++) {
        tabla += "<tr>";
        for (var j = 0; j < 1; j++) {
            tabla += "<td><a href='" + quitarNulos(statistics.most_loyal_top_ten_percent_of_party[i].url) + "'>" + quitarNulos(statistics.most_loyal_top_ten_percent_of_party[i].first_name) + " " + quitarNulos(statistics.most_loyal_top_ten_percent_of_party[i].middle_name) + " " + quitarNulos(statistics.most_loyal_top_ten_percent_of_party[i].last_name) + "</a></td>\
                    <td>" + Math.round(((statistics.most_loyal_top_ten_percent_of_party[i].total_votes * statistics.most_loyal_top_ten_percent_of_party[i].votes_with_party_pct) / 100)) + "</td>\
                    <td>" + statistics.most_loyal_top_ten_percent_of_party[i].votes_with_party_pct + "</td>"
        }
        tabla += "</tr>";
    }
    tabla += "</tbody>";

    return tabla;
}

function generaLeastEngagedTabla() {

    var tabla = "";

    tabla += "<thead>\
            <tr>\
            <th scope='col'>Name</th>\
            <th scope='col'>N&#176; Missed Votes</th>\
            <th scope='col'>% Missed</th>\
            </tr>\
            </thead>\
            <tbody>";
    for (var i = 0; i < statistics.least_engaged_bottom_ten_percent_attendance.length; i++) {
        tabla += "<tr>";
        for (var j = 0; j < 1; j++) {
            tabla += "<td><a href='" + quitarNulos(statistics.least_engaged_bottom_ten_percent_attendance[i].url) + "'>" + quitarNulos(statistics.least_engaged_bottom_ten_percent_attendance[i].first_name) + " " + quitarNulos(statistics.least_engaged_bottom_ten_percent_attendance[i].middle_name) + " " + quitarNulos(statistics.least_engaged_bottom_ten_percent_attendance[i].last_name) + "</a></td>\
                    <td>" + statistics.least_engaged_bottom_ten_percent_attendance[i].missed_votes + "</td>\
                    <td>" + statistics.least_engaged_bottom_ten_percent_attendance[i].missed_votes_pct + "</td>"
        }
        tabla += "</tr>";
    }
    tabla += "</tbody>";

    return tabla;
}

function generaMostEngagedTabla() {

    var tabla = "";

    tabla += "<thead>\
            <tr>\
            <th scope='col'>Name</th>\
            <th scope='col'>N&#176; Missed Votes</th>\
            <th scope='col'>% Missed</th>\
            </tr>\
            </thead>\
            <tbody>";
    for (var i = 0; i < statistics.most_engaged_top_ten_percent_attendance.length; i++) {
        tabla += "<tr>";
        for (var j = 0; j < 1; j++) {
            tabla += "<td><a href='" + quitarNulos(statistics.most_engaged_top_ten_percent_attendance[i].url) + "'>" + quitarNulos(statistics.most_engaged_top_ten_percent_attendance[i].first_name) + " " + quitarNulos(statistics.most_engaged_top_ten_percent_attendance[i].middle_name) + " " + quitarNulos(statistics.most_engaged_top_ten_percent_attendance[i].last_name) + "<a/></td>\
                    <td>" + statistics.most_engaged_top_ten_percent_attendance[i].missed_votes + "</td>\
                    <td>" + statistics.most_engaged_top_ten_percent_attendance[i].missed_votes_pct + "</td>"
        }
        tabla += "</tr>";
    }
    tabla += "</tbody>";

    return tabla;
}

if (document.getElementById("glance")) {
    document.getElementById("glance").innerHTML = generaGlanceTabla();
}

if (document.getElementById("least-loyal")) {
    document.getElementById("least-loyal").innerHTML = generaLeastLoyalTabla();
}

if (document.getElementById("most-loyal")) {
    document.getElementById("most-loyal").innerHTML = generaMostLoyalTabla();
}

if (document.getElementById("least-engaged")) {
    document.getElementById("least-engaged").innerHTML = generaLeastEngagedTabla();
}

if (document.getElementById("most-engaged")) {
    document.getElementById("most-engaged").innerHTML = generaMostEngagedTabla();
}