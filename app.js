
const usedCars = [
    {
      image: "images/toyota-camry.jpg",
      year: 2018,
      make: "Toyota",
      model: "Camry",
      mileage: 30000,
      price: 18000,
      color: "Silver",
      gasMileage: "25 mpg city, 35 mpg highway",
    },
    {
      image: "images/honda-civic.jpg",
      year: 2016,
      make: "Honda",
      model: "Civic",
      mileage: 45000,
      price: 14000,
      color: "White",
      gasMileage: "30 mpg city, 40 mpg highway",
    },
    {
      image: "images/ford-fusion.jpg",
      year: 2017,
      make: "Ford",
      model: "Fusion",
      mileage: 35000,
      price: 16000,
      color: "Black",
      gasMileage: "28 mpg city, 38 mpg highway",
    },
    {
      image: "images/chevy-malibu.jpg",
      year: 2015,
      make: "Chevrolet",
      model: "Malibu",
      mileage: 50000,
      price: 12000,
      color: "Red",
      gasMileage: "25 mpg city, 37 mpg highway",
    },
    {
      image: "images/hyundai-elantra.jpeg",
      year: 2020,
      make: "Hyundai",
      model: "Elantra",
      mileage: 22000,
      price: 16000,
      color: "Silver",
      gasMileage: "30 mpg city, 41 mpg highway",
    },
    {
      image: "images/subaru-outback.jpg",
      year: 2014,
      make: "Subaru",
      model: "Outback",
      mileage: 60000,
      price: 14000,
      color: "Green",
      gasMileage: "22 mpg city, 30 mpg highway",
    },
    {
      image: "images/tesla-modelS.jpg",
      year: 2019,
      make: "Tesla",
      model: "Model S",
      mileage: 18000,
      price: 55000,
      color: "Black",
      gasMileage: "Electric (370 miles per charge)",
    },
    {
      image: "images/porsche-cayenne.jpg",
      year: 2020,
      make: "Porsche",
      model: "Cayenne",
      mileage: 22000,
      price: 68000,
      color: "White",
      gasMileage: "20 mpg city, 26 mpg highway",
    },
    {
      image: "images/bmw-5series.jpg",
      year: 2016,
      make: "BMW",
      model: "5 Series",
      mileage: 32000,
      price: 27000,
      color: "Black",
      gasMileage: "23 mpg city, 34 mpg highway",
    },
    {
      image: "images/lexus-es.jpg",
      year: 2017,
      make: "Lexus",
      model: "ES",
      mileage: 29000,
      price: 26000,
      color: "White",
      gasMileage: "21 mpg city, 30 mpg highway",
    },
    {
      image:"images/kia-sorrento.jpg",
      year: 2018,
      make: "Kia",
      model: "Sorento",
      mileage: 28000,
      price: 17000,
      color: "White",
      gasMileage: "22 mpg city, 29 mpg highway",
    },
    {
      image: "images/dodge-challenger.jpg",
      year: 2015,
      make: "Dodge",
      model: "Challenger",
      mileage: 30000,
      price: 24000,
      color: "Black",
      gasMileage: "19 mpg city, 30 mpg highway",
    }
];


function resetFilters() {
  document.getElementById("minYear").value = "";
  document.getElementById("maxYear").value = "";
  document.getElementById("make").value = "all";
  document.getElementById("maxMileage").value = "";
  document.getElementById("minPrice").value = "";
  document.getElementById("maxPrice").value = "";
  document.getElementById("color").value = "all";

  filteredCars = [...usedCars];
  displayCars(filteredCars);
}

function applyFilters() {
  const minYear = document.getElementById("minYear").value;
  const maxYear = document.getElementById("maxYear").value;
  const make = document.getElementById("make").value;
  const maxMileage = document.getElementById("maxMileage").value;
  const minPrice = document.getElementById("minPrice").value;
  const maxPrice = document.getElementById("maxPrice").value;
  const color = document.getElementById("color").value;

  const filteredCars = usedCars.filter((car) => {
    return (
      (minYear ? car.year >= minYear : true) &&
      (maxYear ? car.year <= maxYear : true) &&
      (make !== "all" ? car.make === make : true) &&
      (maxMileage ? car.mileage <= maxMileage : true) &&
      (minPrice ? car.price >= minPrice : true) &&
      (maxPrice ? car.price <= maxPrice : true) &&
      (color !== "all" ? car.color === color : true)
    );
  });

  displayCars(filteredCars);
}

function displayCars(cars) {
  const carListings = document.getElementById("carListings");
  carListings.innerHTML = "";

  if (cars.length === 0) {
    const noCarsMessage = document.createElement("p");
    noCarsMessage.className = "noCarsMessage";
    noCarsMessage.textContent =
      "Sorry there are no cars that match your search";
    carListings.appendChild(noCarsMessage);
    return;
  }

  let row;
  cars.forEach((car, index) => {
    if (index % 3 === 0) {
      row = document.createElement("div");
      row.className = "row";
      carListings.appendChild(row);
  }
    const carCard = document.createElement("div");
    carCard.className = "carCard";
    carCard.innerHTML = `
        <img src="${car.image}" height=250px width=300px>
        <h3 class="carTitle">${car.year} ${car.make} ${car.model}</h3>
        <p class="carDetails">Mileage: ${car.mileage}</p>
        <p class="carDetails">Price: $${car.price}</p>
        <p class="carDetails">Color: ${car.color}</p>
        <p class="carDetails">Gas Mileage: ${car.gasMileage}</p>
    `;
    row.appendChild(carCard);
  });
}

function openModal(index) {
  const car = usedCars[index];
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close" onclick="closeModal()">&times;</span>
      <img src="${car.image}" height=250px width=300px>
      <h3 class="carTitle">${car.year} ${car.make} ${car.model}</h3>
      <p class="carDetails">Mileage: ${car.mileage}</p>
      <p class="carDetails">Price: $${car.price}</p>
      <p class="carDetails">Color: ${car.color}</p>
      <p class="carDetails">Gas Mileage: ${car.gasMileage}</p>
    </div>
  `;
  document.body.appendChild(modal);
  window.onclick = function (event) {
    if (event.target === modal) {
      closeModal();
    }
  };
}

function closeModal() {
  const modal = document.querySelector(".modal");
  if (modal) {
    modal.remove();
  }
}

displayCars(usedCars);