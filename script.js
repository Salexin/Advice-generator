const adviceId = document.querySelector('#AdviceNum');
const adviceText = document.querySelector('#Advice');
const btn = document.querySelector('#btn');
function getadvice(){
fetch ('https://api.adviceslip.com/advice').then(response => {
    return response.json()
}).then(adviceData =>
    {
        const adviceNumber = adviceData.slip.id;
        const advicetxt = adviceData.slip.advice;

        adviceId.textContent = adviceNumber;
        adviceText.innerHTML = `<p>${advicetxt}</p>`;
    }).catch(error =>
        {
            console.log(error);
        })
    }
    btn.addEventListener('click', function(){
        getadvice();
    })