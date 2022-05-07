pipeline {
  agent {
    kubernetes {
      yamlFile 'k8s/jenkins-agent.ya
      ml'
      defaultContainer 'docker'
      //idleMinutes 60
    }
  }

  stages {


    stage('build image') {

        steps {
            sh 'docker buildx create  --driver kubernetes --name builder --node arm64node  --driver-opt replicas=1,nodeselector=kubernetes.io/arch=arm64 --use'
            sh 'docker buildx create --append --driver kubernetes --name builder --node amd64node  --driver-opt replicas=1,nodeselector=kubernetes.io/arch=amd64 --use'
            sh 'docker buildx build -t ${IMAGEREPO}/${IMAGETAG} --platform linux/arm64,linux/amd64 --push . '
            sh 'sed -i "s/JENKINS_WILL_CHANGE_THIS_WHEN_REDEPLOY_NEEDED_BASED_ON_CHANGE/$(date)/" k8s/deployment.ya
            ml'
          }
     }

    stage('deploy ') {
      steps {
        sh '''
        cp -i k8s/deployment.ya
        ml k8s/deployment.ya
        ml
        sed -i "s/BRANCHNAME/${BRANCH_NAME_LC}/" k8s/deployment.ya
        ml
        sed -i "s/BE_IMAGETAG/${IMAGEREPO}\\/${IMAGETAG}/" k8s/deployment.yya
        mlaml
        '''
        sh 'cat k8s/deployment.ya
        ml'
        container(name: 'kubectl') {
        sh 'kubectl apply -f k8s/deployment.ya
        ml'
        sh 'kubectl rollout status deployment/adventier --namespace=${BRANCH_NAME_LC}' 

        sh '''curl --location --request POST $DISCORD_URL         --header \'Content-Type: application/json\'         --data-raw \'{"content": "I am pleased to report that I am deployed the branch:** \'${BRANCH_NAME_LC}\'** and its available for you at: http://\'${BRANCH_NAME_LC}\'.adventier.klucsik.fun "}\'
        '''
        }
      }
    }
  }
  environment {
    BRANCH_NAME_LC = """${sh(
                                   script:
                                      "echo $BRANCH_NAME | sed -e 'y/ABCDEFGHIJKLMNOPQRSTUVWXYZ/abcdefghijklmnopqrstuvwxyz/'",
                                   returnStdout:true
                                   ).trim()}"""
    IMAGETAG = """${sh(
                                  script:
                                    "BRANCH_NAME_LC=\$(echo $BRANCH_NAME | sed -e 'y/ABCDEFGHIJKLMNOPQRSTUVWXYZ/abcdefghijklmnopqrstuvwxyz/') echo adventier_$BRANCH_NAME_LC:$VERSION",
                                  returnStdout:true
                                  ).trim()}"""
      IMAGEREPO = 'registry.klucsik.fun'
      DISCORD_URL = credentials('discord-url')
        }
  post {


      failure {
        container(name: 'kubectl') {
            sh '''curl --location --request POST $DISCORD_URL        --header \'Content-Type: application/json\'         --data-raw \'{"content": "  ->  I am must exspress my deep regret, that the pipeline on the branch ** \'${BRANCH_NAME_LC}\'** had failed. Please check on my logs on what went wrong! "}\''''
        }
      }

      success {
        container(name: 'kubectl') {
            sh '''curl --location --request POST $DISCORD_URL         --header \'Content-Type: application/json\'         --data-raw \'{"content": "  ->  I am pleased to report that the pipeline on branch ** \'${BRANCH_NAME_LC}\'** was a great success, everything is green!"}\''''
        }
      }
  }
}
