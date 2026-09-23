pipeline {
    agent any

    stages {

        stage('Clone GitHub Repository') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git'
            }
        }

        stage('Check Project Files') {
            steps {
                bat 'dir'
            }
        }

        stage('Build') {
            steps {
                echo 'Checking Travel Explorer project...'

                bat '''
                    if not exist index.html exit /b 1
                    if not exist style.css exit /b 1
                    if not exist script.js exit /b 1
                '''
            }
        }

        stage('Deploy') {
            steps {
                echo 'Travel Explorer project is ready!'
            }
        }
    }

    post {
        success {
            echo 'Jenkins Pipeline completed successfully!'
        }

        failure {
            echo 'Jenkins Pipeline failed.'
        }
    }
}
