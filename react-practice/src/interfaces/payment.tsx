export interface Payment {
    id: number | null
    paymentName: string
    cost: number
    category: string
    payedBy: string
    payedById: number
    date: string
}

export interface Category {
    id: number | null
    name: string
}