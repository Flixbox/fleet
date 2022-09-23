import { MantineProvider, Container, Box, Paper, Text } from "@mantine/core"
import { useState } from "react"
import { Car } from "./types"

interface CarListProps {
  cars: Car[]
}

const CarList = ({ cars }: CarListProps) => {
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
          </Paper>
        )
      )}
    </>
  )
}

export default CarList
