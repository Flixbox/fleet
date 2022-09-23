import { MantineProvider, Container, Box } from "@mantine/core"
import { useState } from "react"
import { Car } from "./types"

interface CarFormProps {
  onSubmit: (car: Car) => void
}

const CarForm = ({ onSubmit }: CarFormProps) => {
  return <>Hello Form!</>
}

export default CarForm
