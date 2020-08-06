// Procurar o botão
document.querySelector("#add-time")
// Quando clicar no botão
.addEventListener('click', cloneField)

// Executar uma ação
function cloneField(){
    // Duplicar os campos. Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    // Node se refere a tags HTML (DOME)

    // limpar os campos. quais campos?
    const fields = newFieldContainer.querySelectorAll('input')

    // para cada campo -> limpar os campos
    fields.forEach(function(field) {
        field.value = ""
    })
    
    // Colocar na página: Onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
    