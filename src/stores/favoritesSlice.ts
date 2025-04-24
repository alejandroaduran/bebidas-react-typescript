import { StateCreator } from "zustand";
import { Recipe } from "../types";
import { createRecipeSlice, RecipeSliceType } from "./recipeSlice";

export type FavoritesSliceType = {
    favorites: Recipe[];
    handleClickFavorite: (recipe: Recipe) => void;
    favoriteExists: (id: Recipe['idDrink']) => boolean;
    loadfromStorage: () => void;
}

export const createFavoritesSlice: StateCreator<FavoritesSliceType & RecipeSliceType, [], [], FavoritesSliceType> = (set, get, api) => ({
    favorites: [],
    handleClickFavorite: (recipe) => {
        //console.log(recipe)
        if (get().favorites.some(favorite => favorite.idDrink === recipe.idDrink)) {
            console.log("ya existe")
            /* set({
                favorites: get().favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
            }) */
            set((state) => ({
                favorites: state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
            }))
        } else {
            console.log("no existe")

            /* set({
                favorites: [...get().favorites, recipe]
            }) */

            set((state) => ({
                favorites: [...state.favorites, recipe]
            }))
        }

        createRecipeSlice(set, get, api).closeModal()
        localStorage.setItem("favorites", JSON.stringify(get().favorites)) // Guardar en localStorage
    },

    favoriteExists: (id) => {
        return get().favorites.some(favorite => favorite.idDrink === id)
    },

    loadfromStorage : () => {
        const storedFavorites = localStorage.getItem("favorites")
        if (storedFavorites) {
            set({
                favorites: JSON.parse(storedFavorites)
            })
        }
    }
})