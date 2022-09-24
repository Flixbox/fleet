import { showNotification } from "@mantine/notifications"
import { CarFormData } from "./CarForm"
import { Car } from "./types"

const apiUrl = process.env.API_URL || ""

export const fetchCars = async (): Promise<Car[]> =>
  (await fetch(`${apiUrl}`)).json()

export const addCar = async (car: CarFormData): Promise<Car> => {
  const res = await fetch(`${apiUrl}/${car.id}`, {
    method: "PUT",
    body: JSON.stringify(car),
  })
  if (!res.ok) throw new Error(`Response code ${res.status}`)

  return res.json()
}

export const deleteCar = async (id: Car["id"]) => {
  const res = await fetch(`${apiUrl}/${id}`, {
    method: "DELETE",
  })
  if (!res.ok) throw new Error(`Response code ${res.status}`)
  return
}
