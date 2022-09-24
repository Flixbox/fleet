import {
  MantineProvider,
  Container,
  Box,
  SimpleGrid,
  Text,
} from "@mantine/core"
import { NotificationsProvider, showNotification } from "@mantine/notifications"
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
    try {
      const newCar = await addCar(car)
      setCars([...cars, newCar])
      showNotification({
        title: `Car with ID ${newCar.id} added!`,
        message: `Check the list to see the details.`,
      })
      return newCar
    } catch (e: any) {
      showNotification({
        color: "red",
        title: e.message,
        message: "Try changing your data fields and try again!",
      })
    }
  }

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: "dark" }}
    >
      <NotificationsProvider>
        <Box m="md" />
        <Container>
          <SimpleGrid cols={1}>
            <Box>
              <CarForm onSubmit={handleAddCar} />
            </Box>
            <CarList cars={cars} />
          </SimpleGrid>
        </Container>
      </NotificationsProvider>
    </MantineProvider>
  )
}

export default App
