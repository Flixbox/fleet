const apiUrl = process.env.API_URL || ""

export const fetchCars = async () => (await fetch(`${apiUrl}`)).json()
