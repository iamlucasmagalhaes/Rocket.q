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
    event.preventDefault()
    const text = check ? "Excluir" : "Marcar como lida"
    const slug = check ? "delete" : "check"
    const roomId = document.querySelector("#room-id").dataset.id
    const questionId = event.target.dataset.id

    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/room/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta`
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
    check ? modalButton.classList.add("red") : modalButton.classList.remove("red")

    //abrir modal
    modal.open()
}
