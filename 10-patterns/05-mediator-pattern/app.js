class User{
    constructor(name) {
        this.name = name;
        this.chatroom = null;
    }
    send(message, to){
        this.chatroom.send(message, this, to);
    }
    receive(message, from){
        console.log(`${from.name} to ${this.name}: ${message}`);
    }
}

class Chatroom{
    
    register(user){
        let users = {};
        users[user.name] = user;
        user.chatroom = this;
        
    }
    send(message, from, to){
        if(to){
            //single user message
            to.receive(message, from);
        }else{
            //broadcast to all
            for(key in users){
                if(users[key] !== from){
                    users[key].receive(message, from);
                }
            }
        }
    }
}

const brad = new User('Brad');
const jeff = new User('Jeff');
const sara = new User('Sara');

const chatroom = new Chatroom();
chatroom.register(brad);
chatroom.register(jeff);
chatroom.register(sara);

brad.send('Hello Jeff', jeff);
sara.send('Hello Brad, you are the best dev ever!', brad);
jeff.send('Hi Everyone!');