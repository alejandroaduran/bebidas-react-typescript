import { useMemo } from "react"
import DrinkCard from "../components/DrinkCard"
import { useAppStore } from "../stores/useAppStore"


export default function FavoritesPage() {

  const favorites = useAppStore((state) => state.favorites)
  const hasFavorites = useMemo(() => favorites.length > 0, [favorites])

  return (
    <>

      <h1 className="text-6xl font-extrabold">favoritos</h1>

      {hasFavorites ? (

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {favorites.map(drink => (
            <DrinkCard
              key={drink.idDrink}
              drink={drink}

            />
          ))}
        </div>
      ) : (
        <p className="my-10 text-center text-2xl ">
          No hay resultados aún, Utiliza el formulario para buscar recetas
        </p>
      )}

    </>
  )
}
