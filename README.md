# petpeaves
Comprehensive Pet Care Web Application

## How to use
1. 'cd' into the project directories (client AND server)
2. Run 'npm install' to install all dependencies in both of those directories
3. Run 'npm start' to run the client application
4. Run 'npm run dev' to run the server api


# CloudFormation Templates
Folder: CFTemplates

## Prerequisites
Before deploying these templates, make sure you have the following:

1. An AWS account with appropriate permissions to create resources.
2. AWS Command Line Interface (CLI) installed and configured.

## Template Details

### Network Template
File: network.yaml

Description: Creates a complete network infrastructure with the following components:

1. VPC with public and private subnets
2. Route tables for public and private subnets
3. Network ACLs for public and private subnets
4. NAT gateways for outbound internet traffic from private subnets
5. Elastic IPs associated with the NAT gateways

### Auto Scaling Group Template
File: autoscaling.yaml

Description: Defines an Auto Scaling Group (ASG) with instances launched in private and public subnets. It also includes a Launch Configuration.

### Elastic Load Balancer Template
File: ElasticLoadBalancer.yaml

Description: Sets up an Elastic Load Balancer (ELB) with a single HTTP listener. The ELB is associated with the Auto Scaling Group (ASG).

### Security Group Template 
File: SecurityGroup.yaml

Description: Creates AWS Security Groups with inbound and outbound rules to control traffic flow to and from instances.

### EC2 instance Template
File: ec2.yaml

Description: Creates an EC2 instance for creating AMI to be used in AutoScaling group.

AMI Creation is manual after the instance is created using the CloudFormation Template


## Deployment

To deploy the template, follow these steps:

Open a terminal and navigate to the directory containing the CloudFormation template.
Use the AWS CLI to create a CloudFormation stack:

Copy code
```
aws cloudformation create-stack --stack-name YourNetworkStack --template-body file://network_infrastructure_template.yaml --parameters ParameterKey=StackName,ParameterValue=YourNetworkStack
```

Note: Update the stack name to same as file name to run the script.

Monitor the stack creation progress in the AWS Management Console or using the CLI.

Outputs
The CloudFormation stack provides outputs that may be useful for other stacks or configurations. Refer to the template file for details on outputs.

Cleanup
To avoid incurring charges, make sure to delete the CloudFormation stack when you're done testing or using the resources.


Copy code
```
aws cloudformation delete-stack --stack-name YourNetworkStack
```
