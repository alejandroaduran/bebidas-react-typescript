import { StateCreator } from "zustand";
import AIService from "../services/AIService";

export type AISlice = {
    recipe: string;
    isGenerating: boolean;
    generateRecipe: (prompt: string) => Promise<void>;
}

export const createAISlice: StateCreator<AISlice, [], [], AISlice> = (set) => ({
    recipe: "",
    isGenerating: false,
    generateRecipe: async (prompt) => {
        console.log("Prompt: ", prompt)
        set({ recipe: "", isGenerating: true }) // Reset the recipe before generating a new one
        const data = await AIService.generateRecipe(prompt) // Call the AIService to generate the recipe

        for await (const textPart of data) {
            console.log("Text part: ", textPart)
            set((state => ({
                recipe: state.recipe + textPart // Append the new text part to the existing recipe
            })))
        }
        set({ isGenerating: false }) // Set isGenerating to false after generation is complete
    }


})