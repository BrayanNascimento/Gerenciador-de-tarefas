// seleção de elementos

const GerenciadorForm = document.querySelector('#Gerenciador-form')
const GerenciadorInput = document.querySelector('#Gerenciador-input')
const GerenciadorList = document.querySelector('#Gerenciador-list')
const EditForm = document.querySelector('#edit-form')
const EditInput = document.querySelector('#edit-input')
const cancelEditBtn = document.querySelector('#cancel-edit-btn')

// funções
// fun recebe os parm o texto dos imput e cria o "html resposta"
const saveGerenciador = (text, done = 0, save = 1) => {
  const Gerenciador = document.createElement('div') // criando as div
  Gerenciador.classList.add('Gerenciador') // add class na div

  const gerenciadorTitle = document.createElement('h3')
  gerenciadorTitle.innerText = text // texto que recebo como param da fun
  Gerenciador.appendChild(gerenciadorTitle) // colocar na div

  const feitoBtn = document.createElement('button') // criando btn
  feitoBtn.classList.add('finish-gerenciador') // add class no btn
  feitoBtn.innerHTML = '<i class="fa-solid fa-check"></i>' // add o icone de feito
  Gerenciador.appendChild(feitoBtn)

  const editBtn = document.createElement('button')
  editBtn.classList.add('edit-gerenciador')
  editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
  Gerenciador.appendChild(editBtn)

  const deleteBtn = document.createElement('button')
  deleteBtn.classList.add('remove-gerenciador')
  deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
  Gerenciador.appendChild(deleteBtn)

  GerenciadorList.appendChild(Gerenciador)

  GerenciadorInput.value = '' // limpar o input quando terminar de digitar
}

// eventos

GerenciadorForm.addEventListener('submit', e => {
  // Quando enviar o form chamar a função
  // preven faz com que o form não seja enviado para o back quando precionar o btn
  e.preventDefault()
  //console.log('enviou')

  // armazenar o valor do input em uma var
  const inputValue = GerenciadorInput.value
  // validar
  if (inputValue) {
    // enviar o valor para a fun
    saveGerenciador(inputValue)
  }
})
