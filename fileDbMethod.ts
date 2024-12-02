import { promises as fs } from 'fs';
import { MessageId, Messages } from "./types";
import path from 'path';

const fileName = './db.json';
const messagesDir = './messages';
let data: Messages[] = [];
const fileNameTime = new Date().toISOString();

const fileDb = {
    async init() {
        try {
            const fileContent = await fs.readFile(fileName);
            data = JSON.parse(fileContent.toString());
        } catch (error) {
            console.log(error);
        }
    },
    async getItems() {
        return data;
    },
    async addItem(item: MessageId) {
        try {
            const id = new Date().toISOString();
            const message = { id, ...item };


            const messageFileName = path.join(messagesDir,fileNameTime);
            await fs.writeFile(messageFileName, JSON.stringify(message));


            data.push(message);
            await this.save();
            return message;
        } catch (error) {
            console.log(error);
        }
    },
    async save() { // Перезаписываем
        return fs.writeFile(fileName, JSON.stringify(data));
    }
};

export default fileDb;
