import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Ruta de prueba
app.get("/", (req: Request, res: Response) => {
  res.send("¡Servidor con Express y TypeScript funcionando! 🚀");
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
