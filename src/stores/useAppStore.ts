import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipeSlice, RecipeSliceType } from "./recipeSlice";
import { FavoritesSliceType, createFavoritesSlice } from "./favoritesSlice";
import { createNotificationSlice, NotificationSliceType } from "./notificationSlice";
import { AISlice, createAISlice } from "./aiSlice";

export const useAppStore = create<RecipeSliceType & FavoritesSliceType & NotificationSliceType & AISlice>()(devtools((...a) => ({
    ...createRecipeSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a),
    ...createAISlice(...a),
})));