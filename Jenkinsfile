pipeline {
  agent any

  tools {
    nodejs 'node 20.18.0'
  }

  stages {
    stage('Checkout') {
      steps {
        checkout([
          $class: 'GitSCM',
          branches: [[name: '*/main']],
          userRemoteConfigs: [[
            url: 'https://github.com/RiseStudio/Teste-jenkins.git'
          ]]
        ])
      }
    }

    stage('Install Dependencies') {
      steps {
        bat 'npm install --legacy-peer-deps'
      }
    }

    stage('Build') {
      steps {
        bat 'npm run build'
      }
    }

    stage('Prune Dev Dependencies') {
      steps {
        bat 'npm prune --omit=dev --legacy-peer-deps'
      }
    }
  }

  post {
    always {
      echo 'Pipeline finalizado.'
    }
  }
}
