class ApartmentGridComponent {
  constructor() {
    this.htmlElement = document.createElement('div');
    this.state = {
      apartments: []
    };
    this.init();
  }


  init = () => {
    this.htmlElement = document.createElement('div');
    this.render();
  }

  render = () => {
    if (this.state.apartments.length === 0) {
      this.htmlElement.innerHTML = `NĖRA DUOMENŲ`;
    } else {
      this.htmlElement.innerHTML = "<pre>" + JSON.stringify(this.state.apartments) + "</pre>";
    };
  }
}  