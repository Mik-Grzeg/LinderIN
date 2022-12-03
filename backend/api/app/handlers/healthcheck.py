from flask import Blueprint

health = Blueprint("health", __name__)


@health.route("/healthz")
def healthcheck():
    return "Ok"
