pipeline { 
    environment { 
        registry = "magnificvsdev/achistar-app" 
        registryCredential = 'dockerhubid' 
        dockerImage = '' 
    }
    agent any 
    stages { 
        stage('Cloning Git') { 
            steps { 
                git branch: 'main', changelog: false, credentialsId: 'githubkey', poll: false, url: 'https://github.com/magnificvsdev/as-app'
            }
        } 

        stage('Building image') { 
            steps { 
                script { 
                    dockerImage = docker.build registry + ":$BUILD_NUMBER" 
                }
            } 
        }

        stage('Deploy image') { 
            steps { 
                script { 
                    docker.withRegistry( '', registryCredential ) { 
                        dockerImage.push() 
                    }
                } 
            }
        } 

        stage('Cleaning up') { 
            steps { 
                sh "docker rmi $registry:$BUILD_NUMBER" 
            }
        }

        stage('Pull Container') {
            script { 
                docker.image(dockerImage)
            }
        }

        stage('Run Container') {
            sh "docker run $registry:$BUILD_NUMBER" 
        } 
    }
}