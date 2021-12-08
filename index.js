const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    return ;
})

app.listen(port, () => console.log(`Port : http://localhost:${port}`))

const blocktime = [
    {
        id: 1,
        startTime: 0,
        endTime: 120
    }
]
function handler(input,duration){
        function increase(){
            const result = duration + input;
            
            blocktime.forEach(value => {
                blocktime.push([
                    {
                        id : 2,
                        startTime: duration,
                        endTime: result
                    }
                ])
            });
            return blocktime;
        }
        return increase();
}
console.log(handler(60,220));
console.log(handler(30,150));