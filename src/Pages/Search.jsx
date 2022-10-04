import React, { useState, useEffect } from 'react'
import { searchFoods } from '../features/GetFoods'
import { useDispatch, useSelector } from "react-redux"
import { Container, Grid, Center } from "@mantine/core"

import Cards from '../components/Cards'


function Search() {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.get.dataSearch)
  const value = useSelector((state) => state.get.searchName)

  useEffect(() => {
    dispatch(searchFoods(value))
  }, [])
  console.log(value)

  return (
    <div className='min-h9'>
      <Container size={"xl"} px={"xl"}>
        <div className='mt-6'></div>
        <Center style={{width: "100%"}}>
          <h1>{value}</h1>
        </Center>
        <div className='m-4'></div>
        <Grid>
          {
            data.map((items, index) =>{
              return(
                <Grid.Col key={index} span={4}>
                  <Cards
                    v={items}
                    i={index}
                  />
                </Grid.Col>
              )
            })
          }
        </Grid>
      </Container>
    </div>
  )
}

export default Search