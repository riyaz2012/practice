// write js code here corresponding to favourites.html

var favouritesarr=JSON.parse(localStorage.getItem("favourite"));
displaydata(favouritesarr);
function displaydata(data);
data.forEach(function(element){
     
     
    var tr=document.createElement("tr");
    var td1=document.createElement("td1");
    td1.innerText=element.MatchNumber;
    var td2=document.createElement("td");
    td2.innerText=element.MatchTeamA;
    var td3=document.createElement("td");
    td3.innerText=element.MatchTeamB;
    var td4=document.createElement.MatchDate;
    td4.innerText=element.MatchDate("td");

    tr.append(td1,td2,td3,td4);
    document.querySelector("tbody").append(tr);

});

function favouritefunction(element){
    favouritesarr.push(element)
    localStorage.setItem("favourite.arr",json.stringify (favouritesarr));
}

 
