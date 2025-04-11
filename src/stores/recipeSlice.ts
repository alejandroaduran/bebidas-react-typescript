import { StateCreator } from "zustand";
import { getCategories, getRecipies } from "../services/RecipeService";
import type { Categories, Drinks, SearchFilter } from "../types";


export type recipeSliceType = {
    categories: Categories;
    drinks: Drinks;
    fetchCategories: () => Promise<void>;
    searchRecipes: (searchFilters: SearchFilter) => Promise<void>;
}

export const createRecipeSlice: StateCreator<recipeSliceType> = (set) => ({

    categories: {
        drinks: []
    },
    drinks: {
        drinks: []
    },

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
    }
})
