async function buscarPokemon(nombrePokemon) {
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

    return { nombre, imagen, ataque, defensa };
  } catch (error) {
    console.error(error);
    throw error;
  }
}
