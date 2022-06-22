import { atom } from 'recoil'
import { Payment, Category } from '../interfaces/payment'

const categories = [
    {
        id: 1,
        name: 'food',
    },
    {
        id: 2,
        name: 'lent',
    },
    {
        id: 3,
        name: 'tranceportation',
    },
    {
        id: 3,
        name: 'tranceportation',
    },
]


const payments = [
    {
        paymantName: 'lunch',
        cost: 2500,
        category: 'food',
        payedBy: 'Joe',
        payedById: 1,
        date: '2022-07-01',
    },
    {
        paymantName: 'train',
        cost: 2000,
        category: 'transportation',
        payedBy: 'Ann',
        payedById: 2,
        date: '2022-07-02',
    },
    {
        paymantName: 'gass',
        cost: 1000,
        category: 'transportation',
        payedBy: 'Ann',
        payedById: 2,
        date: '2022-07-05',
    },
    {
        paymantName: 'movie',
        cost: 1500,
        category: 'free',
        payedBy: 'Joe',
        payedById: 1,
        date: '2022-07-09',
    },
]

export const paymentState = atom<Payment[]>({
    key: 'paymentState',
    default: payments.map((payment: any, index: number) => (
    {
        id: index,
        paymentName: payment.paymentName,
        cost: payment.cost,
        category: payment.category,
        payedBy: payment.payedBy,
        payedById: payment.payedById,
        date: payment.date,
    })),
})

export const categoryState = atom<Category[]>({
    key: 'categoryState',
    default: categories.map((category) => (
    {
        id: category.id,
        name: category.name,
    })),
})
