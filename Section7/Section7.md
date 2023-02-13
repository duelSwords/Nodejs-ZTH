# Web Servers

When making a request. Its goes to the DNS server give a response on ip and port. Also HTTP/HTTPS server give a responses of JSON XML TXT and such. 

Request -> API -> Server

## HTTP Request Methods 
https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
- GET / POST / PUT / DELETE 

What is API (Application Programming Interface) is a software intermediary that allows two application to talk to each other. 

GET - Retrieve a single or collection `GET /friends` or `GET /friends/5`
POST - is for the collection `POST /messages`
PUT - is update a single item in the collection `PUT /messages/15`
DELETE - delete a single or collection `DELETE /friends` or `DELETE /friends/5`

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

