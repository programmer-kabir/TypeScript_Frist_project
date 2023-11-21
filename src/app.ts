import express, { Application, Request, Response } from 'express'
const app:Application = express()
import cors from 'cors'

// middlware
app.use(express.json())
app.use(cors())


app.get('/', (req:Request, res:Response) => {
  const a = 65;
  res.send(a)
})

export default app