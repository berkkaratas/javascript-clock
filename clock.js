function name(){
     var name = prompt("Adınızı giriniz", "John Doe");
     var namedoc = document.getElementById("myName");
     namedoc.innerHTML = name;
}

function showTime(){
     let date = new Date().toLocaleString('tr-TR'); 
    document.getElementById('myClock').innerHTML=date;
    setTimeout(showTime, 1000);  
}

setInterval(showTime, 1000);
