import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import usersRouter from './app/modules/users/users.router'
const app: Application = express()
//cors
app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//tasting
//Application Routes
app.use('/api/v1/users/', usersRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app
