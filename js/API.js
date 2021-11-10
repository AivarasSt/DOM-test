const urlBase = 'http://localhost:3000';

const getApartments = (success, failure) => {
    fetch(urlBase + '/apartment')
      .then(response => response.json())
      .then(success)
      .catch(failure);
}

const deleteApartment = (success, failure, id) => {
  fetch(urlBase + '/apartment/' + id , { method: 'DELETE' })
  .then(response => response.json())
  .then(success)
  .catch(failure);
}

const API = {
  getApartments,
  deleteApartment
};

API.getApartments(
  (duomenys) => console.log(duomenys),
  (klaida) => console.error(klaida))

// API.deleteApartment(
//   (duomenys) => console.log(duomenys),
//   (klaida) => console.error(klaida),
//   "103")


  