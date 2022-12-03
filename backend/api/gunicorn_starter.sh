#!/bin/sh

gunicorn 'app:create_app()' -w 2 --timeout 3600 -b 0.0.0.0:8080 --log-level=warn
