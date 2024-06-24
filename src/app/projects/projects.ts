import mdLinks from "../../../public/md_links.png";
import socialNetwork from "../../../public/social_health.jpg";
import dataLovers from "../../../public/data_lovers.png";
import cardValidation from "../../../public/card_validation.png";
import currencyConverter from "../../../public/currency_converter.png";

export const projects = [
    {
        id: 1,
        name: "Conversor de Monedas",
        description: "Creación de un conversor de monedas que permite a los usuarios calcular el valor equivalente entre dos diferentes tipos de monedas.",
        imageSrc: currencyConverter.src,
        tools: "Java",
        year: "2024",
    },
    {
        id: 2,
        name: "mdLinks",
        description: "Creación de una librería y script ejecutable que permite leer y analizar archivos markdown, verificando su contenido y mostrando su código de estado.",
        imageSrc: mdLinks.src,
        tools: "Javascript, NodeJS, Jest, Chalk",
        year: "2021",
    },
    {
        id: 3,
        name: "Social Network",
        description: "Creación de red social donde el usuario puede crear una cuenta, loguearse, crear, editar, borrar y likear posts.",
        imageSrc: socialNetwork.src,
        tools: "Firebase, Figma, Javascript, HTML, CSS, Jest",
        year: "2021",
    },
    {
        id: 4,
        name: "Data Lovers",
        description: "Creación de una web que consume data en formato JSON, y permite filtrar u ordenar la información.",
        imageSrc: dataLovers.src,
        tools: "Javascript, Figma, HTML, CSS, Jest",
        year: "2021",
    },
    {
        id: 5,
        name: "Card Validation",
        description: "Creación de una web que valida tarjetas de crédito y enmascara los primeros dígitos protegiendo los datos.",
        imageSrc: cardValidation.src,
        tools: "Javascript, HTML, CSS, Jest",
        year: "2021",
    },
]