import {promises as fs} from 'fs';

const fileName = './test.txt'

const run = async () => {
    try{
        await fs.writeFile(fileName, JSON.stringify('Hello World.'))
        console.log('file was saved!');
    }catch(err){
        console.log(err)
    }
};

run().catch(err => {console.log(err)});