// ## Exo 1

// ### Créer deux personnages du nom de François et Sergio
// ### Donnez leur à chacun une propriété panier (tableau) contenant tous deux des ingrédients différents du super marché, par exemple huile,tomate,pain etc..
// ### Rajouter à François la méthode derober, qui prend 2 aliments du panier de Sergio et les met dans son panier.

let francois = {
    tableau : ["huile", "betrave", "sex", "pisse"],
    derober(oui){
        for (let i = 0; i < oui.tableau.length-1; i++) {
            this.tableau.push(oui.tableau[i]);
            oui.tableau.splice(i,1);
            // i--;
        }
    }
}

let sergio = {
    tableau : ["tomate", "caviar", "dope", "lardons"],
}

francois.derober(sergio);
console.log(francois.tableau);
console.log(sergio.tableau);