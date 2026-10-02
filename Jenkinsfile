pipeline {
    agent any
    
    environment {
        DOCKER_REGISTRY = 'ashbawaqar21/frontend-app'
        IMAGE_TAG = "${env.BUILD_NUMBER}" 
    }
    
    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/ashba-waqar/lumiere-atelier.git'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    app = docker.build("${DOCKER_REGISTRY}:${IMAGE_TAG}")
                }
            }
        }
        
        stage('Push to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'docker-hub-credentials-id') {
                        app.push("${IMAGE_TAG}")
                        app.push("latest")
                    }
                }
            }
        }
        
        stage('Deploy with Ansible') {
            steps {
                sh "ansible-playbook -i ansible/inventory.ini ansible/deploy.yml --extra-vars 'image_tag=${IMAGE_TAG}'"
            }
        }
    }
}
