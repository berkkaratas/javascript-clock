function name(){
     var name = prompt("Adınızı giriniz", "John Doe");
     var namedoc = document.getElementById("myName");
     namedoc.innerHTML = name;
}