# nodejs-sqlite-signin
This is a basic sign in page.
**To validate the username and password must be the same.**

**To run the code:**
**Code tested on Amazon Linux-2 - Working**

**Install JAVA-1.8**:
sudo yum install -y java-1.8*

**Install git:**
sudo yum install git -y

**Install maven above 3.8 version:**
wget https://dlcdn.apache.org/maven/maven-3/3.8.8/binaries/apache-maven-3.8.8-bin.tar.gz                                     
tar -xzvf apache-maven-3.8.8-bin.tar.gz                                        
sudo mv apache-maven-3.8.8 /opt                                   
sudo ln -s /opt/apache-maven-3.8.8 /opt/maven                                       
sudo ln -s /opt/maven/bin/mvn /usr/bin/mvn                                  

**Install nginx:**
sudo amazon-linux-extras install nginx1 -y                     
sudo systemctl start nginx                       
sudo systemctl enable nginx                  
sudo systemctl status nginx                     

**############IMPORTANT##############**                       
Add the below code in the /etc/nginx/conf.d/node-js.conf                
You will have to create the node-js.conf                
The code below is to make the application available both through the http://localhost:3000                
And also through deployment of nginx, that is with http://localhost as well.                
The code is in the repo as node-js.conf
**############IMPORTANT##############**

**Clone the directory:**
sudo git clone https://github.com/PintoAdi/nodejs-sqlite-signin.git                                                                  
cd nodejs-sqlite-signin.git                    
sudo npm install  
**App running in foreground**
To build the package or dist directory use sudo mvn package and the app will run in foreground                  
once the app runs in forground saying the application is running on 3000                       

You can access it both in http://public-ip of instance:3000 and http://public-ip of instance                
**App running in Background**
If you want the app to run in background once you run sudo mvn package and it says app running on 3000                
You can exit using ctrl+C and run the below command:                    
sudo npm run build                 

**Once done your aplication is running in background.**

**YOU CAN ACCESS YOUR APPLICATION FROM BOTH http://public-ip of instance:3000 and http://public-ip of instance**
