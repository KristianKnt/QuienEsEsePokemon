import {buscarPokemon,buscarPokemonPrimeros} from "./api.js";

buscarPokemon("pikachu");
buscarPokemonPrimeros("fuego");


const tarjetaPokemon = (pokemon) => `
  <div class="card">
    <img src="${pokemon.imagen}" alt="${pokemon.nombre}" class="card-img">
    <div class="card-body">
      <div class="card-header">
        <h2 class="card-title">${pokemon.nombre}</h2>
        <span class="card-badge">${pokemon.tipo}</span>
      </div>
      <p class="card-description">${pokemon.descripcion}</p>
      <div class="card-stats">
        <div class="stat-item">
          <span class="stat-label">🔥 Ataque</span>
          <span class="stat-value">${pokemon.ataque}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">🛡️ Defensa</span>
          <span class="stat-value">${pokemon.defensa}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">❤️ Vida (HP)</span>
          <span class="stat-value">${pokemon.vida}</span>
        </div>
      </div>
      <div class="container text-center">
        <div class="row align-items-start">
          <div class="col">
            <button type="button" class="btn boton-favoritos btnAgregarFavoritos" data-nombre="${pokemon.nombre}">
              <span class="estrella-favoritos">★</span>
              Agregar a favoritos
            </button>
          </div>
          <div class="col mt-3">
            <button type="button" class="btn-solid theme-danger w-100" data-nombre="${pokemon.nombre}">
              <i class="bi bi-x-octagon-fill"></i>
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

`;

const pokemones = [
  {
    nombre: "Furius Dragon",
    tipo: "Fuego",
    descripcion: "Una criatura mítica que habita en las profundidades de los volcanes activos.",
    ataque: 85,
    defensa: 70,
    vida: 120,
    imagen: "https://placeholder.com"
  },
  {
    nombre: "Aqua Turtle",
    tipo: "Agua",
    descripcion: "Un guardián de los océanos con un caparazón resistente.",
    ataque: 70,
    defensa: 95,
    vida: 130,
    imagen: "https://placeholder.com"
  },
  {
    nombre: "Leaf Runner",
    tipo: "Planta",
    descripcion: "Veloz pokémon que se camufla entre la vegetación.",
    ataque: 78,
    defensa: 65,
    vida: 110,
    imagen: "https://placeholder.com"
  }
];

const favoritos = [
  {
    nombre: "Furius Dragon",
    tipo: "Fuego",
    descripcion: "Una criatura mítica que habita en las profundidades de los volcanes activos.",
    ataque: 85,
    defensa: 70,
    vida: 120,
    imagen: "https://placeholder.com"
  }
];

const gridPokemones = document.getElementById("gridPokemones");
const gridFavoritos = document.getElementById("gridFavoritos");

gridPokemones.innerHTML = pokemones.map(tarjetaPokemon).join("");
gridFavoritos.innerHTML = favoritos.map(tarjetaPokemon).join("");
