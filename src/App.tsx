import { MantineProvider, Container, Box } from "@mantine/core"
import { useState } from "react"
import CarForm from "./CarForm"
import CarList from "./CarList"
import { Car } from "./types"

const App = () => {
  const [cars, setCars] = useState<Car[]>([])
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: "dark" }}
    >
      <Box m={40} />
      <Container>
        <CarForm onSubmit={(car) => setCars([...cars, car])} />
        <CarList cars={cars} />
      </Container>
    </MantineProvider>
  )
}

export default App
