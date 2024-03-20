# How to run the server end point and database

## Initial setup

### Install, MySQL

use whatever method, just get it installed, heres a link to [download](https://dev.mysql.com/downloads/mysql/) page.

### Install Maven package

install maven, use this [guide](https://www.baeldung.com/install-maven-on-windows-linux-mac) to install it.

### Log in to MySQL

After installing, open command prompt and login to MySQL
```
mysql -u root -p
```

Use the password you setup on installation

### Create a New User and Database

#### Create User

Create a user with the following user and passwords for the endpoint to be able to access this database *****IMPORTANT*****
```
CREATE USER 'Test'@'localhost' IDENTIFIED BY 'test123';
```

Grant all permissions to the user
```
GRANT ALL PRIVILEGES ON *.* TO 'Test'@'localhost';
```

Apply changes
```
FLUSH PRIVILEGES;
```

#### Create database

Create the databse with the same name, i set the endpoint up with this so its *****IMPORTANT*****
```
CREATE DATABASE form;
```

## Now you should be all good for setup

## How to run

### SQL

The databse (SQL) is a service, so its constantly running so no start needed jsut make sure you followed the setup steps correctly

### Server Endpoint

Go to the root directory of the project after cloning it and run the following

Build the jar
```
./mvnw clean package
```

Run the jar
```
java -jar target/MADBackEnd-0.0.1-SNAPSHOT.jar
```
after a bit it should run, contact me for any issues ****WITH DETAILS OF THE ISSUE LIKE THE ERROR****

# You should be good to test your submit and database entry

## How to check submission
After pression submit you should be taken to the following screen, otherwise an error, contact me for the error, *****dont change shit.*****
<img width="1439" alt="Screenshot 2024-03-15 at 5 11 20 PM" src="https://github.com/SparshMehra/MADGroupProject/assets/86724477/9364e42b-071b-4d16-961b-6e76863c72c9">


### if successful, there are **2 methods**, to check the databse entry

***Endpoint check***

Check the terminal where youre running the server, it will display the info it recieved, it will say it sent ????? to the database, thats **FINE** its for encryption, check next step

***Database check***

Log into MySQL like before

select the database
```
USE form;
```

to view data, it should automatically call the table **form_table**, if not, check the server as to what its called
```
SELECT * FROM form_data;
```

# Contact me for any issues or concerns, with detail on slack/whatsapp, or else i will take my damn time to respond
