from typing import Literal

from flask import Blueprint, jsonify, request
from sqlalchemy.exc import IntegrityError

from app.extensions import db
from app.models import User

user = Blueprint("users", __name__)


@user.route("/api/users", methods=["POST"])
def create_user() -> tuple[Literal[""], int]:
    user_json = request.json

    user = User(**user_json)

    try:
        db.session.add(user)
        db.session.commit()
        return "", 201
    except IntegrityError:
        return jsonify(error="User with that email address already exists"), 400


@user.route("/api/users", methods=["PUT"])
def update_user() -> tuple[Literal, int]:
    user_json = request.json
    user = User(**user_json)

    try:
        User.query.filter_by(email=user.email).update(user.to_dict_except_id())
        db.session.commit()

        return "", 204
    except IntegrityError:
        return jsonify(error="Unable to update provided user"), 400


@user.route("/api/users", methods=["GET"])
def get_user() -> tuple[Literal, int]:
    query_params = request.args

    if "email" in query_params:
        user = User.query.filter_by(email=query_params["email"]).first()

        if user:
            return jsonify(user.to_dict()), 200

        return "", 404

    return jsonify(error="Email is missing"), 400


@user.route("/api/users", methods=["DELETE"])
def delete_user() -> tuple[Literal, int]:
    query_params = request.args

    if "email" in query_params:
        user = User.query.filter_by(email=query_params["email"]).first()

        print(user)
        if user:
            db.session.delete(user)
            db.session.commit()

            return "", 204
        return jsonify(error="User with that email does not exists"), 404

    return jsonify(error="Email is missing"), 400
