# Web Servers

When making a request. Its goes to the DNS server give a response on ip and port. Also HTTP/HTTPS server give a responses of JSON XML TXT and such. 

Request -> API -> Server

## HTTP Request Methods 
https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
- GET / POST / PUT / DELETE 

What is API (Application Programming Interface) is a software intermediary that allows two application to talk to each other. 

GET - Retrieve a single or collection `GET /friends` or `GET /friends/5`
POST - is for the collection `POST /messages` or `POST /messages/15`
DELETE - delete a single or collection `DELETE /friends` or `DELETE /friends/5`

POST - Minor update change
PUT - Replaces all representations of target with request payload

## 4 main parts HTTP REQUEST
- Method --> POST
- Path   --> /messages
- Body   --> JSON {text: "hello"}
  - Only for POST and PUT Request 
- Headers --> Host: facebook.com
  - Host header is required  
  - Optional metadata


## 3 main parts HTTP RESPONSE
- Headers    --> Content-Type: application/json
- Body       --> {text: 'What is good', photo:'wave.jpg'}   
- Status Code  --> 200 
  - https://developer.mozilla.org/en-US/docs/Web/HTTP/Status


## requestListener callback
Has two parameter a request (readable stream), response (writable stream).  
The request is what is passed in.  
The response what what is getting back.  
The response always needs to called end() when finished.  
```
readable.pipe(writable)
```


## API
An endpoint --> /friends
an paramatered endpoint / route  --> friends/12

## Same Origin Policy
What is the origin?  
https://www.google.com:433/maps/  
1. Protocol  
    https://   
2. Host  
    www.google.com  
3. Port  
   :443  

google origin   --->   facebook origin  
can write to fb, fb server decise what to do with that data  
cannot get data from fb  

## CORS
Cross Origin Resource Sharing  
- A relax version of same origin policy

response headers
- **access controll allow origin**: *
- `*` is wild card from all
- should whitelist which origin it should be allowed
- security should always use whitelist, default is denied until add to whitelist

fetch() is a build in method, default is a GET request, to get a POST request pass in 2nd paramter, 
```
fetch('http://localhost:3000/friends', {
    method: 'POST',
    body: JSON.stringify({id: 3, name: 'Ryan'})
})
.then((res) => res.json())
.then((friend) => console.log(friend)) 
```



