import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipeSlice, RecipeSliceType } from "./recipeSlice";
import { FavoritesSliceType, createFavoritesSlice } from "./favoritesSlice";

export const useAppStore = create<RecipeSliceType & FavoritesSliceType>()(devtools((...a) => ({
    ...createRecipeSlice(...a),
    ...createFavoritesSlice(...a),
})));