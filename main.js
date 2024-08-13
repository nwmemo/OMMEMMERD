const oggetti = ["Telefono", "Computer", "Tavolo", "Sedia", "Lampada","Libro", "Penna", "Quaderno", "Zaino", "Orologio",
    "Bicchiere", "Tazza", "Cuscino", "Televisore", "Frigorifero",
    "Forno", "Lavatrice", "Asciugacapelli", "Spazzolino", "Specchio",
    "Chiave", "Portafoglio", "Occhiali", "Borsa", "Scarpe"];
  
  const cibi = ["Pizza", "Pasta", "Lasagna", "Risotto", "Gelato",
    "Tiramisu", "Bruschetta", "Focaccia", "Polenta", "Arancini",
    "Cannoli", "Pesto", "Carbonara", "Ravioli", "Gnocchi",
    "Parmigiana", "Ossobuco", "Panettone", "Tortellini", "Zuppa di pesce",
    "Caprese", "Saltimbocca", "Bistecca alla Fiorentina", "Caponata", "Panzanella"];
  
  const mestieri = ["Ingegnere", "Insegnante", "Avvocato", "Architetto",
    "Cuoco", "Falegname", "Elettricista", "Idraulico", "Meccanico",
    "Infermiere", "Farmacista", "Giornalista", "Fotografo", "Musicista",
    "Attore", "Scrittore", "Pilota", "Poliziotto", "Pompiere",
    "Contabile", "Barista", "Commesso", "Giardiniere", "Veterinario"];
  
  const luoghi = ["Roma", "Milano", "Napoli", "Torino", "Palermo",
    "Genova", "Bologna", "Firenze", "Bari", "Catania",
    "Venezia", "Verona", "Messina", "Padova", "Trieste",
    "Taranto", "Brescia", "Parma", "Prato", "Modena",
    "Reggio Calabria", "Reggio Emilia", "Perugia", "Livorno", "Ravenna"];

let displayedCat = document.getElementById('selected');
const cat = localStorage.getItem('Category');
let homeButton = document.getElementById('home');

if(cat == 0){
    selected.innerHTML = "Cibi";
}else if(cat == 1){
    selected.innerHTML = "Mestieri";
}else if(cat == 2){
    selected.innerHTML = "Luoghi";
}else{
    selected.innerHTML = "Oggetti";
}

const numbPlayers = localStorage.getItem('sharedValue');
console.log(numbPlayers);
let word = "";

function generatore() {
    if(cat == 0){ 
       word = Math.floor(Math.random()*cibi.length);
       word = cibi[word];
       console.log(word);
       return word;
   }else if(cat == 1){
       word = Math.floor(Math.random()*mestieri.length);
       word = mestieri[word];
       console.log(word)
       return word;
   }else if(cat == 2){
       word = Math.floor(Math.random()*luoghi.length);
       word = luoghi[word];
       console.log(word)
       return word;
   }else if(cat == -1){
       word = Math.floor(Math.random()*oggetti.length);
       word = oggetti[word];
       console.log(word)
       return word;
   }
};
let extractedWord = word;

let btn = document.getElementById('btn');
let counter = 1;
let display = document.getElementById("display");
let twoShown = false;
let x = 0;



btn.addEventListener('click', function(){
    if(x <= numbPlayers){
         if(counter == 1){
            counter++;
            document.getElementById('title').innerHTML = "La vostra parola e': ";
            btn.innerText = "Premi per oscurare";
            x++;
            if(twoShown == true){
                display.innerText = word;
                
            }else {
                let coin =  Math.random();
                if (coin < 0.5){
                    display.innerText = word;

                }else{
                    display.innerText = "Omm e' mmerd";
                    btn.innerText = "Premi per oscurare";
                    twoShown = true;
                    x++;
                };
                
            }
        }else{
            document.getElementById('title').innerHTML = "Parola Nascosta";
            display.innerHTML = "Passa il telefono alla prossima persona";
            display.style.fontSize = "medium";
            btn.innerText = "Premi per mostrare"
            counter = 1; 
        }
}else{
    document.getElementById('title').innerHTML = "Buona Fortuna!";
    display.innerHTML = "Iniziate a farvi domande!";
}
    
})


homeButton.addEventListener('click', function() {
    window.location.href = 'index.html';
})



