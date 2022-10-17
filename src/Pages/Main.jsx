import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { getData } from '../features/GetFoods'
import Carousel from '../components/Carousel'
import Customer from "../assets/img/customer-service1.png"
import Delyvery from "../assets/img/fast-delivery1.png"
import Food from "../assets/img/food1.png"
import AboutImg from '../assets/img/about-img.png'
import CardsFood from '../components/CardsFood'


import { Container, Grid, Button, Space, Center, Spoiler } from "@mantine/core"

function Main() {
    const data = useSelector((state) => state.get.data.slice(0, -2))
    const dispatch = useDispatch()
    let text = ''
    useEffect(() => {
        dispatch(getData())
    }, [])

    return (
        <div>
            <h1>{text}</h1>
            <Carousel />

            <Container size={"xl"} px={"xl"}>
                <h1 className='f-3 tc mt-8 '>Our Services</h1>

                <div className='flex content-evenly mt-8 mb-8 f-wrap'>
                    <div className='tc w-30 flex fd-colum items-center'>
                        <div className={"imgBox-services mb-4"} style={{ backgroundImage: `url("${Customer}")` }} />
                        <span>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint officiis exercitationem tenetur error?
                        </span>
                    </div>
                    <div className='tc w-30 flex fd-colum items-center'>
                        <div className={"imgBox-services"} style={{ backgroundImage: `url("${Delyvery}")` }} /> <br />
                        <span>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint officiis exercitationem tenetur error?
                        </span>
                    </div>
                    <div className='tc w-30 flex fd-colum items-center'>
                        <div className={"imgBox-services"} style={{ backgroundImage: `url("${Food}")` }} /> <br />
                        <span>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint officiis exercitationem tenetur error?
                        </span>
                    </div>
                </div>
                <div className='m-6'></div>
                <Center style={{ width: "100%", height: "10px" }}>
                    <hr style={{ width: "300px", height: "3px", backgroundColor: "orange", border: "none" }} />
                </Center>
                <div className='m-6'></div>

                <div className='mt-8'>
                    <Grid>
                        <Grid.Col span={6}>
                            <div className='mt-8 mb-8'></div>
                            <h1 className='f-4 mb-4'>About US</h1>
                            <Space h="xl" />
                            <Spoiler maxHeight={100} showLabel="Show more" hideLabel="Hide">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex corrupti, unde culpa cupiditate adipisci aliquid provident doloribus.Cupiditate provident doloribus.unde culpa cupiditate adipisci aliquid provident doloribus.Cupiditate provident doloribus.
                                </p>
                            </Spoiler>

                            <div className='m-6'></div>
                            <Link to="/About">
                                <Button className='mt-4' color="orange" radius="md" size="lg">
                                    Подробнее...
                                </Button>
                            </Link>

                        </Grid.Col>
                        <Grid.Col span={2}></Grid.Col>
                        <Grid.Col span={4}>
                            <img width={"100%"} src={AboutImg} alt="" />
                        </Grid.Col>
                    </Grid>
                </div>

                <div className='mt-8'>
                    <Space h="xl" />
                    <Center style={{ width: "100%" }}>
                        <h1 className='f-4 fw-4'>Category</h1>
                    </Center>
                    <Space h="xl" />
                    <Center style={{ width: "100%", height: "10px" }}>
                        <hr style={{ width: "300px", height: "3px", backgroundColor: "orange", border: "none" }} />
                    </Center>
                    <Space h="xl" />

                    <Container size={"lg"}>
                        <Grid gutter="md" justify="center" >
                            {
                                data.map((v, i) => {
                                    return (
                                        <Grid.Col key={i} md={6} lg={4}>
                                            <CardsFood v={v} i={i} />
                                        </Grid.Col>
                                    )
                                })
                            }
                        </Grid>
                    </Container>
                </div>
            </Container>

        </div>
    )
}

export default Main