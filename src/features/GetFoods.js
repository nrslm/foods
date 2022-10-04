import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
  data: [],
  dataFoods: [],
  dataMeal: [],
  categoriName: "Seafood",
  dataSearch: [],
  searchName: "",
  idMeal: 52878,
  spiner: false
}

export const getData = createAsyncThunk('posts/getPosts',
  async (text, { getState, dispatch }) => {
    console.log(text)
    try {
      const res = await axios.post("https://www.themealdb.com/api/json/v1/1/categories.php"
      )
      console.log(res.data.categories)
      dispatch(getCategory(res.data.categories))

    } catch (e) {
      console.log(e)
    }

  }
)

export const getFood = createAsyncThunk('posts/getPosts',
  async (text, { thunkAPI, dispatch }) => {
    let value = text || "Seafood"
    try {
      const res = await axios.post(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${value}`
      )
      console.log(res.data.meals)
      dispatch(getFoodsByCategory(res.data.meals))

    } catch (e) {
      console.log(e)
    }
    
  }
)
export const getFoodDetails = createAsyncThunk('posts/getPosts',
  async (text, { thunkAPI, dispatch }) => {
    try {
      const res = await axios.post(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${text}`
      )
      dispatch(getMealsDetails(res.data.meals))

    } catch (e) {
      console.log(e)
    }

  }
)


export const searchFoods = createAsyncThunk('posts/getPosts',
  async (text, { thunkAPI, dispatch }) => {
    console.log(text)
    try {
      const res = await axios.post(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`
      )
      console.log(res.data.meals)
      dispatch(searchMeals(res.data.meals))

    } catch (e) {
      console.log(e)
    }

  }
)

export const getMeals = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    getCategory: (state, action) => {
      state.data = action.payload
    },
    getFoodsByCategory: (state, action) => {
      state.dataFoods = action.payload
    },
    getDetailsFood: (state, action) => {
      state.value += action.payload
    },
    getMealsDetails: (state, action) =>{
      state.dataMeal = action.payload
    },
    searchMeals: (state, action) =>{
      state.dataSearch = action.payload
    },
    changeSearchName: (state, action) =>{
      state.searchName = action.payload
    },
    changeCategoryName: (state, action) =>{
      console.log(action.payload)
      state.categoriName = action.payload
    },
    changeIdMeal:(state, action) =>{
      console.log(action.payload)
      state.idMeal = action.payload
    }
  },
})


export const { getCategory, getFoodsByCategory, getDetailsFood, changeCategoryName, changeIdMeal, getMealsDetails, searchMeals, changeSearchName } = getMeals.actions

export default getMeals.reducer