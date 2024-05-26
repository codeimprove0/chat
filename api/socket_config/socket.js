 
const io = require('socket.io');
const socketEvents = require('./socketEvents');

module.exports = {

    init(server){
        this.socketIo = io(server, {
                cors: {
                  origin: '*',
                  credentials: true
                }
              })

        this.onConnection()
    },

    onConnection() {
        this.socketIo.on('connection', (socket) => {
            this.socketEventsObj = socketEvents.init(this.socketIo, socket)

            socket.on("connected", function(data) {
                // console.log('datadata', data)
            });
        });   
    }

}