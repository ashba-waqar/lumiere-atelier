def call() {
    sh 'docker build -t ${imageName} .'
}    
