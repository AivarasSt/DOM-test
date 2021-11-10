class ApartmentGridComponent {
  constructor() {
    this.htmlElement = document.createElement('div');
    this.state = {
      apartments: [],
      loading: false
    };
    this.init();
  }


  fetchApartments = () => {
    this.state.loading = true;
    API.getApartments(this.saveApartments, this.showError);
  }

  saveApartments = (apartments) => {
    this.state.apartments = apartments;
    this.state.loading = false;
    this.render();
  }

  showError = error => console.error(error);


  init = () => {
    this.state.loading = true;
    this.fetchApartments();
    this.htmlElement = document.createElement('div');
    this.render();
  }

  render = () => {
    const { loading } = this.state;
    if (loading) {
      this.htmlElement.innerHTML = `siunčiama...`;
    } else {
      this.htmlElement.innerHTML = "Parsiųsta!";
    };
  }
}  