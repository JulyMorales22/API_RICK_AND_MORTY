const API = "https://rickandmortyapi.com/api/character";

  const getAPI = (url) => {
    return fetch(url) /*el fetch es un request una consulta */
      .then((response) =>
        response.json()
      ) /* es una promesa que esta esperando un response (respuesta).json porque es el formato en el que debe venir el response*/
      .then((json) => {/*json es una variable */
        fillData(
          json.results), pagination(json.info); /*.results porque es el que necesitamos especificamente de todo el json y se debe copiar tal cual el nombre, json es la variable como se llamo arriba en el 2do then */
      }) /* donde lo va guardar, el json es el nombre donde se va a guardar*/
      .catch((error) => {
        /*catch para cuando ocurre un error al consultar la API */
        console.log("Error in the API :", error);
      });
  };

const fillData = (data) => {
  let html = "";
  data.forEach((ch) => {
    html += '<div class="col text-info">';
    html += '<div class="card h-100 text-center bg-secondary border-dark">';
    html += `<img src="${ch.image}" class="card-img-top" alt="${data.name}">`;
    html += '<div class="card-body">';
    html +=  `<h5 class="card-title">Name: ${ch.name}</h5>`;
    html +=  `<h5 class="card-title">Species: ${ch.species}</h5>`;
    html += "</div>";
    html += '</div>';
    html += '</div>';
  });
  document.getElementById("characters").innerHTML = html;
};

const pagination = (info) =>{//para hacer que se deshabilite el boton de prev o next cuando sea el caso

  let html = "";

  // if (info.prev ==null) {
  //   prevDisable = "disabled";
  // } 
  // info.prev == null ?  "disable" :""; //operador ternario para optimizar codigo if - else, remplaza el condicional no sirve es para cuando se tienen if else if y else o asi 

  // info.next == null?  "disable" :"";

//en la interpolacion donde antes teniamos la variable podemos meter todo el operador ternario 
  html +=`<li class="page-item ${info.prev == null ?  "disable" :""}"><a class="page-link" onclick="getAPI('${info.prev}')">Preview</a></li> `;
  html +=`<li class="page-item ${info.next == null?  "disable" :""}"><a class="page-link" onclick="getAPI('${info.next}')">Next</a></li> `;//se debe poner '' para los parametros

  document.getElementById("pagination").innerHTML = html;

};
getAPI(API);
