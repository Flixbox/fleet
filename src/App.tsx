import {
  MantineProvider,
  Container,
  Box,
  SimpleGrid,
  Text,
} from "@mantine/core"
import { useEffect, useState } from "react"
import { addCar, fetchCars } from "./api"
import CarForm, { CarFormData } from "./CarForm"
import CarList from "./CarList"
import { Car } from "./types"

const App = () => {
  const [cars, setCars] = useState<Car[]>([])

  useEffect(() => {
    ;(async () => {
      const cars: Car[] = await fetchCars()
      setCars(cars)
    })()
  }, [])

  const handleAddCar = async (car: CarFormData) => {
    const newCar = await addCar(car)
    setCars([...cars, newCar])
    return newCar
  }

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: "dark" }}
    >
      <Box m="md" />
      <Container>
        <SimpleGrid cols={1}>
          <Box>
            <CarForm onSubmit={handleAddCar} />
          </Box>
          <CarList cars={cars} />
        </SimpleGrid>
      </Container>
    </MantineProvider>
  )
}

export default App
