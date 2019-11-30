var listDemocrats = [];
var listRepublicans = [];
var listIndependents = [];

for (var i = 0; i < data.results[0].members.length; i++) {
    switch (data.results[0].members[i].party) {
        case "D":
            listDemocrats.push(data.results[0].members[i]);
            break;
        case "R":
            listRepublicans.push(data.results[0].members[i]);
            break;
        case "I":
            listIndependents.push(data.results[0].members[i]);
    }
}

var listTotalMembers = listDemocrats.concat(listRepublicans, listIndependents);

function getNumberOfMembers(list) {
    return list.length;
}

function calcAvgVotesWithParty(list) {
    var sum = 0;
    var avg = 0;

    if (list.length === 0) {
        return 0;
    } else {
        for (var i = 0; i < list.length; i++) {
            sum += list[i].votes_with_party_pct;
        }
        avg = sum / list.length;
        return avg.toFixed(2);
    }

}

var numberOfDemocrats = getNumberOfMembers(listDemocrats);
var numberOfRepublicans = getNumberOfMembers(listRepublicans);
var numberOfIndependents = getNumberOfMembers(listIndependents);
var totalNumberOfMembers = getNumberOfMembers(listTotalMembers);
var avgVotesWithPartyForDemocrats = calcAvgVotesWithParty(listDemocrats);
var avgVotesWithPartyForRepublicans = calcAvgVotesWithParty(listRepublicans);
var avgVotesWithPartyForlistIndependents = calcAvgVotesWithParty(listIndependents);
var totalAvgVotesWichPartyPct = calcAvgVotesWithParty(listTotalMembers);