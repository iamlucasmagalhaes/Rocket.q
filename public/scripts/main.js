import Modal from './modal.js'

const modal = Modal()
let checkState = true

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//pegar todos os botões que existem com a classe check
const checkButton = document.querySelectorAll(".actions a.check")

checkButton.forEach(button => {
    button.addEventListener("click", (event) => {
        checkState = !checkState;  // Inverte o valor de check a cada clique
        handleClick(event, checkState);
    });
});

const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
   button.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick(event, check){
    modalTitle.innerHTML = check ? "Excluir essa pergunta" : "Marcar como lido"
    modalDescription.innerHTML = check ? "Tem certeza que deseja excluir essa pergunta?" : "Tem certeza que deseja marcar como lida essa pergunta?"
    //abrir modal
    modal.open()
}
