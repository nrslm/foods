import React from 'react'
import { Center, Space, Button } from "@mantine/core"
import { ArrowRightSquare, Eye } from 'tabler-icons-react'
import { useDispatch, useSelector } from 'react-redux'
import { changeIdMeal } from "../features/GetFoods"
import { Link, useNavigate } from "react-router-dom"
import { addFoods } from '../features/Basket'
import { delateFood } from '../features/Basket'

import Basket from '../assets/img/cart-regular-24 8.png'

function Cards({ v, i, icon }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let prayc = Math.floor(Math.random() * (100 - 5) + 5)

    const GoFoods = (id) => {
        dispatch(changeIdMeal(id))
        navigate("/Details/" + id)
    }
    const AddFood = (item) => {
        dispatch(addFoods(item))
    }
    const Delete = (id) => {
        let data = JSON.parse(localStorage.getItem("basket"))
        data = data.filter((item) => item.idMeal != id)
        dispatch(delateFood(data))
        localStorage.setItem("basket", JSON.stringify(data))
    }
    return (
        <Center style={{ width: "100%" }}>
            <div className='m-4 w-60'>
                <div>
                    <div className='cardFood-img' style={{ backgroundImage: `url("${v.strMealThumb}")` }}></div>
                    <Space h="xl" />
                    <h3>{v.strMeal}</h3>
                    <Space h="xl" />
                    <div className='m-4' ></div>
                    <div className='flex content-between items-center'>
                        <h3>{prayc}$</h3>
                        <Button onClick={() => GoFoods(v.idMeal)} radius="lg" style={{ backgroundColor: "rgb(255, 86, 24)" }}>
                            <Eye
                                size={30}
                                strokeWidth={2}
                                color={'white'}
                            />
                        </Button>

                        <Button onClick={() => icon ? Delete(v.idMeal) : AddFood(v)} radius="lg" style={{ backgroundColor: "rgb(255, 86, 24)" }}>

                            {icon ? "X" : <img src={Basket} alt="" />}
                        </Button>
                    </div>
                </div>
            </div>
        </Center>
    )
}

export default Cards