function easyHTTP(){
    this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request
easyHTTP.prototype.get = function(url, callback){
    this.http.open('GET', url, true);
    let self = this;
    this.http.onload = function(){
        //using 'this' keyword will not work inside the function due to scope limit
        if(self.http.status === 200){
            callback(null, self.http.responseText); //we cannot just return it, null here is for error
        }else{
            callback('Error: ' + self.http.status);
        }
    }
    
    this.http.send();
}

// Make an HTTP POST Request
easyHTTP.prototype.post = function(url, data, callback){
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this;
    this.http.onload = function(){
        callback(null, self.http.responseText);
    }

    this.http.send(JSON.stringify(data)); //converting javascript object into JSON string
}

// Make an HTTP PUT Request
easyHTTP.prototype.put = function(url, data, callback){
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this;
    this.http.onload = function(){
        callback(null, self.http.responseText);
    }

    this.http.send(JSON.stringify(data)); //converting javascript object into JSON string
}

// Make an HTTP DELETE Request
easyHTTP.prototype.delete = function(url, callback){
    this.http.open('DELETE', url, true);
    let self = this;
    this.http.onload = function(){
        if(self.http.status === 200){
            callback(null, 'Post Deleted');//response will be empty coz we are returning the deleted post
        }else{
            callback('Error: ' + self.http.status);
        }
    }
    
    this.http.send();
}