// write js code here corresponding to index.html
// You should add submit event on the form



document.queryselector("form").addEvenListener("submit",masaiformFunction)

var masaiformarr=JSON.parse(localStorage.getItem("masaiformdata"))||[];

function masaiformFunction(){
    Event.preventDefault();
    var  masaiformobj={
        MatchNumber:Form .number.value,
        MatchteamA:Form.teamA.value,
        MatchteamB:Form.teamB.value,
        Matchdate:Form.AddMatch.value
    
    };
    masaiformFunction.push(masaiformobj);
    console.log(masaiformarr)
    localStorage.setItem("Matchdata",JSON.stringify(masaiformarr));
    window.location.href="matches.html"
}
