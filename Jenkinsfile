pipeline {
    agent { docker { image 'myjenkins-blueocean' } }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}