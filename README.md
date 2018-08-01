###

To Build image: 

docker build --rm -f Dockerfile -t nginx-protection:latest .

To run the container

docker run --rm -d -p 80:80 nginx-protection:latest
