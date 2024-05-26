import { Component } from 'react'; 
import socketIOClient from "socket.io-client";

class Socket extends Component {
    
    _BiddingSocket = '';
    
    constructor(props) {
        
        super(props);

        this.state = {
            auctionId: '',
            dealerName: '',
            groupJoined: false,
            users:[]
        }


    }
    

    componentDidMount = () => {

        this.enableSocketEvents()
       
    }

    enableSocketEvents = () => { 

        let socketServer =  'http://localhost:4047/'

        this._BiddingSocket = socketIOClient(socketServer, {
            upgrade: false,
            // reconnection: true
        });
 

        this.disconnect(this._BiddingSocket); 
        this.incomingResponse(this._BiddingSocket);
 
    } 
 
    incomingResponse = (socket) => {
        socket.on('communication',  (data) => {
            
            this.props.updateResponse(data);

        });
    }
 
    /**
     * SOCKET DISCONNECT
     * @param {*} socket 
     */
    disconnect = (socket) => {
        socket.on('disconnectSocket',  () => {
            // console.log('Connection lost from server.');
        });
    }


    render() {
        return (
            ''
        )
    }
}

export default Socket;