import cors from 'cors';
import express, { Application } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { UserRoutes } from './app/modules/user/user.router';
const app: Application = express();
//cors
app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//tasting
//Application Routes
app.use('/api/v1/users/', UserRoutes);

//Testing

// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   //   throw new ApiError(400, 'Internal error')
//   console.log(x)

//   // next('Ore baba error')
// })

//Global Error handler
app.use(globalErrorHandler);

export default app;
