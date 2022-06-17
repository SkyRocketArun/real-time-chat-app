const app = require('express')();

const server = require('http').createServer(app);



const cors = require('cors');
app.use(cors());

const io = require('socket.io')(server,{
    cors: {
        origin: "http://localhost:3000",
        method :['GET', 'POST']
      }
})
io.on('connection' , (socket) =>{
console.log('socketss : ' , socket);
console.log('socket is connected ');

//EVENTS
socket.on('start', (payload)=>{
    console.log('socket',payload)
    io.emit('start', payload )
});

socket.on('chat' , (payload)=>{
    console.log('what is payload', payload);
    io.emit('chat', payload )
    
})

})

// app.listen(5000, () => console.log('server is start.....'));
server.listen(5000,()=>{
    console.log('server is listen on port 5000 .......')
})               