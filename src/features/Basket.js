import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  data: JSON.parse(localStorage.getItem("basket")),
  botToken: "5550093775:AAE6N0wotxTv4gyjtLdITFDkRR7CHdBlrL8",
  chatId: -1001841407956,
}

export const postMessage = createAsyncThunk('posts/getPosts',
  async (text, { getState, dispatch }) => {
    let message = `ФИО: ${text.nameUser} %0A Номер телефона: ${text.numberUser} %0A Адрес: ${text.adresUser} %0A Список еды: ${text.foods.map((item, index) => { return item })} `
    console.log(message)
    try {
      const res = await axios.post(`https://api.telegram.org/bot5550093775:AAE6N0wotxTv4gyjtLdITFDkRR7CHdBlrL8/sendMessage?chat_id=-1001841407956&text=${message}`)
    } catch (e) {
      console.log(e)
    }
  }
)

export const getBasket = createSlice({
  name: 'Basket',
  initialState,
  reducers: {
    addFoods: (state, action) => {
      let t = state.data.some(elem => elem.idMeal === action.payload.idMeal)
      let newData = !t ? [...state.data, action.payload] : state.data
      localStorage.setItem("basket", JSON.stringify(newData))
      state.data = newData
    },
    delateFood: (state, action) => {
      state.data = action.payload
    },
    sendMessage: (state, action) => {

    }
  },
})


export const { addFoods, sendMessage, delateFood } = getBasket.actions

export default getBasket.reducer