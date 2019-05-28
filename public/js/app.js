const cotacoesForm = document.querySelector('form')
const mainMessage = document.querySelector('h3')

const price = document.querySelector('#price')
const price_open = document.querySelector('#price_open')
const day_high = document.querySelector('#day_high')
const day_low = document.querySelector('#day_low')




cotacoesForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const ativo = document.querySelector('input').value;

    fetch(`/cotacoes?ativo=${ativo}`).then((response) => {

        mainMessage.innerText = 'Buscando ...'
        price.innerText = ``
        price_open.innerText = ''
        day_high.innerText = ''
        day_low.innerText = ''

        response.json().then((data) => {
        console.log(data.name)
            if(data.name === undefined){
            mainMessage.innerText = 'Ocorreu um erro'
            price.innerText = `${data.message} código ${data.code}`
            } else {
                mainMessage.innerText = data.name;
                price.innerText = `Preço ${data.price}`
                price_open.innerText = `Abertura ${data.price_open}`
                day_high.innerText = `Alta do dia ${data.day_high}`
                day_low.innerText = `Baixa do dia ${data.day_low}`
            }
        })
    })
})