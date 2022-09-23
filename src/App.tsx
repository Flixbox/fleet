import { MantineProvider, Container, Box } from "@mantine/core"

const App = () => (
  <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={{ colorScheme: "dark" }}
  >
    <Box m={40} />
    <Container>Hello World!</Container>
  </MantineProvider>
)

export default App
