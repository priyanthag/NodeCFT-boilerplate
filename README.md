# NodeCFT - Boilerplate
NodeCFT Boilerplate is the boilerplate project for NodeCFT npm package. More information on https://www.npmjs.com/package/nodecft

NodeCFT allows you to write your AWS infrastructure as a code using nodeJS and CFT.

You don't need to learn any tool specific commands to work with NodeCFT like other infrastructure as code software tools, Terraform or Pulumi.

## Prerequisites
- Make sure Node v8.x.x is installed.
- Configure AWS SDK - https://aws.amazon.com/developers/getting-started/nodejs/

## Getting Started

### Link the NodeCFT from locally checked in code base from GIT

#### Clone the NodeCFT
`git clone git@github.com:priyanthag/NodeCFT.git nodecft`

#### Link the local copy
`yarn add ../nodecft`

Once linked, you should see local copy linked in your package.json dependency as follows;
```
  "license": "MIT",
  "dependencies": {
    "nodecft": "../nodecft"
  },
  "devDependencies": {
``` 

-- NOTE: You will need to `yarn add` always when you do a change in the NodeCFT source package

### CFT Files
Put all your CFT files in the `./cfts` folder. Please check the `iam-role.yaml`
CFT can be written as YAML or JSON formats. My preference is YAML

#### Managing the CFT Parameter values
CFT Parameters can be managed in two different ways

##### Using `.env`
- All your parameter values can be configured in the `.env` file. check `./.env` file

##### Using environment variables
- Instead using .env file you can configure all your CFT parameters as Environment variables. This will be helpful when you decide to run NodeCF on the cloud on Jenkins, GoCD or similar.

### Code the infrastructure using NodeJS

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
  - Add more complex examples to the project


