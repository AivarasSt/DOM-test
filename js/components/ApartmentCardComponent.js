class ApartmentCardComponent {
  
  static USD_EUR = 0.86387687

  constructor(props) {
    this.props = props;
    this.htmlElement = document.createElement('article');
    this.init();
  }
  
  init = () => {
    const { id, type, owner, roomCount, square, address, price, imgSrc } = this.props;
    const { fullname, email, phone } = owner;
    const { city, country, street, number} = address;
    const { amount, currency } = price;
    const fullAddress = `${street} ${number}, ${city}, ${country}`

    this.htmlElement.className = "card shadow-sm";
    this.htmlElement.innerHTML = `  
    <img class="card-img-top" src="${imgSrc}" style="height:180px; object-fit: cover;">
    <div class="px-3 pb-3">
      <p class="type text-muted my-2"></p>
      <div class="d-flex justify-content-between">
        <div class="d-flex flex-column">
          <p class="fw-bold m-0">${fullAddress}</p>
          <p class="text-muted">${roomCount} k. | ${square} m²</p>
        </div>
      </div>
      <ul class = "list-unstyled">
        <strong>Kontaktai:</strong>
        <li>${fullname}</li>
        <li>${email}</li>
        <li>${phone}</li>
      </ul>
      <div class="d-flex justify-content-between">
        <h2 class="price m-0 pt-1"><h2> 
        <button class="btn btn-sm btn-secondary"><i class="bi bi-trash"></i></button>
      </div>
    </div>
    `;

    const delBtn = this.htmlElement.querySelector('.btn');
    delBtn.addEventListener('click', () => this.props.onDelete(id));


    const apartmentType = this.htmlElement.querySelector(".type")
    switch (type) {
      case 'flat':
        apartmentType.innerHTML = "Butas pardavimui"
        break
      case 'house':
        apartmentType.innerHTML = "Namas pardavimui"
        break
      case 'cottage':
        apartmentType.innerHTML = "Kotedžas pardavimui"
        break
      default: 
        break
    }

    const finalPrice = this.htmlElement.querySelector(".price")
    if(currency === "$"){
      finalPrice.innerHTML = `${Math.floor(amount * ApartmentCardComponent.USD_EUR)} €` 
    } else if (currency === "€"){
      finalPrice.innerHTML = `${amount} ${currency}`
    } else {
      finalPrice.innerHTML = `Kaina pateikta netinkama valiuta`
    }
  }
}