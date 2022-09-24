export enum Status {
  "available",
  "in-maintenance",
  "out-of-service",
}

export interface Car {
  brand: string
  createdAt: string
  id: string
  lastUpdatedAt: string
  licensePlate: string
  status: Status
}
