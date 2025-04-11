import axios from "axios"
import { CategoriesAPIResponseSchema, DrinksAPIResponse } from "../utils/recipes-schema"
import { SearchFilter } from "../types"

export async function getCategories() {

    //console.log("desde RecipeService.ts")
    const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
    const { data } = await axios(url)

    const result = CategoriesAPIResponseSchema.safeParse(data)
    //console.log(result)

    if (result.success) {
        return result.data
    }
}

export async function getRecipies(filters: SearchFilter) {
    //   console.log(filters)
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${filters.ingredient}&c=${filters.category}`
    const { data } = await axios(url)
    //console.log(data)
    const result = DrinksAPIResponse.safeParse(data)
    //    console.log(result)
    if (result.success) {
        return result.data
    }

}