import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    data: JSON.parse(localStorage.getItem("basket")),
    botToken: "5550093775:AAE6N0wotxTv4gyjtLdITFDkRR7CHdBlrL8",
    chatId: -1001841407956,
}


export const postMessage = createAsyncThunk('posts/getPosts',
  async (text, { getState, dispatch }) => {
    console.log(text)
    let meals = text.foods.forEach(element => {
        return(
            element
        )
    });
    console.log(meals)
    let message = `ФИО: ${text.nameUser} %0A Номер телефона: ${text.numberUser} %0A Адрес: ${text.adresUser} %0A Список еды: %0A ${meals}`
    console.log(message)
    try {
    //   const res = await axios.post(`https://api.telegram.org/bot5550093775:AAE6N0wotxTv4gyjtLdITFDkRR7CHdBlrL8/sendMessage?chat_id=-1001841407956&text=${text}`)
    //   console.log(res.data)

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
            let newData = [...state.data, action.payload]
            localStorage.setItem("basket", JSON.stringify(newData))
            state.data = newData
        },
        sendMessage: (state, action) =>{

        }
    },
})


export const { addFoods, sendMessage } = getBasket.actions

export default getBasket.reducer