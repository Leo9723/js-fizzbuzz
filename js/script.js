for(let i = 1; i<=100; i++){
    let element = i

    if(i%3 == 0 && i%5 != 0){
        element = 'Frizz'
    }
    else if(i%5 == 0 && i%3 != 0){
        element = 'Buzz'
    }
    else if(i%5 == 0 && i%3 == 0){
        element ='FrizzBuzz'
    }
    else{
        element = i
    }

    console.log(element)
}