import React, { useState, useEffect } from 'react'
import Logo from "../assets/img/logo.png"
import { Container, Button, TextInput, Indicator, Modal, Select } from '@mantine/core'
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

import { changeSearchName, searchFoods } from "../features/GetFoods"
import axios from 'axios'

function Navbar() {
    const [opened, setOpened] = useState(false)
    const [value, setValue] = useState("")
    const [valueArea, setValueArea] = useState()
    const [area, setArea] = useState([])
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const item = useSelector((state) => state.add.data || [])


    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
            .then((res) => {
                console.log(res.data.meals)
                setArea(res.data.meals)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const newArray = area.map(item => {
        return { label: item.strArea, value: item.strArea };
    });

    const postValue = () => {
        dispatch(changeSearchName(value))
        dispatch(searchFoods(value))
        navigate("/Search/" + value)
        setValue("")
    }
    const Enter = (e) => {
        if (e.code == "Enter") {
            postValue()
        }
    }

    const AreaSearch = () => {
        console.log(valueArea)
        navigate("/Area/" + valueArea)
        setOpened(false)
    }
    return (
        <div className='p-2'>
            <Container size={"xl"} px="xl">
                <div className='flex content-between items-center'>
                    <div className='flex items-center'>
                        <Link to={"/"}>
                            <img width={"30px"} height={"30px"} src={Logo} alt="" />
                        </Link>
                        <span className='ml-2 f-2'>Point</span>
                    </div>
                    <div className='flex items-center'>
                        <ul className='flex list-none'>
                            <li className='m-4'>
                                <Link to="/">
                                    Home
                                </Link>
                            </li>
                            <li className='m-4' onClick={() => setOpened(true)}>
                                Area
                            </li>
                            <li className='m-4'>
                                <Indicator label={item.length} showZero={false} dot={false} overflowCount={999} inline size={22}>
                                    <Link to="/Basket">
                                        Basket
                                    </Link>
                                </Indicator>
                            </li>
                            <li className='m-4'>
                                <Link to="/About">
                                    About
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
                            onKeyDown={(e) => Enter(e)}
                        />
                        <Button onClick={() => postValue()} color="orange" radius="" size="sm">
                            Search
                        </Button>

                    </div>
                </div>
                <Modal
                    size={"md"}
                    opened={opened}
                    onClose={() => setOpened(false)}
                    overlayOpacity={0.55}
                    overlayBlur={3}
                >
                    <div className='flex items-end'>
                        <Select
                            searchable
                            label="Meals from area.
                        Click 'Enter'"
                            placeholder="Pick one"
                            onChange={setValueArea}
                            data={newArray}
                            maxDropdownHeight={400}
                            styles={(theme) => ({
                                item: {
                                    '&[data-selected]': {
                                        '&, &:hover': {
                                            backgroundColor:
                                                theme.colorScheme === 'dark' ? theme.colors.teal[9] : theme.colors.orange[1],
                                            color: theme.colorScheme === 'dark' ? theme.white : theme.colors.orange[9],
                                        },
                                    },

                                    '&[data-hovered]': {
                                        backgroundColor:
                                            theme.colorScheme === 'dark' ? theme.colors.teal[9] : theme.colors.orange[2],
                                        color: theme.colorScheme === 'dark' ? theme.white : theme.colors.orange[10],
                                    },
                                },
                            })}
                            style={{ width: "80%" }}
                        />
                        <Button
                            onClick={() => AreaSearch()}
                            color="orange"
                            radius="sm" >
                            Settings
                        </Button>
                    </div>
                </Modal>
            </Container>
        </div>
    )
}

export default Navbar