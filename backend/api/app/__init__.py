from flask import Flask

from app.extensions import db
from config import Config


def create_app(config_class=Config) -> Flask:
    app = Flask(__name__)
    app.config.from_object(config_class)

    db.init_app(app)

    from app.handlers.user import user as user_bp

    app.register_blueprint(user_bp)

    @app.route("/healthz")
    def test_page():
        return "Ok"

    return app
