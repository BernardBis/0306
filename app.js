
/*
// przykład1
// w backandzie robimy require a w html robimy import
// czyli dwa sposoby importowania: import / require
const functionsBB = require("./functions");

functionsBB.helloWord();
functionsBB.add(1,2);
*/



//przykład2
/*
const http = require("http");

//1.serwer bedzie nasłuchiwał co strona kliencka zarequestuje
//2.w naszym przypadku otwarcie strony bez podawania requestu
//spowoduje juz przechwycenie i wypisanie komunikatu
//3.tylko odswierzenie strony czyli wbicie adresu jest zdarzeniem 
// ktore jest nasłuchiwane. Czyli request to jest wbity url

const handler = (request,responseBB) => {
// to sie odpala po wysłaniu przez klienta requestu
    console.log("sample message")

    // response.end wysyła tekst do klienta
    responseBB.end("Hello BB tu marina hell")
    // response.file wysyła plik
    //responseBB.file("....")

}

const server = http.createServer(handler);
const port = 3000;

server.listen(port, (err)=>{

    //przerywamy nasłucj jesli bedzie problem
    //ale nawet Marcin nie wiedział jak sprowokowac error
    if (err) { return console.error('Unable to connect the server: ', err)};        
    
    console.log(`Aplikacja działa na porcie ${port}`)    
    //console.log("Aplikacja działa na porcie ",port)


});

*/

/*
//przykład4
const expressBB = require("express");
const server = expressBB();
const port = 3000;

server.get("/", function(req,res){
    console.log("Aplikacja główna")
    res.send("strona główna")
})

server.get("/about", function(req,res){
    console.log("Aplikacja o nas")
    res.send("strona o nas")
})

server.get("/section/technology", function(req,res){
    console.log("Aplikacja technologiczna")    
    res.send("strona technologiczna")
})

server.listen(port, (err)=>{
    if (err) { return console.error('Unable to connect the server: ', err)};        
    console.log(`Aplikacja działa na porcie ${port}`)    
});
*/

//przykład5
const functions = require("./functions")
const expressBB = require("express");
const path = require("path");
const server = expressBB();
const port = process.env.PORT || 3000;


//szuka w podfolderze views pliki *.hbs //handlebars
server.set("view engine","hbs")
// przypisuje plikom hbs dla sciezki /assets to co jest realnie fizyczna sciezka
// a pliki hbs odwołuja sie do tego assets i wszystkiego ponizej
server.use("/assets",expressBB.static(path.join(__dirname,"./assets")));
//analogicznie js
server.use("/js",expressBB.static(path.join(__dirname,"./js")));

const x = 11;
server.get("/", function(req,res){
    res.render("index", 
    { pageTitle:"Lekcja Node", 
      title: functions.someText,

      /// odpalam funkcje somefunctions ale z warunkiem
      subtitle: x>10 ? functions.someFunction() : null
     })
})

server.get("/about", function(req,res){
    res.render("about")
})

server.listen(port, (err)=>{
    if (err) { return console.error('Unable to connect the server: ', err)};        
    console.log(`Aplikacja działa na porcie ${port}`)    
});
