import "dotenv/config";
import { connect } from "mongoose";

// const NODE_ENV = process.env.NODE_ENV

export async function dbConnect(): Promise<void> {
  try {
    const DB_URI = <string>process.env.DB_URI;
    await connect(DB_URI);
    console.log("Conexión a la base de datos establecida");
  } catch (error) {
    console.log("Error al conectar a la base de datos");
  }
}
