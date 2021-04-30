// ## Exo 1

// ### Créer deux personnages du nom de François et Sergio
// ### Donnez leur à chacun une propriété panier (tableau) contenant tous deux des ingrédients différents du super marché, par exemple huile,tomate,pain etc..
// ### Rajouter à François la méthode derober, qui prend 2 aliments du panier de Sergio et les met dans son panier.

let Francois = {
    tableau : ["orange", "cereal","huile","croute"],
    derober(){
        elementSergio = this.tableau.push(Sergio.tableau[Math.floor(Math.random()*Sergio.tableau.length)]);
        Sergio.tableau.pop(elementSergio);
        element2Sergio = this.tableau.push(Sergio.tableau[Math.floor(Math.random()*Sergio.tableau.length)]);
        Sergio.tableau.pop(element2Sergio);
    }
}

let Sergio = {
    tableau : ["persil", "pain","fromage","bic"],
}

Francois.derober();
console.log(Francois);
console.log(Sergio)