FROM golang:1.23.4

RUN mkdir -p /home/app
COPY . /home/app

WORKDIR /home/app
EXPOSE 8080
CMD ["go", "run", "."]