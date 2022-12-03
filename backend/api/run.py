import logging

import click
from app.extensions import db, jwt, migrate
from config import Config
from flask import Flask
from flask_cors import CORS


def create_app(config_class=Config) -> Flask:
    gunicorn_logger = logging.getLogger("gunicorn.error")
    app = Flask(__name__)

    app.logger.handlers = gunicorn_logger.handlers
    app.logger.setLevel(gunicorn_logger.level)
    app.config.from_object(config_class)

    CORS(app)

    db.init_app(app)
    jwt.init_app(app)

    migrate.init_app(app, db)

    from app.handlers.user import user as user_bp

    app.register_blueprint(user_bp)

    from app.handlers.auth import auth as auth_bp

    app.register_blueprint(auth_bp)

    from app.handlers.job_offer import job_offer as job_offer_bp

    app.register_blueprint(job_offer_bp)

    from app.handlers.healthcheck import health

    app.register_blueprint(health)

    from app.handlers.matches import matches

    app.register_blueprint(matches)

    return app
