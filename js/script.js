let container = document.getElementById('container')

let number = prompt('inserisci un numero')

for(let i = 1; i<=number; i++){
    let element = i

    if(i%3 == 0 && i%5 != 0){
        element = `<div class="box box-green">Frizz</div>`;
    }
    else if(i%5 == 0 && i%3 != 0){
        element = `<div class="box box-yellow">Buzz</div>`;
    }
    else if(i%5 == 0 && i%3 == 0){
        element = `<div class="box box-red">FrizzBuzz</div>`;
    }
    else{
        element = `<div class="box box-blue">${i}</div>`;
    }

    console.log(element)

    container.innerHTML += element
}