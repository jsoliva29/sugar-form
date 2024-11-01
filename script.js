const countries = [
  {
    country_id: 1,
    name: "Honduras"
  },
  {
    country_id: 2,
    name: "Nicaragua"
  },
  {
    country_id: 3,
    name: "El Salvador"
  },
]

const states = [
  { country_id: 1, state_id: 1, name: "Atlántida" },
  { country_id: 1, state_id: 2, name: "Colón" },
  { country_id: 1, state_id: 3, name: "Comayagua" },
  { country_id: 1, state_id: 4, name: "Copán" },
  { country_id: 1, state_id: 5, name: "Cortés" },
  { country_id: 1, state_id: 6, name: "Choluteca" },
  { country_id: 1, state_id: 7, name: "El Paraíso" },
  { country_id: 1, state_id: 8, name: "Francisco Morazán" },
  { country_id: 1, state_id: 9, name: "Gracias a Dios" },
  { country_id: 1, state_id: 10, name: "Intibucá" },
  { country_id: 1, state_id: 11, name: "Islas de la Bahía" },
  { country_id: 1, state_id: 12, name: "La Paz" },
  { country_id: 1, state_id: 13, name: "Lempira" },
  { country_id: 1, state_id: 14, name: "Ocotepeque" },
  { country_id: 1, state_id: 15, name: "Olancho" },
  { country_id: 1, state_id: 16, name: "Santa Bárbara" },
  { country_id: 1, state_id: 17, name: "Valle" },
  { country_id: 1, state_id: 18, name: "Yoro" },
  
  // Nicaragua (country_id: 2)
  { country_id: 2, state_id: 1, name: "Managua" },
  { country_id: 2, state_id: 2, name: "León" },
  { country_id: 2, state_id: 3, name: "Granada" },
  { country_id: 2, state_id: 4, name: "Masaya" },
  { country_id: 2, state_id: 5, name: "Estelí" },
  
  // El Salvador (country_id: 3)
  { country_id: 3, state_id: 1, name: "San Salvador" },
  { country_id: 3, state_id: 2, name: "Santa Ana" },
  { country_id: 3, state_id: 3, name: "San Miguel" }
];

const equipments = [
  { id_equipment: 1, name: "Tractor agricola" },
  { id_equipment: 2, name: "Camion" },
];

const models = [
  { id_model: 1, id_equipment: 1, name: "TT4.55", nominal: 41, maxima: 55 },
  { id_model: 2, id_equipment: 1, name: "TT4.75", nominal: 55, maxima: 75 },
  { id_model: 3, id_equipment: 1, name: "TT4.90", nominal: 66, maxima: 90 },
  { id_model: 4, id_equipment: 1, name: "6630", nominal: 99, maxima: 100 },
  { id_model: 5, id_equipment: 1, name: "TL5.100", nominal: 99, maxima: 101 },
  { id_model: 6, id_equipment: 1, name: "TL5.100 CAB", nominal: 99, maxima: 101 },
  { id_model: 7, id_equipment: 1, name: "7630", nominal: 108, maxima: 111 },
  { id_model: 8, id_equipment: 1, name: "T6.110", nominal: 110, maxima: 120 },
  { id_model: 9, id_equipment: 1, name: "T6.110 CAB", nominal: 110, maxima: 120 },
  { id_model: 10, id_equipment: 1, name: "T6.130", nominal: 130, maxima: 135 },
  { id_model: 11, id_equipment: 1, name: "T7.190 CAB", nominal: 154, maxima: 190 },
  { id_model: 12, id_equipment: 1, name: "T7.190 CAB PLM", nominal: 154, maxima: 190 },
  { id_model: 13, id_equipment: 1, name: "T7.205 CAB", nominal: 179, maxima: 206 },
  { id_model: 14, id_equipment: 1, name: "T7.205 CAB PLM", nominal: 179, maxima: 206 },
  { id_model: 15, id_equipment: 1, name: "T7.260 CAB", nominal: 231, maxima: 260 },
  { id_model: 16, id_equipment: 1, name: "T7.260 CAB PLM", nominal: 231, maxima: 260 },
  { id_model: 17, id_equipment: 2, name: "Camion 1", nominal: 231, maxima: 260 },
  { id_model: 18, id_equipment: 2, name: "Camion 2", nominal: 231, maxima: 260 },
];


document.addEventListener("DOMContentLoaded", function () {
  const selectCountry = document.getElementById("country");
  const selectStates = document.getElementById("state");
  const selectEquipment = document.getElementById("equipment");
  const selectModel = document.getElementById("model");

  // Agregar options a select de países
  let optionsTemplateCountry = countries
    .map(
      (country) => `
        <option value="${country.country_id}">${country.name}</option>
      `
    )
    .join("");
  selectCountry.innerHTML =
    "<option disabled selected>--- Seleccione una opción ---</option>" +
    optionsTemplateCountry;

  // Agregar options a select de equipos
  let optionsTemplateEquipment = equipments
    .map(
      (equipment) => `
        <option value="${equipment.id_equipment}">${equipment.name}</option>
      `
    )
    .join("");
  selectEquipment.innerHTML =
    "<option disabled selected>--- Seleccione una opción ---</option>" +
    optionsTemplateEquipment;

  // Event listener para actualizar el select de estados por país
  selectCountry.addEventListener("change", function () {
    const selectedCountryId = parseInt(selectCountry.value);
    const filteredStates = states.filter(
      (state) => state.country_id === selectedCountryId
    );

    let optionsTemplateStates = filteredStates
      .map(
        (state) => `
          <option value="${state.state_id}">${state.name}</option>
        `
      )
      .join("");
    selectStates.innerHTML =
      "<option disabled selected>--- Seleccione una opción ---</option>" +
      optionsTemplateStates;
  });

  // Event listener para actualizar el select de modelos según el equipo seleccionado
  selectEquipment.addEventListener("change", function () {
    const selectedEquipmentId = parseInt(selectEquipment.value);
    const filteredModels = models.filter(
      (model) => model.id_equipment === selectedEquipmentId
    );

    let optionsTemplateModel = filteredModels
      .map(
        (model) => `
          <option title="Potencia: nominal ${model.nominal}, maxima ${model.maxima}" value="${model.id_model}">${model.name}</option>
        `
      )
      .join("");
    selectModel.innerHTML =
      "<option disabled selected>--- Seleccione una opción ---</option>" +
      optionsTemplateModel;
  });


  
/////////////ENDPOINT//////////////////
const leadApiUrl = "https://cemcoldev.sugarondemand.com/rest/v11_18/webtolead";
const sugarTokenUrl = "https://cemcoldev.sugarondemand.com/rest/v11_18/oauth2/token"; // URL de desarrollo

// Función para obtener el token de la API Sugar
async function getSugarToken() {
  const sugarOauthBody = new URLSearchParams({
    grant_type: "password",
    client_id: "sugar",
    client_secret: "",
    username: "ifpaz@cemcol.com",
    password: "Programacion2019",
    platform: "mobile",
  });

  const response = await fetch(sugarTokenUrl, {
    method: "POST",
    body: sugarOauthBody,
  });

  const data = await response.json();
  const tokenSugar = data.access_token;
  console.log("Imprimiendo Access Token Sugar:", tokenSugar);
  return tokenSugar;
}

// Llamada para obtener el token
let sugarToken;
(async () => {
  try {
    sugarToken = await getSugarToken();
  } catch (error) {
    console.error("Error obteniendo tokens:", error);
  }
})();




// Obtener el botón y el formulario
const btnEnviarData = document.getElementById("btnEnviarData");
const form = document.getElementById("myForm");

if (btnEnviarData && form) {
  
  // Función para enviar datos al endpoint con headers y body configurados
  async function postForm(dataJson) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Oauth-Token", `Bearer ${sugarToken}`);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify(dataJson),
    };

    try {
      const response = await fetch(leadApiUrl, requestOptions);
      if (!response.ok) {
        throw new Error(`Error en la respuesta del servidor: ${response.status}`);
      }
      const result = await response.json(); // Parsear como JSON
      console.log("Respuesta del servidor:", result);
      // Mostrar mensaje de éxito al usuario
    } catch (error) {
      console.error("Error en el envío de información:", error);
      // Mostrar mensaje de error al usuario
    }
  }

  // Función asincrónica manejadora del evento `click`
  async function handleButtonClick(event) {
    event.preventDefault();

    const formData = new FormData(form);
    let data = Object.fromEntries(formData.entries());

    // Validar campos requeridos en data
    if (!data.first_name || !data.last_name || !data.email_address) {
      console.error("Faltan datos obligatorios");
      // Mostrar mensaje de error al usuario
      return;
    }

    // Obtener selecciones del usuario
    const selectedCountryText = document.getElementById("country").options[document.getElementById("country").selectedIndex].text;
    const selectedStateText = document.getElementById("state").options[document.getElementById("state").selectedIndex].text;
    const selectedModelText = document.getElementById("model").options[document.getElementById("model").selectedIndex].text;
    const selectedEquipoText = document.getElementById("equipment").options[document.getElementById("equipment").selectedIndex].text;

    // Preparar los datos en formato JSON
    const dataJson = {
      first_name: data.first_name,
      last_name: data.last_name,
      primary_address_state: selectedStateText,
      primary_address_country: selectedCountryText,
      email: [
        {
          email_address: data.email_address,
          invalid_email: 0,
          opt_out: 0,
          primary_address: 1,
        },
      ],
      Equipo: selectedEquipoText,
      Modelo: selectedModelText,
      Mensaje: data.Mensaje || "", // Opcional, para evitar valores undefined
    };

    console.log("Datos JSON a enviar:", dataJson);

    // Llamar a `postForm` con `dataJson`
    if (sugarToken) {
      await postForm(dataJson);  // Usa await para esperar la finalización de `postForm`
    } else {
      console.error("Token no disponible. Intente de nuevo más tarde.");
      // Mostrar mensaje al usuario si el token no está disponible
    }
  }

  // Asignar el evento `click` al botón con la función `handleButtonClick`
  btnEnviarData.addEventListener("click", handleButtonClick);
} else {
  console.error("Error: Elementos de formulario o botón no encontrados.");
}


});
