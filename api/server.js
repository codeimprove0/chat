const express = require('express')
const socket = require('socket.io')
const app = express();

const cors = require('cors');

const PORT = 4047;

app.use(cors({origin:'http://localhost:3000'}));

 

const server =  app.listen(PORT,()=>{
    console.log('server start at '+PORT)
})


const socketIO  = require('./socket_config/socket');
const socketIoObj = socketIO.init(server)

//const io = socket(server);
// const io = socket(server,{
//     cors:{
//         origin:'*'
//     }
// });


const BidSocketEvents  = require("./socket_config/socketEvents")

app.get('/test',(req,resp)=>{
  
    BidSocketEvents.updateChatMsj([{id: req.query?.id}])
    resp.send("yes ha")
})


// io.on('connection',(socket)=>{
//     console.log(socket.id)

//     socket.on('join_room',(data)=>{
//         console.log('Join ROOM:-',data)
//         socket.join(data);
//     })
//     //{room:'',name:'',message:''}
//     socket.on('send_message',(data)=>{
//         console.log('message send..',data)
//         socket.to(data.room).emit('receive_message',data);
//     }) 

//     // socket.on('typing1',(msj)=>{
//     //     io.emit('typing',msj)
//     // })
    
//     socket.on('sendTyping',(data)=>{
//         console.log(data.name+' is typing in '+data.room)
//         io.to(data.room).emit('typing',data)
//     })

//     socket.on('disconnect',()=>{
//         console.log('User Disconnect')
//     })

// })

