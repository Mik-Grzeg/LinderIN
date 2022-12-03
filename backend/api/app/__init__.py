from flask import Flask

from app.extensions import db, jwt
from config import Config


def create_app(config_class=Config) -> Flask:
    app = Flask(__name__)

    app.config.from_object(config_class)

    db.init_app(app)
    jwt.init_app(app)

    from app.handlers.user import user as user_bp

    app.register_blueprint(user_bp)

    from app.handlers.auth import auth as auth_bp

    app.register_blueprint(auth_bp)

    @app.route("/healthz")
    def test_page():
        return "Ok"

    return app
