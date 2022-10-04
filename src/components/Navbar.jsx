import React, { useState } from 'react'
import Logo from "../assets/img/logo.png"
import { Container, Button, TextInput } from '@mantine/core'
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

import { changeSearchName, searchFoods } from "../features/GetFoods"

function Navbar() {
    const [value, setValue] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const postValue = () => {
        dispatch(changeSearchName(value))
        dispatch(searchFoods(value))
        navigate("/Search")
        setValue("")
    }

    return (
        <div className='p-2'>
            <Container size={"xl"} px="xl">
                <div className='flex content-between items-center'>
                    <div className='flex items-center'>
                        <img width={"30px"} height={"30px"} src={Logo} alt="" />
                        <span className='ml-2 f-2'>Point</span>
                    </div>
                    <div className='flex items-center'>
                        <ul className='flex list-none'>

                            <li className='m-4'>
                                <Link to="/">
                                    Home
                                </Link>
                            </li>
                            <li className='m-4'>
                                <Link to="/About">
                                    About
                                </Link>
                            </li>
                            <li className='m-4'>
                                <a href="">
                                    Menu
                                </a>
                            </li>
                            <li className='m-4'>
                                <Link to="/Basket">
                                    Basket
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='flex items-center'>
                        <TextInput
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            placeholder="Foods name"
                            withAsterisk
                        />
                        <Button onClick={() => postValue()} color="orange" radius="" size="sm">
                            Search
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar