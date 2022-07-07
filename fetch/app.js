const tarjetas = document.getElementById('tarjetas');

const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail';


fetch(url)
  .then((resp) => resp.json())
  .then((data) => printData(data.drinks))
  .catch((error) => console.log(error))


    //   <div class="tarjeta">
      // <figure>
      //   <img src="${strDrinkThumb}" alt="${strDrink}" width="300" >
      // </figure>
      // <p>Nombre: ${strDrink}</p>
      // <p>id: ${idDrink}</p>
    // </div>

  const printData = (arr) => {
    let str = '';
    for(let i = 0; i < arr.length; i++){
      const idDrink = arr[i].idDrink
      const strDrink = arr[i].strDrink
      const strDrinkThumb = arr[i].strDrinkThumb
      str = str + `

    <div class="col s6 m3 ">
    <div class="card tarjeta">
      <div class="card-image">
      <figure>
      <img src="${strDrinkThumb}" alt="${strDrink}">
    </figure>
      </div>
      <div class="card-content">
      <p>Nombre: ${strDrink}</p>
      <p>id: ${idDrink}</p>
      </div>
    </div>
  </div>
      `
    }
    tarjetas.innerHTML = str;
  }
