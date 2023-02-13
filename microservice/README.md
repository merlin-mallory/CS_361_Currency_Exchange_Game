# Communication Contract

* How to request data:

Call the fetch() method in your host program and provide the target URL, which is "http://localhost:3000/rates". Also, specify the "method" parameter as "PUT", the "body" parameter as the JSON object 
containing your list of currency data, and your "headers" parameter as "'Content-Type': 'application/json'". 
For example, I've written a separate program in example_call.js that contains this exact code below:

<img width="354" alt="fetchcall" src="https://user-images.githubusercontent.com/86948190/218544779-ea6b3968-e977-4cdc-beac-f1798505173c.PNG">

* How to receive data: 

Simply use and manipulate the "response object" returned by the fetch call. The randomized floats should be returned in JSON. 
You can add code following the fetch() call that gets the text content of the http response and displays it on the console like so: 

<img width="284" alt="receivedata" src="https://user-images.githubusercontent.com/86948190/218544819-c3c34803-370b-42c5-8784-785def0f68bc.PNG">

The sequence of commands to directly test this microservice with the files in this repository: 
cd into the "microservice" folder, run "npm install", run "node rest_api.js", run "node example_call.js". The results of requesting and receiving data 
are shown below: 

<img width="622" alt="runrestapi" src="https://user-images.githubusercontent.com/86948190/218544559-c655e1c8-007d-4329-a06d-eee117a43f32.PNG">

<img width="618" alt="updatedata" src="https://user-images.githubusercontent.com/86948190/218544687-c4c59224-edde-405f-a900-3e8bd1d08bb9.PNG">



* UML Sequence Diagram: 

![umldiagram](https://user-images.githubusercontent.com/86948190/218551350-3d66d907-4d53-4f54-be3b-c2c5ae4fcc78.PNG)
