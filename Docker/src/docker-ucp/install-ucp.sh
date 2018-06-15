# Pull the latest version of UCP
docker pull docker/ucp:2.1.8

# Install UCP
docker run --rm -it --name ucp \
  -v /var/run/docker.sock:/var/run/docker.sock \
  docker/ucp:2.1.8 install \
  --interactive