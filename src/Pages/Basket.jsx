import React, { useState, useEffect } from 'react'
import { Container, Grid, Button, Drawer, TextInput, Title, Checkbox, ScrollArea } from "@mantine/core"
import Cards from '../components/Cards'
import { useDispatch, useSelector } from 'react-redux'
import { postMessage } from '../features/Basket'

function Basket() {
  const dispatch = useDispatch()
  const [data, setData] = useState(JSON.parse(localStorage.getItem("basket")) || "[]")
  const items = useSelector((state) => state.add.data)
  const [opened, setOpened] = useState(false)
  const [cheked, setCheked] = useState([])
  const [name, setName] = useState("")
  const [adres, setAdres] = useState("")
  const [number, setNamber] = useState("")

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("basket")))
  }, [items])

  const Checked = (id) => {
    setCheked(old => [...old, data.filter((item) => item.idMeal == id)])
  }

  const postOrder = () =>{
    dispatch(postMessage({nameUser: name, adresUser: adres, numberUser: number,foods: cheked}))
  }

  return (
    <div className='min-h9'>
      <Container size={"xl"} px={"xl"}>
        <div className='flex items-center content-between m-4'>
          <h1>Корзинка</h1>
          <Button
            color="orange"
            radius="lg"
            size="lg"
            onClick={() => setOpened(true)}
          >
            Заказать
          </Button>
        </div>
        <Grid>
          {
            data.map((items, index) => {
              return (
                <Grid.Col key={index} span={4}>
                  <Cards v={items} i={index} icon={true} />
                </Grid.Col>
              )
            })
          }
        </Grid>

      </Container>

      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Order"
        padding="xl"
        size="xl"
        position="right"
      >
        <Title order={1}>Оформить заказ</Title>
        <div className='mb-4' />
        <TextInput
          placeholder="Your name"
          label="Full name"
          size="md"
          withAsterisk
          onChange={(e) => setName(e.target.value)}
        />
        <div className='mb-4' />
        <TextInput
          placeholder="Adres"
          label="Your adres"
          size="md"
          withAsterisk
          onChange={(e) => setAdres(e.target.value)}
        />
        <div className='mb-4' />
        <TextInput
          placeholder="0777998877"
          label="Your phone number"
          size="md"
          type={"number"}
          withAsterisk
          onChange={(e) => setNamber(e.target.value)}
        />
        <div className='mb-4' />
        <Title order={3}>Foods:</Title>
        <ScrollArea style={{ height: 270 }}>
          {
            data.map((items, index) => {
              return (
                <div key={index} className='flex content-between items-center w-100 mb-2'>
                  <Checkbox
                    label={items.strMeal}
                    size="lg"
                    className='m-2'
                    color="orange"
                    onChange={() => Checked(items.idMeal)}
                  />
                  <img width={"70px"} src={items.strMealThumb} alt="" />
                </div>
              )
            })
          }
        </ScrollArea>
        <div className='mt-4' />
        <Button onClick={() => postOrder()} color="orange" radius="lg" size="md">
          Заказать
        </Button>
      </Drawer>
    </div>
  )
}

export default Basket