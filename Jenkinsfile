pipeline {
    agent any

    tools {
        nodejs 'NodeJS18'
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/himan200/node-hello.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy to EC2') {
            steps {
                // Copy the dist/ folder to Tomcat ROOT
                sh '''
                scp -o StrictHostKeyChecking=no -i /path/to/EC_Bas.pem -r dist/* ec2-user@65.0.203.66:/opt/tomcat/webapps/ROOT/
                '''
            }
        }
    }
}
