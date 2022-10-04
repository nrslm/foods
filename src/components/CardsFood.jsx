import React from 'react'
import { Center, Space, Button } from "@mantine/core"
import { ArrowRightSquare, Eye } from 'tabler-icons-react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { changeCategoryName } from "../features/GetFoods"

function CardsFood({ v, i }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  
  const GoFoods = (v) =>{
    dispatch(changeCategoryName(v))
    navigate("/Foods")
  }

  return (
    <div className='tc m-6'>
      <Center style={{ width: "100%" }}>
        <div>
          <div className='cardFood-img' style={{ backgroundImage: `url("${v.strCategoryThumb}")` }}></div>
          <Space h="xl" />
          <h3>{v.strCategory}</h3>
          <Space h="xl" />
          <div className='flex content-end'>
            <Button onClick={() => GoFoods(v.strCategory)} radius="lg" style={{ backgroundColor: "rgb(255, 86, 24)" }}>
              <Eye
                size={30}
                strokeWidth={2}
                color={'white'}
              />
            </Button>
          </div>
        </div>
      </Center>

    </div>
  )
}

export default CardsFood