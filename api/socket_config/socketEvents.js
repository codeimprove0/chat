module.exports = {

    /**
     * 
     * @param {*} socketIoObj : is initial socketIo connection Object
     * @param {*} socketObj : is initial socketIo connection active instance
     */
    init(socketIoObj, socketObj){
        this.socketIoObj = socketIoObj
        this.socketObj = socketObj
        
        if(this.socketObj){
            this.createMessage()
            this.disconnect()
        }

    },


    createMessage (message) { 
        this.socketObj.on('createMessage', (message, callback) => {
            this.socketIoObj.emit('newMessage', message);
            this.socketObj.emit('newMessage', 'message message message ');
            callback({
                data: message
            });
        });
    },

     disconnect() {
        this.socketObj.on('disconnect', () => {
            // this.socketIoObj.emit('newMessage', 'disconnected');
        });
    },

    createMessageAdmin(msg) {
        this.socketIoObj.emit('newMessage', msg);

    },


    /**
     * Update Auction Monitor List
     */
    updateChatMsj(params) {
        this.socketIoObj.emit('communication', params)
    },

    /**
     * Update Bids of Auction Car
     */
    updateBidsOfAuctionCar(auctionBidData) {
        this.socketIoObj.emit('updateAuctionBidsData', auctionBidData)
    }

}