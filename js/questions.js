(function (){
    const titleQuestion = [...document.querySelectorAll('.questions__title')];// ...  tres puntos para convertirlo en array.

    titleQuestion.forEach(question =>{
       question.addEventListener('click', ()=>{
           let height = 0;
           let answer = question.nextElementSibling;

           //Para el padding--add
           let addPadding = question.parentElement.parentElement;
           addPadding.classList.toggle('.questions__padding--add');

           //Para rotar flecha
           question.children[0].classList.toggle('questions__arrow--rotate');

           if(answer.clientHeight === 0){
               height = answer.scrollHeight;//Para mostrar alto minimo.
           }
           answer.style.height = `${height}px`;
       })
    });
})();