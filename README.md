# serverless-nodejs-lambda-config

## Instruction    
```
brew install awscli   
npm install -g serverless   

#deploy our first function
sls deploy
#invoke the lambda function, this will output "This is a test only"
sls invoke --function kenVilarFunction    

#debug
sls invoke --function kenVilarFunction log    

#alternative to sls invoke command
sls logs --function kenVilarFunction    

#Redeploy the whole stack
sls deploy function --function kenVilarFunction
#this will output "This is a test only"
sls invoke --function kenVilarFunction

#since we've changed the configuration in the serverless.yml
sls deploy
curl <amazonaws-link-dev-app>
```

```
npm install --save uuid
```

## To store data
```curl
curl -X POST <amazonaws-link-dev-app>/todos --data '{"text": "My name is Ken Vilar"}'
```
