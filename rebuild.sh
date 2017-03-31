docker kill happy-hapi;
docker rm happy-hapi;
docker rmi happy-hapi -f;
docker build -t samrocksc/happy-hapi .;
