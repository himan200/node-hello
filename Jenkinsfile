pipeline {
    agent any

    tools {
        nodejs 'NodeJS24'
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

        stage('Prepare EC2') {
    steps {
        sh '''
        ssh -o StrictHostKeyChecking=no -i /Users/himanshubankar/Downloads/EC_Bas.pem ec2-user@65.0.203.66 '
            mkdir -p /opt/tomcat/webapps/ROOT
            chown -R ec2-user:ec2-user /opt/tomcat/webapps/ROOT
        '
        '''
    }
}

    }
}
