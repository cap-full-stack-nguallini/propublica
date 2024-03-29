var app = new Vue({
    el: "#app",
    data: {
        number_of_democrats: numberOfDemocrats,
        number_of_republicans: numberOfRepublicans,
        number_of_independents: numberOfIndependents,
        total_number_of_members: totalNumberOfMembers,
        average_votes_wich_party_pct_for_democrats: avgVotesWithPartyForDemocrats,
        average_votes_wich_party_pct_for_republicans: avgVotesWithPartyForRepublicans,
        average_votes_wich_party_pct_for_independents: avgVotesWithPartyForlistIndependents,
        total_average_votes_wich_party_pct: totalAvgVotesWichPartyPct,
        least_loyal_bottom_ten_percent_of_party: leastLoyalBottomTenPercentOfParty,
        most_loyal_top_ten_percent_of_party: mostLoyalTopTenPercentOfParty,
        least_engaged_bottom_ten_percent_attendance: leastEngagedBottomTenPercentAttendance,
        most_engaged_top_ten_percent_attendance: mostEngagedTopTenPercentAttendance
    }
});