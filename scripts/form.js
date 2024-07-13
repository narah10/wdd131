let year = document.querySelector('#currentyear')
let lastModified = document.querySelector('#lastModified')
let today = new Date();
year.innerHTML = today.getFullYear()
console.log(today)

lastModified.innerHTML = document.lastModified

document.addEventListener('DOMContentLoaded', () => {
    const productOptions = document.getElementById('productOptions');
    const products = [
        {
            id: 'fc-1888',
            name: 'flux capacitor',
            avgRating: 4.5
        },
        {
            id: 'fc-2050',
            name: 'power laces',
            avgRating: 4.7
        },
        {
            id: 'fs-1987',
            name: 'time circuits',
            avgRating: 3.5
        },
        {
            id: 'ac-2000',
            name: 'low voltage reactor',
            avgRating: 3.9
        },
        {
            id: 'jj-1969',
            name: 'warp equalizer',
            avgRating: 5.0
        }
    ];

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productOptions.appendChild(option);
    });

});

let reviewCounter = Number(window.localStorage.getItem('reviewCounter')) || 0;

const reviewForm = document.querySelector('.wf1');
if (reviewForm) {
    reviewForm.addEventListener('submit', (event) => {
        if (reviewCounter === 0) {
            reviewCounter = 1; 
        } else {
            reviewCounter += 1; 
        }

        localStorage.setItem('reviewCounter', reviewCounter.toString());
        console.log('Review counter updated:', reviewCounter);
    });
} else {
    console.error('Form with id "reviewForm" not found.');
}

