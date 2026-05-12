function handle()
{
    let inputs = document.querySelectorAll("input");
    let input_values = [];
    for (let i = 0; i < inputs.length; i++) {
        input_values.push(inputs[i].value);
    }
    alert("Вы вошли в аккаунт")
}
let button = document.querySelector('#log');
button.addEventListener('click', handle)