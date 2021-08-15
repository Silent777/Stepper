pipeline {
    agent {
        docker {
            image 'node:lts-buster-slim'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('Install') {
            steps {
                sh 'yarn install'
            }
        }
        stage('Build') {
            steps {
                sh 'react-scripts build'
            }
        }
    }
}