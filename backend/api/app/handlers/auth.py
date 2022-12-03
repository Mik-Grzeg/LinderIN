from typing import Literal

from app.extensions import db
from app.models import User
from app.utils import hash_passwd
from flask import Blueprint, jsonify, request
from flask_jwt_extended import create_access_token

auth = Blueprint("auth", __name__)


@auth.route("/api/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = hash_passwd(request.json.get("password", None))

    user = User.query.filter_by(email=email, password=password).first()
    if not user:
        return jsonify({"error": "Bad username or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token, isRecruiter=user.recruiter_role)


@auth.route("/api/register", methods=["POST"])
def register() -> tuple[Literal[""], int]:
    user_json = request.json
    user_json["password"] = hash_passwd(user_json.get("password"))

    user = User(**user_json)

    try:
        db.session.add(user)
        db.session.commit()
        return "", 201
    except IntegrityError:
        return jsonify(error=f"User with that email address already exists"), 400
