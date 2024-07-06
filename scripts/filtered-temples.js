let year = document.querySelector('#currentyear')
let lastModified = document.querySelector('#lastModified')
let today = new Date();
year.innerHTML = today.getFullYear()
console.log(today)

lastModified.innerHTML = document.lastModified

/* Menu */
const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('ul')

hamburger.addEventListener('click', mobileMenu)

function mobileMenu(){
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
}

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Logan Utah Temple",
        location: "Logan, Utah, United States",
        dedicated: "1884, May, 17",
        area: 115507,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/logan-utah/400x250/logan-temple-768087-wallpaper.jpg"
      },
    {
    templeName: "Cedar City Utah Temple",
    location: "Cedar City, Utah, United States",
    dedicated: "2017, December, 10",
    area: 42657,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cedar-city-utah/400x225/Cedar-City-1978603.jpg"
    },
    {
    templeName: "Manti Utah Temple",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-utah-temple-night-1075642-wallpaper.jpg"
    },
  ];



const templeList = document.querySelector(".temples-list") 

const home = document.querySelector("#home")
const oldTemples = document.querySelector('#old')
const newTemples = document.querySelector('#new')
const largeTemples = document.querySelector('#large')
const smallTemples = document.querySelector('#small')

oldTemples.addEventListener('click', () => {
    const olderTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(',')[0], 10)
        return year < 1900
    })
    console.log(olderTemples)
    createTempleCard(olderTemples)
})

home.addEventListener('click', () => {
    createTempleCard(temples)
})


newTemples.addEventListener('click', () => {
    const newerTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(',')[0], 10)
        return year > 2000;
    });
    createTempleCard(newerTemples)
})

largeTemples.addEventListener('click', () => {
    const largerTemples = temples.filter(temple => {
        const size = temple.area
        return size > 90000;
    })
    createTempleCard(largerTemples)
})

smallTemples.addEventListener('click', () => {
    const smallerTemples = temples.filter(temple => {
        const size = temple.area
        return size > 100000;
    })
    createTempleCard(smallerTemples)
})



function createTempleCard(filteredTemples) {
    templeList.innerHTML = '';
    filteredTemples.forEach(temple => {
        const templeCard = document.createElement('div')
        templeCard.className = 'temple-card'
    
        const templeName = document.createElement('h3')
        templeName.textContent = temple.templeName
        templeCard.appendChild(templeName)
    
        const templeText = document.createElement('div')
        templeText.className = 'temple-text'
    
        const templeLocation = document.createElement('p')
        templeLocation.textContent = `Location: ${temple.location}`
        templeText.appendChild(templeLocation)
    
        const templeDedicated = document.createElement('p')
        templeDedicated.textContent = `Dedicated: ${temple.dedicated}`
        templeText.appendChild(templeDedicated)
    
        const templeArea = document.createElement('p')
        templeArea.textContent = `Size: ${temple.area} sq ft`
        templeText.appendChild(templeArea)
        
        templeCard.appendChild(templeText)
    
        const templeImage = document.createElement('img')
        templeImage.src = temple.imageUrl
        templeImage.alt = `The beautiful ${temple.templeName}`
        templeImage.loading = 'lazy'
        templeCard.appendChild(templeImage)
    
        
        templeList.appendChild(templeCard)
    })
}

createTempleCard(temples);
