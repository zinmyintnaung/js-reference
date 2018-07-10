// Constructor function
function EventObserver(){
    this.observers = [];
}

EventObserver.prototype = {
    subscribe: function(fn){ //fn is a function, we are subscribing function
        this.observers.push(fn);
        console.log(`You are now subscribe to ${fn.name}`);
    },
    unsubscribe: function(fn){
        
        this.observers = this.observers.filter(function(item){
            if(item !== fn){
                return item;
            }
        });
        console.log(`You are now unsubscribe from ${fn.name}`);
    },
    fire: function(){
        this.observers.forEach(function(item){
            item.call();
        });
    }
}

const click = new EventObserver();

// Event listeners
document.querySelector('.sub-ms').addEventListener('click', function(){
    click.subscribe(getCurMilliseconds);
});
document.querySelector('.unsub-ms').addEventListener('click', function(){
    click.unsubscribe(getCurMilliseconds);
});
document.querySelector('.fire').addEventListener('click', function(){
    click.fire();
});

document.querySelector('.sub-s').addEventListener('click', function(){
    click.subscribe(getCurSeconds);
});
document.querySelector('.unsub-s').addEventListener('click', function(){
    click.unsubscribe(getCurSeconds);
});

// Click handler
const getCurMilliseconds = function(){
    console.log(`Current milliseconds: ${new Date().getMilliseconds()}`);
}

// Click handler
const getCurSeconds = function(){
    console.log(`Current seconds: ${new Date().getSeconds()}`);
}