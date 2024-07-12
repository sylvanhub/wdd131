
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
      templeName: "Cardston Alberta",
      location: "Cardston AB, Canada",
      dedicated: "1923, August, 26",
      area: 85000,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cardston-alberta/800x500/cardston-alberta-temple-exterior-1126230-wallpaper.jpg"
    },
    {
      templeName: "Trujillo Peru",
      location: "Trujillo, Peru",
      dedicated: "2015, Junio, 21",
      area: 37000,
      imageUrl:
        "https://www.churchofjesuschrist.org/imgs/d3314069b0111c411c5e21948f4d2d331a98eb3d/full/3840%2C/0/default"
    },
    
    {
      templeName: "Porto Alegre Brazil",
      location: "Porto Alegre, Rio Grande do Sul, Brazil",
      dedicated: "2000, December, 17",
      area: 83426,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/porto-alegre-brazil/400x250/porto-alegre-brazil-temple-lds-83426-high-res-print.jpg"
  }
  
  ];
  
  
  const nav = document.querySelector('#nav')
  const menuButton = document.querySelector('#menu');
  
  
  menuButton.addEventListener('click', () => {
    nav.classList.toggle('show');
    menuButton.classList.toggle('open');
  });
  
  
  const oldButton = document.querySelector("#oldButton");
  const newButton = document.querySelector("#newButton");
  const largeButton = document.querySelector("#largeButton");
  const smallButton = document.querySelector("#smallButton");
  const homeButton = document.querySelector("#homeButton");
  
  oldButton.addEventListener("click", () => {
    createTemplateCards(temples.filter(temple => convertToDate(temple.dedicated).getFullYear() < 1900));
  });
  
  newButton.addEventListener("click", () => {
    createTemplateCards(temples.filter(temple => convertToDate(temple.dedicated).getFullYear() > 2000));
  });
  
  largeButton.addEventListener("click", () => {
    createTemplateCards(temples.filter(temple => temple.area > 90000));
  });
  
  smallButton.addEventListener("click", () => {
    createTemplateCards(temples.filter(temple => temple.area < 10000));
  });
  
  homeButton.addEventListener("click", () => {
    createTemplateCards(temples);
  });
  
  
  
  createTemplateCards(temples);
  
  
  function createTemplateCards(temples) {
    const templeContainer = document.querySelector('.temples-container');
    templeContainer.innerHTML = "";
    temples.forEach((temple) => {
      const templeCard = createTemplateCard(temple);
      templeCard.classList.add("temple-card");
      templeContainer.appendChild(templeCard);
    });
  }
  
  function createTemplateCard(temple) {
    const card = document.createElement("figure");
    const h3 = document.createElement("h3");
    h3.textContent = temple.templeName;
    const img = document.createElement("img");
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("loading", "lazy");
    img.setAttribute("alt", temple.templeName);
    img.setAttribute("width", "220");
    img.setAttribute("height", "220");
    const location = document.createElement("p");
    const dedicated = document.createElement("p");
    const size = document.createElement("p");
    location.innerHTML = `<span class="card-label">Location: </span>${temple.location}`;
    dedicated.innerHTML = `<span class="card-label">Dedicated: </span>${temple.dedicated}`;
    size.innerHTML = `<span class="card-label">Size: </span>${temple.area} sq ft`;
    card.appendChild(h3);
    card.appendChild(img);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(size);
    return card
  }
  
  
  function convertToDate(dateAsString) {
    return new Date(dateAsString);
  }