var friutsweater1 = {
  brand: "Friut",
  clothingType: "Sweaters",
  price: 32,
  element: document.getElementById("img-1")
}

var cekasweater1 = {
  brand: "Ceka",
  clothingType: "Sweaters",
  price: 49,
  element: document.getElementById("img-2")
}

var suoptop1 = {
  brand: "Suop",
  clothingType: "Tops",
  price: 46,
  element: document.getElementById("img-3")
}

var cekasweater2 = {
  brand: "Ceka",
  clothingType: "Sweaters",
  price: 79,
  element: document.getElementById("img-4")
}

var cekatop1 = {
  brand: "Ceka",
  clothingType: "Tops",
  price: 36,
  element: document.getElementById("img-5")
}

var fruitpant1 = {
  brand: "Friut",
  clothingType: "Pants",
  price: 68,
  element: document.getElementById("img-6")
}

var suoptop3 = {
  brand: "Suop",
  clothingType: "Tops",
  price: 42,
  element: document.getElementById("img-7")
}

var cekasweater3 = {
  brand: "Ceka",
  clothingType: "Sweater",
  price: 72,
  element: document.getElementById("img-8")
}

var cekasweater4 = {
  brand: "Ceka",
  clothingType: "Sweaters",
  price: 119,
  element: document.getElementById("img-9")
}

var brand = "null";
var clothingType = "null";
var ascending = "null";

window.onload = function() {
  document.getElementById('brand-check1').onclick = function() {
    setBrand('Friut');
  }

  document.getElementById('brand-check2').onclick = function() {
    setBrand('Suop');
  }

  document.getElementById('brand-check3').onclick = function() {
    setBrand('Ceka');
  }

  document.getElementById('type-check1').onclick = function() {
    setClothingType('Jackets');
  }

  document.getElementById('type-check2').onclick = function() {
    setClothingType('Pants');
  }

  document.getElementById('type-check3').onclick = function() {
    setClothingType('Sweaters');
  }

  document.getElementById('type-check4').onclick = function() {
    setClothingType('Skirts');
  }

  document.getElementById('type-check5').onclick = function() {
    setClothingType('Tops');
  }
}

function setBrand(b) {
  if (brand === b) {
    brand = "null";
  } else {
    brand = b;
  }

  filterAll()
}

function setClothingType(c) {
  if (clothingType === c) {
    clothingType = "null";
  } else {
    clothingType = c;
  }

  filterAll()
}

function setAscending(a) {
  if (ascending === a) {
    ascending = "null";
  } else {
    ascending = a;
  }

  filterAll()
}

function filterByBrand(elements, brand) {
  var results = []
  for (var cloth in elements) {
    if (elements[cloth].brand === brand) {
      results.push(elements[cloth])
    }
  }
  return results
}

function filterByClothingType(elements, type) {
  var results = []
  for (var cloth in elements) {
    if (elements[cloth].clothingType === type) {
      results.push(elements[cloth])
    }
  }
  return results
}

function sortByPrice(elements, ascending) {
  elements.sort(function(cloth1, cloth2) {
    if (ascending) {
      return cloth1.price - cloth2.price;
    } else {
      return cloth2.price - cloth1.price;
    }
  });
}

var clothes = [friutsweater1, cekasweater1, suoptop1, cekasweater2, cekatop1, fruitpant1, suoptop3, cekasweater3, cekasweater4];

function filterAll() {
  var results = clothes.slice()
  if (brand !== "null") {
    console.log("INSIDE!!!");
    results = filterByBrand(results, brand);
  }

  if (clothingType !== "null") {
    results = filterByClothingType(results, clothingType);
  }

  if (ascending !== "null") {
    results = sortByPrice(results, ascending);
  }

  showResults(results)
}

function showResults(results) {
  //console.log(clothes);
  for (var clothIndex in clothes) {
    clothes[clothIndex].element.classList.add("hide")
  }

  for (var clothIndex in results) {
    results[clothIndex].element.classList.remove("hide")
  }
}
