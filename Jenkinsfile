pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh """
                pwd
                yarn install
                yarn build
                rm -rf node_modules
                """
            }
        }
    }
}