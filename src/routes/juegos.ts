/**
 * ENRUTADOR DE NOTAS
 */

// Cargamos librerías, podemos usar la sitaxis EM6: import { Router } from 'express';
import express from 'express';
import juegosController from '../controllers/juegos';
import { auth, owner } from '../middlewares/auth';

// Middleware
//  auth, grant(['ADMIN']), si no se pone gran, es porque es que esta implícito role(['user'])

// Cargamos el enrutador
const juegosRouter = express.Router();

// GET Listar todos los elementos: Cualquiera
juegosRouter.get('/', juegosController.findAll);

// GET Obtiene un elemento por por ID: Cualquiera
juegosRouter.get('/:id', juegosController.findById);

// POST Añadir Elemento. Solo autenticados
juegosRouter.post('/', juegosController.add);

// PUT Modifica un elemento por ID. Solo autenticados y nos pertenece
// juegosRouter.put('/:id', auth, owner, juegosController.update);

// DELETE Elimina un elemento por ID. Solo autenticados y nos pertenece
// juegosRouter.delete('/:id', auth, juegosController.remove);

// Exprotamos el módulo
export default juegosRouter;
