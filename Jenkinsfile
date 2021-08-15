pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                try {
                    sh """
                    pwd
                    yarn install
                    yarn build
                    rm -rf node_modules
                    """
                } catch (exc) {
                throw (exc)
                }
            }
        }
    }
}