var stateLegislatureSelected;

function pasarVariables(pagina, nombres) {
    pagina += "?";
    nomVec = nombres.split(",");
    for (i = 0; i < nomVec.length; i++)
        pagina += nomVec[i] + "=" + escape(eval(nomVec[i])) + "&";
    pagina = pagina.substring(0, pagina.length - 1);
    location.href = pagina;
}

function updateUI() {
    stateLegislatureSelected = document.querySelector("#state_legislature_selected").value;
    pasarVariables("state-legislatures.html", "stateLegislatureSelected");
}

$("#FilterFormLegislatures").on("change", updateUI);