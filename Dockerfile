FROM node:10.16.0

WORKDIR /usr/src/work-order-api

COPY ./ ./

RUN npm install

CMD ["/bin/bash"]