Note: this assignment wasn't dockerized as it was related to testing only.

Executing:
1. copy the git repo, and use "npm i" to install all dependencies.
2. create a .env file and add the port and jwt secret(view the .env.example), (note: leave TEST_JWT as empty for now)
3. use "npm start" to start the application.
4. use Postman or other HTTP client and go to localhost:3000/auth/login and provide the route with {email:"super@super.com", password:"1234"},
5. After which you will get an access token, copy and paste it into the created .env file as a TEST_JWT.
6. Now you can use "npm run test"  for all the task and user services unit test cases.
7. And use "npm run test:integration" for all the integration test for all the routes.
8. Play around in the test folder in the src for different results.
