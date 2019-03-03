# NodeCFT - Boilerplate
NodeCFT Boilerplate is the boilerplate project for NodeCFT npm package. More information on https://www.npmjs.com/package/nodecft

NodeCFT allows you to write your AWS infrastructure as a code using nodeJS and CFT.

You don't need to learn any tool specific commands to work with NodeCF like other infrastructure as code software tools like, Terraform or Pulumi.

## Prerequisites
- Make sure AWS CLI in installed. Refer https://aws.amazon.com/cli/ for more information

## Getting Started

### CFT Files
Put all your CFT files in the `./cfts` folder. Please check the `iam-role.yaml`
CFT can be written as YAML or JSON formats. My preference is YAML

#### Managing the CFT Parameter values
CFT Parameters can be managed in two different ways
##### Using `.env`
- All your parameter values can be configured in the `.env` file. check `./.env` file

##### Using environment parameters
- Instead using .env file you can configure all your CFT parameters as Environment variables. This will be helpful when you decide to run NodeCF on the cloud on Jenkins, GoCD or simillar.

### Node Script to code the intrascructure
#### Create a .js file on the root folder. refer `create-iam-role.js`
- Please take a look at the `createStack` function in the `create-iam-role.js`. For more information refer the file `./src/nodecf.js`
- Do not forget to call `init()`  at the top of the file

#### Execute the CFT
once you programmed your CFT execution as in the `create-iam-role.js` run the script as follows

```
npm run exec create-iam-role.js
```

You will see a similar output like this

![Alt CLI Output](cli-result.png?raw=true "CLI Output")

### Log files
Logs will be stored inside the `./logs` folder

## Limitations
  -  Deletion is not supported
  -  Nested Stack creation is not Tested, Will not work as expected if you use nested CTF execution 

## TODOs
  - Add more comlex examples to the project


