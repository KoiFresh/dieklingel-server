FROM alpine:latest
RUN apk add --no-cache asterisk

ENTRYPOINT ["tail", "-F", "/dev/null"]

# ENTRYPOINT ["asterisk"]