def call() {
    echo "Docker build start"
    sh 'docker build -t my-app .'
}
