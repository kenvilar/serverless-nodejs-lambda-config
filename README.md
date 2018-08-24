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
```
