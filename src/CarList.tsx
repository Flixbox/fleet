import {
  MantineProvider,
  Container,
  Box,
  Paper,
  Text,
  Group,
  Button,
} from "@mantine/core"
import { useState } from "react"
import { Car } from "./types"

interface CarListProps {
  cars: Car[]
  onDelete: (id: Car["id"]) => void
}

const CarList = ({ cars, onDelete }: CarListProps) => {
  return (
    <>
      <Text weight="bold">All cars</Text>
      {cars.map(
        ({ brand, createdAt, id, lastUpdatedAt, licensePlate, status }) => (
          <Paper key={id} shadow="xs" withBorder p="md">
            <Text>Brand: {brand}</Text>
            <Text>createdAt: {createdAt}</Text>
            <Text>lastUpdatedAt: {lastUpdatedAt}</Text>
            <Text>licensePlate: {licensePlate}</Text>
            <Text>status: {status}</Text>
            <Text>id: {id}</Text>
            <Group position="right" mt="md">
              <Button
                color="red"
                onClick={() => onDelete(id)}
                data-testid={`delete-${id}`}
              >
                Delete car
              </Button>
            </Group>
          </Paper>
        )
      )}
    </>
  )
}

export default CarList
