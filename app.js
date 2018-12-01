const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))

console.log('------ \tStart\t ------');
console.log('\n\n');

class Process{
    constructor(name,phase) {
        this.name=name;
        this.phase=phase;
    }
}
//Develop Project Charter
let developProjectCharter = new Process('Develop Project Charter','Initiating')

console.log('Name','\t',developProjectCharter.name)
console.log('Phase','	',developProjectCharter.phase);

console.log('\n\n');
console.log('------ \tEnd\t ------');
