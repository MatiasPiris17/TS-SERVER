import { getCars, insertCar, getCar } from "../services/item.service";
import { handleHttp } from "../utils/error.handle";
import { Request, Response } from "express";

const getItem = async({params}: Request, res: Response) => {
    try {
        const response = await getCar(params.id);
        const data = response ? response : 'Item no encontrado';
        res.json(data);
    } catch (e) {
        handleHttp(res, 'Error al obtener el item');
    }
};

const getItems = async(req: Request, res: Response) => {
    try {
        const responseItem = await getCars();
        res.json(responseItem);
    } catch (e) {
        handleHttp(res, 'Error al obtener los items');
    }
};
const postItem = async ({body}: Request, res: Response) => {
    try {
        const responseItem = await insertCar(body); 
        res.json(responseItem);
    } catch (e) {
        handleHttp(res, 'Error al crear el item');
    } 
};

export { getItem, getItems, postItem };
