import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getFoodDetails } from "../features/GetFoods"
import { Container, Grid } from "@mantine/core"

function Details() {
  const dispatch = useDispatch()
  const id = useSelector((state) => state.get.idMeal)
  const data = useSelector((state) => state.get.dataMeal)
  useEffect(() => {
    dispatch(getFoodDetails(id))
  }, [])
  console.log(data)


  return (
    <div className='mt-8 mb-8'>
      <Container size={"xl"} px={"xl"}>
        {
          data.map((items, index) => {
            return (
              <div key={index}>
                <Grid gutter="xl" justify="center" align="center">

                  <Grid.Col span={5}>
                    <div>
                      <img width={"100%"} src={items.strMealThumb} alt="" />
                    </div>
                  </Grid.Col>
                  <Grid.Col span={5}>
                    <div>
                      <h1>{items.strMeal}</h1>
                      <p></p>
                      <a href={items.strYoutube} target="_blank">Youtube video</a>
                    </div>
                  </Grid.Col>
                </Grid>
              </div>
            )
          })
        }

      </Container>
    </div>
  )
}

export default Details