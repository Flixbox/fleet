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
  if (!res.ok) {
    showNotification({
      color: "red",
      title: `Response code ${res.status}`,
      message: "Try changing your data fields and try again!",
    })
    throw new Error("Response data not OK")
  }
  return res.json()
}
