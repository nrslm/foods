import React from 'react'
import { Carousel } from '@mantine/carousel'
import { Container, createStyles, Button, Spoiler } from "@mantine/core"
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changeCategoryName } from '../features/GetFoods'
import Autoplay from 'embla-carousel-autoplay'



function CarouselMain() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const data = useSelector((state) => state.get.data)

    const autoplay = useRef(Autoplay({ delay: 3000 }))

    const goToDetails = (v) =>{
        dispatch(changeCategoryName(v))
        navigate("/Foods")
    } 

    return (
        <div className='mb-4'>
            <Container
                size={"xl"}
                px="xl"
            >
                <div className='h-9'>
                    <Carousel
                        withIndicators
                        plugins={[autoplay.current]}
                        onMouseEnter={autoplay.current.stop}
                        onMouseLeave={autoplay.current.reset}

                    >
                        {
                            data.map((item, index) => {
                                return (
                                    <Carousel.Slide key={index}>
                                        <div className='flex content-evenly h-9 items-center'>
                                            <div className='w-48'>
                                                <img width={"80%"} src={item.strCategoryThumb} alt="" />
                                            </div>
                                            <div className='w-48'>
                                                <span className='f-2'>#1 OF THIS WEEK</span>
                                                <div className='mt-6'></div>
                                                <h1 className='f-6 mb-4 fw-4'>{item.strCategory}</h1>
                                                <Spoiler maxHeight={150} showLabel="Show more" hideLabel="Hide">
                                                    <span>{item.strCategoryDescription}</span>
                                                </Spoiler>
                                                <div className='m-4'></div>
                                                <Button onClick={() => goToDetails(item.strCategory)} className='mt-4' color="orange" radius="md" size="lg">
                                                    Details
                                                </Button>
                                            </div>
                                        </div>
                                    </Carousel.Slide>
                                )
                            })
                        }


                    </Carousel>
                </div>
            </Container>
        </div>
    )
}

export default CarouselMain