export async function buscarPokemon(nombrePokemon) {
  const url = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`;

  try {
    const respuesta = await fetch(url);
    if (!respuesta.ok) {
      throw new Error("No se encontró ese Pokémon.");
    }

    const datos = await respuesta.json();

    const nombre = datos.name;
    const imagen = datos.sprites.front_default;
    const ataque = datos.stats.find((estado) => estado.stat.name === "attack").base_stat;
    const defensa = datos.stats.find((estado) => estado.stat.name === "defense").base_stat;

    console.log({nombre, imagen, ataque, defensa});
    return { nombre, imagen, ataque, defensa };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function buscarPokemonPrimeros(tipo) {
  const url = `https://pokeapi.co/api/v2/ability/?limit=20`;

  try {
    const respuesta = await fetch(url);
    if (!respuesta.ok) {
      throw new Error("No se encontraron Pokémon.");
    }

    const datos = await respuesta.json();
    console.log(datos.results);

    const pokemones = datos.results.map((pokemon) => ({
      nombre: pokemon.name,
      imagen: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[3]}.png`,
      ataque: pokemon.stats.stat.name === "attack" ? pokemon.stats.base_stat : null,
      
    }));

    console.log(pokemones);
    return pokemones;
  } catch (error) {
    console.error(error);
    throw error;
  }
}