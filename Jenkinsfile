pipeline {
    agent any

    environment {
        REACT_REPO = 'https://github.com/regygeorge/progressive-kerala.git'
        DEPLOY_DIR = '/var/www/progressivekerala'  
        SERVICE_NAME = 'nginx'  
        STATIC_RESOURCES_DIR = 'src/main/resources/static'

        CI = ''  
        
        SSH_KEY_PATH = '/root/.ssh/id_rsa'  // Path to the private SSH key to use for authentication 
        GIT_SSH_COMMAND = 'ssh -o StrictHostKeyChecking=no'
    }

    tools {
        nodejs 'NodeJS'  // Name of the NodeJS installation configured in Jenkins
    }

    stages {
        stage('Checkout KP Project') {
            steps {
                dir('kp-project') {
                    checkout([$class: 'GitSCM', branches: [[name: '*/main']], userRemoteConfigs: [[url: "${REACT_REPO}", credentialsId: 'github-pat']]])
                }
            }
        }
        
        stage('Build KP Project') {
            steps {
                dir('kp-project') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Deploy to Local Server') {
            steps {
                script {
                    sh 'sudo cp -r kp-project/build/* ${DEPLOY_DIR}'
                    sh 'sudo systemctl reload ${SERVICE_NAME}' // Reload Nginx configuration
                }
            }
        }

        
    }

    post {
        success {
            echo 'Build and deployment succeeded!'
        }

        failure {
            echo 'Build or deployment failed.'
        }

        always {
            cleanWs() // Clean workspace after build
        }
    }
}
