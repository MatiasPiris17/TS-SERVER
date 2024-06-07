import { Car } from "../interfaces/car.interface";
import { itemModel } from "../models/item";

const getCar = async(id:string) => {
    const responseInsert = await itemModel.findOne({_id:id});
    return responseInsert 
}
const getCars = async() => {
    const responseInsert = await itemModel.find({});
    return responseInsert 
}

const insertCar = async(item: Car) => {
    const responseInsert = await itemModel.create(item); 
    return responseInsert
}


export { getCars, insertCar, getCar };