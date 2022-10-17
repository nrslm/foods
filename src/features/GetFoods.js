import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
  data: [],
  dataFoods: [],
  dataMeal: [],
  dataArea: [],
  categoriName: "",
  dataSearch: [],
  searchName: "",
  idMeal: 52878,
  spiner: false
}

export const getData = createAsyncThunk('posts/getPosts',
  async (text, { getState, dispatch }) => {
    try {
      const res = await axios.post("https://www.themealdb.com/api/json/v1/1/categories.php"
      )
      dispatch(getCategory(res.data.categories))
    } catch (e) {
      console.log(e)
    }
  }
)

export const getFood = createAsyncThunk('posts/getPosts',
  async (value, { thunkAPI, dispatch }) => {
    dispatch(spiner(true))

    try {
      const res = await axios.post(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${value}`
      )
      dispatch(spiner(true))
      dispatch(getFoodsByCategory(res.data.meals))
    } catch (e) {
      console.log(e)
    }
  }
)
export const getFoodDetails = createAsyncThunk('posts/getPosts',
  async (text, { thunkAPI, dispatch }) => {
    dispatch(spiner(true))

    try {
      const res = await axios.post(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${text}`
      )
      dispatch(spiner(true))
      dispatch(getMealsDetails(res.data.meals))

    } catch (e) {
      console.log(e)
    }
  }
)


export const searchFoods = createAsyncThunk('posts/getPosts',
  async (text, { thunkAPI, dispatch }) => {
    dispatch(spiner(true))
    try {
      const res = await axios.post(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`
      )
      console.log(res.data.meals)
      dispatch(searchMeals(res.data.meals))
      dispatch(spiner(false))

    } catch (e) {
      console.log(e)
    }
  }
)

export const AreaFoods = createAsyncThunk('posts/getPosts',
  async (area, { getState, dispatch }) => {
    dispatch(spiner(true))

    try {
      const res = await axios.post(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
      dispatch(areaFoods(res.data.meals))
      console.log(res)
      dispatch(spiner(true))

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
    getMealsDetails: (state, action) => {
      state.dataMeal = action.payload
    },
    areaFoods: (state, action) => {
      state.dataArea = action.payload
    },
    searchMeals: (state, action) => {
      state.dataSearch = action.payload
    },
    changeSearchName: (state, action) => {
      state.searchName = action.payload
    },
    changeCategoryName: (state, action) => {
      state.categoriName = action.payload
    },
    changeIdMeal: (state, action) => {
      console.log(action.payload)
      state.idMeal = action.payload
    },
    spiner: (state, action) => {
      state.spiner = action.payload
    }
  },
})


export const { getCategory, getFoodsByCategory, getDetailsFood, changeCategoryName, changeIdMeal, getMealsDetails, searchMeals, changeSearchName, areaFoods, spiner } = getMeals.actions

export default getMeals.reducer