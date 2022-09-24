import { EnumValues } from "enum-values"
import {
  MantineProvider,
  Container,
  Box,
  Paper,
  TextInput,
  Group,
  Button,
  Select,
} from "@mantine/core"
import { useForm } from "@mantine/form"
import { Car, Status } from "./types"

interface CarFormProps {
  onSubmit: (car: Car) => void
}

interface CarForm {
  brand: Car["brand"]
  licensePlate: Car["licensePlate"]
  status: Status
}

const CarForm = ({ onSubmit }: CarFormProps) => {
  const form = useForm<CarForm>({
    initialValues: {
      brand: "",
      licensePlate: "",
      status: Status.available,
    },
  })

  return (
    <Paper shadow="xs" withBorder p="md">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          withAsterisk
          label="Brand"
          placeholder="Corvette 1"
          {...form.getInputProps("brand")}
        />

        <Select
          label="Status"
          placeholder="Pick one"
          data={EnumValues.getNames(Status).map((status) => ({
            value: status,
            label: status,
          }))}
          searchable
          {...form.getInputProps("status")}
        />

        <Group position="right" mt="md">
          <Button type="submit">Add new car</Button>
        </Group>
      </form>
    </Paper>
  )
}

export default CarForm
