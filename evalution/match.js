// write js code here corresponding to matches.html

var masaiformarr=JSON.parse(localStorage.getItem("Matchdata"));
console.log(masaiformarr);
displaydata(Masaiformarr);

var favouritesarr=JSON.parse(localStorage.getItem("favourite"))||[];
Data.forEach(function(element) {
    var tr=document.createElement("tr");
    var td1=document.createElement("td");
    td1.innerText=element.MatchNumber;
    var td2=document.createElement("td");
    td2.innerText=element.MatchTeamA;
    var td3=document.createElement("td");
    td3.innerText=element.MatchTeamB;
    var td4=document.createElement.MatchDate;
    td4.innerText=element.MatchDate("td");

    // var td5=document.createElement("td");
    // td5.innerText="Favourite";
    // td5.style.color="red",
    // td5.style.cursor="pointer",
    // td5.addEventListener("click",function(){
    //     MPLFunction(element)
    
    tr.append(td1,td2,td3,td4);
    document.querySelector("tbody").append(tr);
    })  
// });
function MasaiformFunction(element){
    Matchesarr.push(element)
    localStorage.setItem("favourite.arr",JSON.stringify(favouritesarr));
}