#!/bin/sh

gunicorn 'run:create_app()' --preload -w 3 --timeout 3600 -b 0.0.0.0:8080 --log-level=debug
