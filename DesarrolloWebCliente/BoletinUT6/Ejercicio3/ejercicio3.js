document.addEventListener('DOMContentLoaded', funcionDom)

function funcionDom(){
    let carList = document.getElementById('carList')
    let cars = document.getElementsByTagName('li')

    carList.style.listStyleType='square';

    let carStart = document.createElement('li')
    carStart.textContent = 'Tesla';
    carList.insertBefore(carStart, cars[0]);

    let carEnd = document.createElement('li');
    carEnd.textContent = 'Toyota';
    carList.appendChild(carEnd);

    let carMiddle = document.createElement('li')
    carMiddle.textContent = 'Chevrolet'
    carList.insertBefore(carMiddle, cars[2])

    let carBeforeBMW = document.createElement('li');
    carBeforeBMW.textContent = 'Honda';

    let carAfterBMW = document.createElement('li');
    carAfterBMW.textContent = 'Nissan';

    for (let index = 0; index < cars.length; index++) {
        if (cars[index].textContent == 'BMW') {
            // Insertar antes de "BMW"
            carList.insertBefore(carBeforeBMW, cars[index])

            //Insertar despues de "BMW"
            carList.insertBefore(carAfterBMW, cars[index].nextSibling);
        }
    }
    
}