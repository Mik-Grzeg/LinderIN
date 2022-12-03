import click
from app.extensions import db, jwt
from config import Config
from flask import Flask

@click.command('db')
@click.option(
    "--with-migration",
    help="Should I run database migration before startup",
)
def run_db_migration(with_migration):
    app = Flask(__name__)

    db.init_app(app)
    if with_migration:
        db.create_all()



def create_app(config_class=Config) -> Flask:
    app = Flask(__name__)

    app.config.from_object(config_class)

    db.init_app(app)
    jwt.init_app(app)

    with app.app_context():
        from . import commands  # <----- here
        run_db_migration()

        from app.handlers.user import user as user_bp

        app.register_blueprint(user_bp)

        from app.handlers.auth import auth as auth_bp

        app.register_blueprint(auth_bp)

        @app.route("/healthz")
        def test_page():
            return "Ok"

        return app


