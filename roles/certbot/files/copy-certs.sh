#!/bin/bash

cp /etc/letsencrypt/live/server.dieklingel.com/chain.pem /etc/mosquitto/ca_certificates/chain.pem
cp /etc/letsencrypt/live/server.dieklingel.com/cert.pem /etc/mosquitto/certs/cert.pem
cp /etc/letsencrypt/live/server.dieklingel.com/privkey.pem /etc/mosquitto/certs/privkey.pem
chmod 604 /etc/mosquitto/ca_certificates/chain.pem /etc/mosquitto/certs/cert.pem /etc/mosquitto/certs/privkey.pem
