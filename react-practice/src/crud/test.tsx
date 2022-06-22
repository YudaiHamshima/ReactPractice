import { useRecoilState, useRecoilValue } from 'recoil'
import { categoryState, paymentState } from '../recoil/atoms'
import { useNavigate } from 'react-router-dom'
import { Button, Table, Typography } from '@mui/material'

function Test() {
    const payments = useRecoilValue(paymentState)
    const navigate = useNavigate()

    const payments1 = payments.filter(payment => payment.payedById === 1)
    const payments2 = payments.filter(payment => payment.payedById === 2)

    const GoCreatePage = () => {
        console.log(payments)
        navigate("../create")
    }

    const GoAllPage = () => {
        navigate("../all")
    }

    return(
        <>
            <Typography 
                align="center"
                variant="h2"
            >
                payed: yen
            </Typography>
            <Typography 
                align="center"
                variant="h2"
            >
                payed: yen
            </Typography>



           
            <Button variant="contained" onClick={GoCreatePage}>Go Create</Button>
            <Button onClick={GoAllPage}>Go Index</Button>
            

            {payments1.map((payment: any) => (
                <Typography 
                align="center"
                variant="h2"
            >
                payed: {payment.cost} yen  by {payment.payedBy}
                </Typography>
            ))}
            {payments2.map((payment: any) => (
                <Typography 
                align="center"
                variant="h2"
            >
                payed: {payment.cost} yen  by {payment.payedBy}
                </Typography>
            ))}
        </>
    )
}

export default Test