import express from "express";
import fileDb from "../fileDbMethod";
import {MessageId} from "../types";


const productsRouter = express.Router();

productsRouter.get("/", async (req: express.Request, res: express.Response) => {
    const getMessages = await fileDb.getItems();//получаем все обьекты

    console.log(getMessages);
    res.send(getMessages);

});


productsRouter.get('/:id',async (req: express.Request, res: express.Response) => {
    const getMessages = await fileDb.getItems();// получам все продукты {} {} {} {}
    const messageFideId = getMessages.find((message) => message.id === req.params.id);
// находим по айди из парамс
    res.send(messageFideId);
});


productsRouter.post("/", async (req: express.Request, res: express.Response) => {
    const message: MessageId = {
        message:req.body.message,
    }; //создайем новый продукт
    const saveProduct = await fileDb.addItem(message);//сохраняем
    res.send(saveProduct);//выводим
});

export default productsRouter;