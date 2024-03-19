# 🔮 dieKlingel Server

In order for all the magic to happen, we needed a server. This repository provides 🐋 `docker compose` configurations for a SIP server, or in detail for the [flexisip server](https://gitlab.linphone.org/BC/public/flexisip). We mainly use this as developer reference, we do not recommend runnig this project as is in an production environment.

## 🪜 Dependencies

To be able to run the server you need [docker](https://docs.docker.com/get-docker/) installed on your system. If you want to use the push notification feature you have to provide push certificates in [flexisip/apn](flexisip/apn)

## 🐋 Run the server

```sh
docker compose up
```
