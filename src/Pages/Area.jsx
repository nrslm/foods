import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { AreaFoods } from "../features/GetFoods"
import { Center, Container, Grid } from "@mantine/core"
import { useParams } from 'react-router-dom'

import Cards from '../components/Cards'

function Area() {
    const { area } = useParams()
    const dispatch = useDispatch()
    const data = useSelector((state) => state.get.dataArea)

    useEffect(() => {
        dispatch(AreaFoods(area))
    }, [area])
    
    return (
        <div>
            <Container size={"xl"} px={"xl"}>
                <Center style={{ width: "100%" }}>
                    <h1 className='f-4'>{area}</h1>
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

export default Area