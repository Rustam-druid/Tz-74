import express from "express";
import routerRoutes from "./routes/routes";
import fileDbMethod from "./fileDbMethod";
import {promises as fs} from 'fs';

const app = express();
const port = 9000;

app.use(express.json());

app.use('/messages', routerRoutes)



const run  = async () => {
    try{
        await fileDbMethod.init();

        app.listen(port, () => {
            console.log(`server started on port. http://localhost:${port}`);
        })
    }catch(e){
        console.log(e)
    }
}

run().catch(err => {console.log(err)});


