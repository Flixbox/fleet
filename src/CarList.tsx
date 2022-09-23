import { MantineProvider, Container, Box } from "@mantine/core"
import { useState } from "react"
import { Car } from "./types"

interface CarListProps {
  cars: Car[]
}

const CarList = ({ cars }: CarListProps) => {
  return <>Hello List!</>
}

export default CarList
