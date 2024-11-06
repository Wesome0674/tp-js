const nuancier = document.getElementById("nuancier");
const add = document.getElementById("add");
const del = document.getElementById("delete");
let squareNumber = 1;


function updateSquares() {
    // Vider l'élément nuancier avant de rajouter les nouveaux carrés
    nuancier.innerHTML = "";

    for (let i = 0; i < squareNumber; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.backgroundColor = "red";
        nuancier.appendChild(square);
    }
}


add.addEventListener("click", (e) => {
    e.preventDefault()
    squareNumber++;
    updateSquares();  
});

del.addEventListener("click", (e) => {
    e.preventDefault()
    if (squareNumber > 0) {
        squareNumber--;
        updateSquares();  
    }
});


updateSquares();

console.log(squareNumber); 