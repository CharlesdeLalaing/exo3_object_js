// ## Exo 1

// ### Créer deux personnages du nom de François et Sergio
// ### Donnez leur à chacun une propriété panier (tableau) contenant tous deux des ingrédients différents du super marché, par exemple huile,tomate,pain etc..
// ### Rajouter à François la méthode derober, qui prend 2 aliments du panier de Sergio et les met dans son panier.

// let francois = {
//     tableau : ["huile", "betrave", "sex", "pisse"],
//     derober(oui){
//         for (let i = 0; i < oui.tableau.length-1; i++) {
//             this.tableau.push(oui.tableau[i]);
//             oui.tableau.splice(i,1);
//             // i--;
//         }
//     }
// }

// let sergio = {
//     tableau : ["tomate", "caviar", "dope", "lardons"],
// }

// francois.derober(sergio);
// console.log(francois.tableau);
// console.log(sergio.tableau);

let francois = {
    nom : "Francois",
    panier : ["huitres", "caviar", "champagne", "citron"],
    derober(victime){
        let x=0;
        while (x < 2) {
            alert(`${victime.nom} a ${victime.panier} dans son panier.`);
            i = victime.panier.indexOf(prompt(`tu veux oik?`));
            this.panier.push(victime.panier[i]);
            victime.panier.splice(i,1);
            x++
        }
        alert(`${victime.panier}`)
    }
}
let sergio = {
    nom : "sergio",
    panier : ["chaud", "froid", "this", "that"],
}

francois.derober(sergio);
console.log(francois.panier);
console.log(sergio.panier);