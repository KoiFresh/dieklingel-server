FROM debian:12

RUN apt-get update && \
	apt-get install -y \
	build-essential \
	g++ \
	gcc \
	cmake \
	ninja-build \
	python3 \
	doxygen \
	git \
	python3-pystache \
	python3-six \
	yasm \
	# Install all dependencies needed for Flexisip
	libssl-dev \
	libboost-dev \
	libboost-system-dev \
	libboost-thread-dev \
	libhiredis-dev \
	libjansson-dev \
	libjsoncpp-dev \
	libnghttp2-dev \
	libsqlite3-dev \
	libpq-dev \
	libmariadb-dev \
	libmariadb-dev-compat \
	libprotobuf-dev \
	libsnmp-dev \
	libxerces-c-dev \
	libsrtp2-dev \
	libgsm1-dev \
	libopus-dev \
	libmbedtls-dev \
	libspeex-dev \
	libspeexdsp-dev \
	libxml2-dev \
	protobuf-compiler \
	redis-server

RUN git clone https://gitlab.linphone.org/BC/public/flexisip.git && \
	cd flexisip && \
	git submodule update --init --recursive

WORKDIR /flexisip

RUN cmake -S . -B build -G Ninja && \
	cmake --build build && \
	cmake --install build

COPY flexisip.conf.default /usr/local/etc/flexisip/flexisip.conf

ENTRYPOINT [ "flexisip" ]
