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

  wrapChild = element => {
    const wrapper = document.createElement('div');
    wrapper.className = 'col-12 col-sm-6 col-lg-4 col-xl-3 align-self-stretch';
    wrapper.append(element);
    return wrapper;
  }

  init = () => {
    this.state.loading = true;
    setTimeout(() => this.fetchApartments(), 1000)
    this.htmlElement = document.createElement('div');
    this.htmlElement.className = 'row g-3';
    this.render();
  }

  render = () => {
    const { loading, apartments } = this.state;
    if (loading) {
      this.htmlElement.innerHTML = '<div class="text-center"><img src="assets/loading.gif" /></div>';
    } else if (apartments.length > 0){
      this.htmlElement.innerHTML = '';
      const children = apartments
        .map(x => new ApartmentCardComponent(x))
        .map(x => x.htmlElement)
        .map(this.wrapChild);
      this.htmlElement.append(...children);
    } else {
      this.htmlElement.innerHTML = 'Deja, šiuo metu duomenų nėra';
    };
  }
}  