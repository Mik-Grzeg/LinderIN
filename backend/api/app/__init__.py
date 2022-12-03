import click
from app.extensions import db, jwt, migrate
from config import Config
from flask import Flask
from flask_cors import CORS
from flask.cli import with_appcontext



@click.command('db')
@with_appcontext
def run_db_migration():
    db.create_all()



def create_app(config_class=Config) -> Flask:
    app = Flask(__name__)
    CORS(app)

    app.config.from_object(config_class)

    db.init_app(app)
    jwt.init_app(app)

    app.cli.add_command(run_db_migration)

    from app.handlers.user import user as user_bp

    app.register_blueprint(user_bp)

    from app.handlers.auth import auth as auth_bp

    app.register_blueprint(auth_bp)

    @app.route("/healthz")
    def test_page():
        return "Ok"

    return app
