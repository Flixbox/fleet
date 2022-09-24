import { CarFormData } from "./CarForm"
import { Car } from "./types"

const apiUrl = process.env.API_URL || ""

export const fetchCars = async (): Promise<Car[]> =>
  (await fetch(`${apiUrl}`)).json()

export const addCar = async (car: CarFormData): Promise<Car> =>
  (
    await fetch(`${apiUrl}/${car.id}`, {
      method: "PUT",
      body: JSON.stringify(car),
    })
  ).json()
