# Docker -

## Topics=>

- [X] What is Containerisation 
- [X] History of Docker 
- [X] How to install Docker, play with it locally 
- [X] Containers vs Images 
- [X] Creating a simple full stack app, Dockerfile 
- [X] Containerizing the backend 
- [X] Deploying to Dockerhub 
- [X] Pulling an image and deploying it to the internet 
- [ ] A small flaw in our approach, assignment
- [ ] Caching images, layers in docker 
- [ ] Volumes and networks 
- [ ] Multi-stage builds 
- [ ] Understanding docker-compose 
- [ ] Creating a docker-compose for our backend 
- [ ] Going through open source projects


### Why Containerisation?
- Containerization involves building self-sufficient software packages that perform  consistently, regardless of the machines  they run on.
- It's basically taking the snapshot of a  machine, the filesystem and letting you  use and deploy it as a construct

`Installation of Docker` - https://docs.docker.com/engine/install/

- **Inside Docker:**
    - CLI
    - Engine
    - Registy (docker hub)

### Images vs Containers-
- Docker is like virtual machine,
- Image could be like the ISO file used to inatall your VM.
- Containers are like the build of that Image (when you run the Image)
- To build image: `docker build <fileName>`
- The image not only contain the source code but also have the dependency of that source code.
- Images are created once.
- Container can be more than one.
- Containers can be created more than once.
- To run container: `docker run <img_id>`

#### .dockerignore =>
```docker
Dockerfile
node_modules
```
#### Dockerfile =>
```js
FROM node:20 // dependency required for the project, it gets from dockerhub

WORKDIR /usr/src/app // creating the project in this dir

COPY . . // copies the project files to the WORKINGDIR

RUN npm install // install the dependency in the WORKINGDIR

EXPOSE 3000 // exposing the port where the container will run

CMD ['node' 'index.js'] // what command to run when starting the container
```
- to build the image : `docker build . -t img_name`


