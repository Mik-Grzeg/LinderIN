FROM python:3.10.8-slim-buster as builder
RUN apt-get update && \
	apt-get install -y libpq-dev

WORKDIR /api

RUN python -m venv /opt/venv

RUN /opt/venv/bin/pip3 install --upgrade pip
COPY ./requirements.txt .
RUN /opt/venv/bin/pip3 install -r requirements.txt

ENV PATH="/opt/venv/bin:$PATH"

COPY ./api .

ENTRYPOINT [ "/bin/sh", "-c", "flask --app run db && ./gunicorn_starter.sh" ]
