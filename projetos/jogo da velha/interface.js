//alert("eu ganhei otario")
document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener('click', Handleclick);


    })

})
function Handleclick(event) {

    let square = event.target;
    let position = square.id;

    if (Handlemove(position)) {
        setTimeout(() => { alert("o ganhador foi você" + symbols) },10)}



        updateSquares()
    }
    function updateSquares() {
        let squares = document.querySelectorAll(".square");
        squares.forEach((square) => {
            let position = square.id;
            let symbols = board[position];
            if (symbols != '') { square.innerHTML = `<div class='${symbols}'></div>` }
        })}
       



    