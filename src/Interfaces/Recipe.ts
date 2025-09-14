export interface Recipe {
  id: number
  name: string
  image: string
  servings: string
  timePrep: string
  timeCook: string
}

export interface RecipeDatabase {
  Breakfast: Recipe[]
  Lunch: Recipe[]
  Dinner: Recipe[]
}

export type MealType = "Breakfast" | "Lunch" | "Dinner"

