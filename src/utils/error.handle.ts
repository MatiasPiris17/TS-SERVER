import { Response } from "express";

export const handleHttp = (res: Response, error: any) => {
    res.status(500)
    res.json({ error });
}