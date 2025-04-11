import { StateCreator } from "zustand";
import { getCategories, getRecipeById, getRecipies } from "../services/RecipeService";
import type { Categories, Drink, Drinks, Recipe, SearchFilter } from "../types";


export type RecipeSliceType = {
    categories: Categories;
    drinks: Drinks;
    selectedRecipe: Recipe;
    modal: boolean;
    fetchCategories: () => Promise<void>;
    searchRecipes: (searchFilters: SearchFilter) => Promise<void>;
    selectRecipe: (id: Drink["idDrink"]) => Promise<void>;
    closeModal: () => void;
}

export const createRecipeSlice: StateCreator<RecipeSliceType> = (set) => ({

    categories: {
        drinks: []
    },

    drinks: {
        drinks: []
    },

    selectedRecipe: {} as Recipe,

    modal: false,

    fetchCategories: async () => {
        const categories = await getCategories()
        //console.log(categories)
        set({
            categories
        })
    },

    searchRecipes: async (filters) => {
        //console.log("buscando recetas desde recipe slice" + {filters})
        const drinks = await getRecipies(filters)
        console.log(drinks)
        set({
            drinks
        })
    },
    selectRecipe: async (id) => {
        //console.log(id)
        const selectedRecipe = await getRecipeById(id)
        console.log(selectedRecipe)
        set({
            selectedRecipe,
            modal: true
        })
    },

    closeModal: () => {
        set({
            modal: false,
            selectedRecipe: {} as Recipe
        })
    }
})
