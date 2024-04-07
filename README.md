In this app, the use of scheduling queues with cache memory and Redis has been implemented.<br>
	<br>
To run the app, you must first run the docker-compose with the command:<br>
docker-compose up	<br>
To test, just use the routes in the api.http file.<br>
	<br>
And if you want to see the queue working, you must enter the Redis docker with the following command:<br>
docker-compose exec redis sh	<br>
and then:<br>
redis-cli	<br>
soon after:<br>	
```keys '*'	```<br>