# image-viewer-2
Usage:

run Docker container

1. npm run build

2. docker run -d -p 8081:80 viewer-nginx ( runs a nginx docker container on port 8081 )

run image server

1. copy server_images.sh to Image directory

2. run ncat -lk --sh-exec './serve_images.sh' 0.0.0.0 9000 ( runs the image server on port 9000 listening on all interfaces )
