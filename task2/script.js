const consoleLog = document.querySelector('#consoleLog');
consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');


})


const output = document.querySelector('#Alert');
consoleLog.addEventListener('click', () => {
    alert('Позволяет вывести какую-либо информацию');
})

const prompt = document.querySelector('#prompt');
consoleLog.addEventListener('click', () => {
    alert('Показывает сообщение и запрашивает ввод текста от пользователя');
})
