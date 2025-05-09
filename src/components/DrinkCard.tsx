import { Drink } from "../types"
import { useAppStore } from "../stores/useAppStore"

type DrinkCardProps = {
    drink: Drink
}


export default function DrinkCard({ drink }: DrinkCardProps) {

    const selectRecipe = useAppStore((state) => state.selectRecipe)

    return (
        <div className="border shadow-lg">
            <div className="overflow-hidden">
                <img
                    src={drink.strDrinkThumb}
                    alt={drink.strDrink}
                    className="hover:scale-125 transition transform hover:rotate-2"
                />
            </div>
            <div className="p-5">

                <h2 className="text-2xl fontblack truncate ">
                    {drink.strDrink}
                </h2>
                <button
                    type="button"
                    className="bg-orange-500 hover:bg-orange-600 mt-5 p-3 font-bold text-white text-lg rounded-lg w-full"
                    onClick={() => selectRecipe(drink.idDrink)}
                >
                    Ver receta
                </button>
            </div>
        </div>
    )
}
