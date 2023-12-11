# Pet Peaves
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
## Testing
## How to use
1. 'cd' into the project directories (client AND server)
2. Run 'npm run test' to run the test cases
3. If you get an error about missing packages or modules, you need to install them using 'npm install'.


## Acceptance Tests
Use Case: Booking a Veterinary Appointment on Pawstime

Scenario:
Alice is a pet owner who wants to book a veterinary appointment for her cat, Whiskers, on the Pawstime website.

Execution Steps:

User Registration:

Alice visits the Pawstime website.
She clicks on the "Sign Up" button and fills out the registration form, providing her name, email, password. She is only able to signup if she provides a valid email and satisfies the passwprd criteria.

User Login:

Alice clicks on the "Sign In" button.
She enters her email and password to log into her Pawstime account.
User Dashboard:

After logging in, Alice is redirected to the home page.
The hompage has a button displaying Book Your appointment.

Booking Veterinary Appointment:
Then she is redirected to the Appointment booking page. She sees a calendar on the left where she can choose a date. And on the right it displays options for booking veterinary or grooming appointments.
Alice clicks on the "Book Veterinary Appointment" option.
Then a dialog open where she fills the required details for the appointment, chooses a preferred time slot and clicks on book.
The booked time slot is now marked as unavailable for other users.
On a particular day only the time slots that have not been previously booked by any other user are shown. Grooming time slots booking does not effect Veterinary time slots booking.

Expected Output or Behavior:

Successful Booking:

Confirmation message: "Your appointment is booked."

User Dashboard Updates:

Go to the Dashboard, pick the date for which slot was booked.
User is only able to see the appointments which they have booked. They cant see any other user's appointments.
The user dashboard displays the booked veterinary appointment with details.

Admin Dashboard Updates:

The admin dashboard reflects all the bookings for all the users.

By following these steps, users like Alice can easily book veterinary appointments for their pets, and the system ensures that no two users can book the same time slot to avoid scheduling conflicts.
