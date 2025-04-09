import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipeSlice, recipeSliceType } from "./recipeSlice";

export const useAppStore = create<recipeSliceType>()(devtools((...a) => ({
    ...createRecipeSlice(...a)
})))