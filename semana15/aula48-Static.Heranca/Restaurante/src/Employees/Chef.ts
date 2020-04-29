import { Employee } from './Employee'
import { Dish } from '../Dishies/Dish'

export class Chef extends Employee{

    removeDishFromMenu(dishies: Dish[], dishName: Dish){
        return dishies = dishies.filter((dish: Dish) => dish !== dishName)
    }

}