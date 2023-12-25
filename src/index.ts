import {initServer} from './app'

async function init() {
    const app=await initServer()
   app.listen(8000,()=>console.log(`serevr started at 8000`))
}

init()