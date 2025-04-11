import { StateCreator } from "zustand";
import { getCategories } from "../services/RecipeService";
import type { Categories, SearchFilter } from "../types";


export type recipeSliceType = {
    categories: Categories;
    fetchCategories: () => Promise<void>;
    searchRecipes: (searchFilters: SearchFilter) => Promise<void>;
}

export const createRecipeSlice: StateCreator<recipeSliceType> = (set) => ({

    categories: {
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
        console.log("buscando recetas desde recipe slice" + {filters})
    }
})
