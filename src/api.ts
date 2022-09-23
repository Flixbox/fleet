const apiUrl = process.env.API_URL || ""

export const fetchCars = () => fetch(`${apiUrl}`)
