// ## Exo 1

// ### Créer deux personnages du nom de François et Sergio
// ### Donnez leur à chacun une propriété panier (tableau) contenant tous deux des ingrédients différents du super marché, par exemple huile,tomate,pain etc..
// ### Rajouter à François la méthode derober, qui prend 2 aliments du panier de Sergio et les met dans son panier.

let francois = {
    nom : "François",
    tableau : ["Fraise", "Orange", "Surcre", "Gnôle"],
    derober(el1, el2) {
        el1 = sergio.tableau.indexOf(el1);
        this.tableau.push(sergio.tableau[el1]);
        sergio.tableau.splice(el1,1);
        el1 = sergio.tableau.indexOf(el2);
        this.tableau.push(sergio.tableau[el1]);
        sergio.tableau.splice(el1,1);
    }
}

let sergio = {
    nom : "Sergio",
    tableau : ["Necrarine", "Feuilles", "Thé", "Viandasse"],
}

francois.derober("Necrarine", "Thé")
console.log(francois.tableau);
console.log(sergio.tableau)