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
        sh 'npm install --legacy-peer-deps'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Prune Dev Dependencies') {
      steps {
        sh 'npm prune --omit=dev --legacy-peer-deps'
      }
    }

    // stage('Start Application') {
    //   steps {
    //     sh 'npm run start'
    //   }
    // }
  }

  post {
    always {
      echo 'Pipeline finalizado.'
    }
  }
}
