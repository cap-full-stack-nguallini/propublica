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

function getListTotalMembersCopy() {
    return listTotalMembers.slice();
}

function getFirstTenPercent(fullList, shortList) {
    for (var i = 0; i < Math.round(fullList.length / 10); i++) {
        shortList.push(fullList[i]);
    }
}

function evaluateEndMemberLoyal(fullList, shortList) {
    for (var i = 0; i < fullList.length; i++) {
        var endMemberShortList = shortList[Math.round(fullList.length / 10) - 1];
        if (fullList[Math.round(fullList.length / 10) + i].votes_with_party_pct === endMemberShortList.votes_with_party_pct) {
            shortList.push(fullList[Math.round(fullList.length / 10) + i]);
            endMemberShortList = fullList[Math.round(fullList.length / 10) + i];
        } else {
            break;
        }
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
var leastLoyalBottomTenPercentOfParty = [];

var leastLoyal = getListTotalMembersCopy();

leastLoyal.sort(function(a, b) { return (a.votes_with_party_pct - b.votes_with_party_pct) });

getFirstTenPercent(leastLoyal, leastLoyalBottomTenPercentOfParty);

evaluateEndMemberLoyal(leastLoyal, leastLoyalBottomTenPercentOfParty);