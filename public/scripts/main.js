import Modal from './modal.js'

const modal = Modal()

//pegar todos os botões que existem com a classe check
const checkButton = document.querySelectorAll(".actions a.check")

checkButton.forEach(button => {
    //adiciona a escuta
    button.addEventListener("click", event => {
        //abrir o modal
        modal.open()
    })
})

const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
   button.addEventListener ("click", event => {
        modal.open()
   })
})
