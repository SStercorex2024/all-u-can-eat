export interface Recipe {
  id: number
  name: string
  image: string
  servings: string
  timePrep: string
  timeCook: string
  newest?: boolean
  title?: string
  desc?: string
  ingredients?: []
  directions?: string
}

export interface RecipeDatabase {
  Breakfast: Recipe[]
  Lunch: Recipe[]
  Dinner: Recipe[]
  Snack?: Recipe[]
  Dessert?: Recipe[]
  Vegan?: Recipe[]
  Vegetarian?: Recipe[]
  Pescatarian?: Recipe[]
}

export type RecipeCategory =
  | 'Breakfast'
  | 'Lunch'
  | 'Dinner'
  | 'Snack'
  | 'Dessert'
  | 'Vegan'
  | 'Vegetarian'
  | 'Pescatarian'

