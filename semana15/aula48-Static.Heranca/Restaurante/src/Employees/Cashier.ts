import { Employee } from './Employee'
import { Dish } from '../Dishies/Dish'

export class Cashier extends Employee {

    calculateBill(dishies: Dish[]): number {
        return dishies.reduce((prevVal, dish) => {
            return prevVal + dish.getPrice()
        }, 0)
    }

}