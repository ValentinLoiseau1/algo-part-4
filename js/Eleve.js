class Eleve {
    constructor (n, p, c) {
        this.name=n;
        this.firstname=p;
        this.course=c;
        this.notes={
            maths: [], 
            algorithmique: [], 
            javascript: []};
    }

    bonjour = function(){
    
        alert(`Bonjour, je suis ${this.firstname} ${this.name} en classe ${this.course} !`);

    }

    addNoteAlgo(n) {
        this.notes.algorithmique.push(n);
    }

    //fonction qui ajoute la note dans la matiére souhaiter
    addNote (matiere, note){
        this.notes[matiere].push(note);
    }

}

function randomNumber() {

    /* Math.floor() arrondie au nombre entier le plus proche, 
    Math.random()*100 fait un numéro aléatoire *20 parcequ'il commence intialement de 0 a 1. */
    return Math.floor(Math.random()*20);
    
}

