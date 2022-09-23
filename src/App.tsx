import { MantineProvider, Container, Box, SimpleGrid } from "@mantine/core"
import { useEffect, useState } from "react"
import { fetchCars } from "./api"
import CarForm from "./CarForm"
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

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: "dark" }}
    >
      <Box m={40} />
      <Container>
        <SimpleGrid cols={1}>
          <Box>
            <CarForm onSubmit={(car) => setCars([...cars, car])} />
          </Box>
          <CarList cars={cars} />
        </SimpleGrid>
      </Container>
    </MantineProvider>
  )
}

export default App
