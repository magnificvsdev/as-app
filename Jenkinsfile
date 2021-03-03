pipeline { 
    environment { 
        registry = "magnificvsdev/achistar-app" 
        registryCredential = 'dockerhubid' 
        dockerImage = '' 
    }
    agent any 
    stages { 

        stage('Stop All Running containers') { 
            steps { 
                sh "docker container stop \$(docker container ls -aq)" 
            }
        } 

        stage('Delete Running Image') { 
            steps { 
                sh "docker rmi $registry:latest --force" 
            }
        } 

        stage('Cloning Git') { 
            steps { 
                git branch: 'main', changelog: false, credentialsId: 'githubkey', poll: false, url: 'https://github.com/magnificvsdev/as-app'
            }
        } 

        stage('Building image') { 
            steps { 
                script { 
                    dockerImage = docker.build registry + ":latest" 
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
                sh "docker rmi $registry:latest" 
            }
        }

        stage('Pull Container') {
            steps { 
                script { 
                    docker.image("$registry:latest").pull()
                }
            }
        }

        stage('Run Container') {
            steps { 
                sh "docker run -d $registry:latest" 
            }
        } 

        stage('Email Notification'){
                mail bcc: '', body: '''Build successful!!!!''', cc: '', from: '', replyTo: '', subject: 'AchiStar Pipeline Successful', to: 'world.machinesdi@gmail.com'
        }
    }
}