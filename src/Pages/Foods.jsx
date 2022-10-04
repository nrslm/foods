import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getFood } from "../features/GetFoods"
import { Center, Container, Grid } from "@mantine/core"

import Cards from '../components/Cards'

function Foods() {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.get.dataFoods)
    const nameCategory = useSelector((state) => state.get.categoriName)
    useEffect(() => {
        dispatch(getFood(nameCategory))
    }, [])
    console.log(data)


    return (
        <div className='mt-8 min-h9'>
            <Container size={"xl"} px={"xl"}>
                <Center style={{ width: "100%" }}>
                    <h1 className='f-4'>{nameCategory}</h1>
                </Center>
                <div className='mt-8'>
                    <Grid justify="center">
                        {
                            data.map((item, index) => {
                                return (
                                    <Grid.Col span={4} key={index}>
                                        <Cards  
                                            v={item}
                                            i={index}
                                            icon={false} 
                                        />
                                    </Grid.Col>
                                )
                            })
                        }
                    </Grid>
                </div>
            </Container>
        </div>
    )
}

export default Foods