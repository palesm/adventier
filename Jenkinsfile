pipeline {
  agent {
    kubernetes {
      yamlFile 'k8s/jenkins-agent.yml'
      defaultContainer 'docker'
      //idleMinutes 60
    }
  }

  stages {


    stage('build images') {

        steps {
            sh 'docker buildx create  --driver kubernetes --name builder --node arm64node  --driver-opt replicas=1,nodeselector=kubernetes.io/arch=arm64 --use'
            sh 'docker buildx create --append --driver kubernetes --name builder --node amd64node  --driver-opt replicas=1,nodeselector=kubernetes.io/arch=amd64 --use'
            sh 'docker buildx build -t ${IMAGEREPO}/${IMAGETAG} --platform linux/arm64,linux/amd64 --push backend/backendserver/. '
            sh 'sed -i "s/JENKINS_WILL_CHANGE_THIS_WHEN_REDEPLOY_NEEDED_BASED_ON_CHANGE/$(date)/" k8s/deployment.yaml'
          }
     }
    }

    stage('deploy ') {
      steps {
        sh '''
        cp -i k8s/deployment.yaml k8s/deployment.yaml
        sed -i "s/BRANCHNAME/${BRANCH_NAME_LC}/" k8s/deployment.yaml
        sed -i "s/BE_IMAGETAG/${IMAGEREPO}\\/${IMAGETAG}/" k8s/deployment.yaml
        '''
        sh 'cat k8s/deployment.yaml'
        container(name: 'kubectl') {
        sh 'kubectl apply -f k8s/deployment.yaml'
        sh 'kubectl rollout status deployment/adventier --namespace=${BRANCH_NAME_LC}' //I CHECKED UNTIL HERE...SORTOF

        sh '''curl --location --request POST $DISCORD_URL         --header \'Content-Type: application/json\'         --data-raw \'{"content": "I am pleased to report that I am deployed the branch:** \'${BRANCH_NAME_LC}\'** and its available for you at: http://\'${BRANCH_NAME_LC}\'.birdnoise.klucsik.fun "}\'
        '''
        }
      }
    }

    stage('api-tests') {
      when {
        changeset 'backend/**'
      }
      steps {
        sh 'cp k8s/birdnoise_deployment.yaml k8s/test_deployment.yaml'
        sh 'sed -i "s/BRANCHNAME/${TEST_BRANCNAME}/" k8s/test_deployment.yaml'
        sh 'sed -i "s/BE_IMAGETAG/${IMAGEREPO}\\/${BE_IMAGETAG}/" k8s/test_deployment.yaml'
        sh 'sed -i "s/FE_IMAGETAG/${IMAGEREPO}\\/${FE_IMAGETAG}/" k8s/test_deployment.yaml'
        sh 'cat k8s/test_deployment.yaml'
        container(name: 'kubectl') {
        sh 'kubectl apply -f k8s/test_deployment.yaml'
        sh 'kubectl rollout status deployment/birdnoise-be --namespace=birdnoise-${TEST_BRANCNAME}'
        }
        sh 'sed -i "s/BRANCHNAME/${TEST_BRANCNAME}/" api-tests/birdnoise-BE-remote.postman_environment.json'
        sh 'cat api-tests/birdnoise-BE-remote.postman_environment.json'
        container(name: 'newman') {
        sh 'newman run api-tests/birdnoise-tracks.postman_collection.json -e api-tests/birdnoise-BE-remote.postman_environment.json '
        sh 'newman run api-tests/birdnoise-playUnits.postman_collection.json -e api-tests/birdnoise-BE-remote.postman_environment.json '
        sh 'newman run api-tests/birdnoise-deviceLog.postman_collection.json -e api-tests/birdnoise-BE-remote.postman_environment.json '
        sh 'newman run api-tests/birdnoise-deviceCom.postman_collection.json -e api-tests/birdnoise-BE-remote.postman_environment.json '
        sh 'newman run api-tests/birdnoise-deviceVoltage.postman_collection.json -e api-tests/birdnoise-BE-remote.postman_environment.json '
      }
      }
    }
  }
  environment {
    VERSION = """${sh(
                                     script:
                                        "cat version",
                                     returnStdout:true
                                     ).trim()}"""
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
    TEST_BRANCNAME = """${sh(
                                  script:
                                    "BRANCH_NAME_LC=\$(echo $BRANCH_NAME | sed -e 's/\\(.*\\)/\\L\\1/') echo apitest-$BRANCH_NAME_LC",
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