document.getElementById('button').addEventListener('click', loadData);

function loadData(){
    
    // xhr object ready state values
    // 0: request not initialized
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready

    //create an xhr object
    const xhr = new XMLHttpRequest();
    
    //open 
    xhr.open('GET', 'data.txt', true); //third param true will be calling async-ly
   
    console.log('READYSTATE', xhr.readyState);

    // Optional - used for spinners/loading icons

    xhr.onprogress = function(){
        console.log('READYSTATE', xhr.readyState);
    }

    xhr.onreadystatechange = function(){
        //console.log('READYSTATE', xhr.readyState);

        if(this.status === 200 && this.readyState === 4){
            //console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }

    // xhr.onload = function(){
    //     console.log('READYSTATE', xhr.readyState);
    //     if(this.status === 200){
    //         console.log(this.responseText);
    //     }
    // }
    
    xhr.onerror = function(){
        console.log('ERROR', 'Request Error..');
    }

    xhr.send();

    


}