import { init, createStack, constants, getOutput } from 'nodecft'

// Initializing the NodeCF
init()

// Defining the Parameters from NODE Environment
const params = {
  ResourcePrefix: process.env.RESOURCE_PREFIX,
  ResourcePostfix: process.env.RESOURCE_POSTFIX
}

const run = async () => {
  try {
    // Creat and Update the Stack
    await createStack({
      // Stack Name that can be used to Identify the Stack in the AWS couldformation console
      stackName: `${process.env.RESOURCE_PREFIX}IamRole${process.env.RESOURCE_POSTFIX}`,
      // Path of the local CFT file in the CFTS folder
      stackPath: 'cfts/iam-role.yaml',
      // Map the parameters in the CFT file
      params: {
        ...params,
        RoleName: `IamRole${process.env.RESOURCE_POSTFIX}`
      },
      capabilities: constants.CAPABILITY_NAMED_IAM
    }, true)

    console.log(`
    Output
      RoleName => ${getOutput('RoleName')}      
      RoleArn => ${getOutput('RoleArn')}
    `)
  } catch (e) {
    console.log('Error! => ', e)
  }
}
run()
