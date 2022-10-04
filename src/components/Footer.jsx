import React from 'react'
import { Container, Grid, Text, Avatar } from "@mantine/core"
import Logo from "../assets/img/logo.png"
import { BrandInstagram, BrandYoutube, BrandFacebook, BrandTwitter } from 'tabler-icons-react'

function Footer() {
    return (
        <div className='mt-6 footer'>
            <hr />
            <div className='mt-6'></div>
            <Container >
                <Grid columns={24} justify="space-between">
                    <Grid.Col span={6}>
                        <div>
                            <div className='flex items-center'>
                                <Avatar src={Logo} alt="it's me" />
                                <Text className='ml-2' size="xl">Point</Text>
                            </div>
                            <div className='m-4'></div>
                            <div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsum molestiae
                                </p>
                            </div>
                        </div>
                    </Grid.Col>
                    <Grid.Col span={2}>

                    </Grid.Col>

                    <Grid.Col span={4}>
                        <h2 className=''>
                            About
                        </h2>
                        <p className='mt-2'>
                            Features
                        </p>
                        <p className='mt-2'>
                            Pricing
                        </p>
                        <p className='mt-2'>
                            Support
                        </p>
                        <p className='mt-2'>
                            Forums
                        </p>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <h2 className=''>
                            Project
                        </h2>
                        <p className='mt-2'>
                            Contribute
                        </p>
                        <p className='mt-2'>
                            Media assets
                        </p>
                        <p className='mt-2'>
                            Changelog
                        </p>
                        <p className='mt-2'>
                            Releases
                        </p>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <h2 className=''>
                            Community
                        </h2>
                        <p className='mt-2'>
                            Join Discord
                        </p>
                        <p className='mt-2'>
                            Follow on Twitter
                        </p>
                        <p className='mt-2'>
                            Email newsletter
                        </p>
                        <p className='mt-2'>
                            GitHub discussions
                        </p>
                    </Grid.Col>
                </Grid>

                <div className='mt-4'>
                </div>
                <hr />
                <div className='mt-6'>
                </div>
                <Grid justify="space-between" align="center">
                    <Grid.Col span={5}>
                        <p>© 2022 @Nrslm. All rights reserved.</p>
                    </Grid.Col>
                    <Grid.Col span={3}>
                        <div className='flex items-between conten-center'>
                            <BrandInstagram
                                size={35}
                                strokeWidth={2}
                                color={'white'}
                            />

                            <BrandYoutube
                                size={35}
                                strokeWidth={2}
                                color={'white'}
                            />
                            <BrandFacebook
                                size={30}
                                strokeWidth={2}
                                color={'white'}
                            />
                            <BrandTwitter
                                size={35}
                                strokeWidth={2}
                                color={'white'}
                            />
                        </div>
                    </Grid.Col>
                </Grid>
                <div className='mt-8 '></div>
            </Container>
        </div>
    )
}

export default Footer