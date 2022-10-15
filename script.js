// Variáveis e seleção de elementos.
const adviceId = document.querySelector("#adviceId")
const adviceText = document.querySelector("#adviceText");
const button = document.querySelector("#randomBtn");

//Funções
const getAdvice = async(advice) => {

    const adviceApi = "https://api.adviceslip.com/advice"

        const res = await fetch(adviceApi);
        const data = res.json();

        return data
};

const showRandomAdvice = async(advice) => {
    const data = await getAdvice(advice);

    adviceId.innerText = data.slip.id
    adviceText.innerText = data.slip.advice
}


//Eventos
button.addEventListener('click', (e) => {
    e.preventDefault();

    const advice = adviceText;

    showRandomAdvice(advice);
});
