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
  id: Car["id"]
  brand: Car["brand"]
  licensePlate: Car["licensePlate"]
  status: Car["status"]
}

const CarForm = ({ onSubmit }: CarFormProps) => {
  const form = useForm<CarForm>({
    initialValues: {
      id: "",
      brand: "",
      licensePlate: "",
      status: Status.available,
    },
  })

  return (
    <Paper shadow="xs" withBorder p="md">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          required
          label="ID"
          placeholder="123456789"
          {...form.getInputProps("id")}
        />

        <TextInput
          required
          label="Brand"
          placeholder="Corvette 1"
          {...form.getInputProps("brand")}
        />

        <TextInput
          required
          label="License plate"
          placeholder="ABC-123"
          {...form.getInputProps("licensePlate")}
        />

        <Select
          label="Status"
          placeholder="Pick one"
          data={EnumValues.getNames(Status).map((status) => ({
            value: status,
            label: status,
          }))}
          searchable
          required
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
