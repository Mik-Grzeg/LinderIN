FROM python:3.10.8-alpine3.17 as builder
RUN apk update && apk add libgcc

WORKDIR /api

RUN python -m venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"

RUN /opt/venv/bin/pip3 install --upgrade pip
COPY ./requirements.txt .
RUN /opt/venv/bin/pip3 install -r requirements.txt

ENV PATH="/opt/venv/bin:$PATH"

COPY ./api .

ENTRYPOINT [ "./gunicorn_starter.sh" ]
