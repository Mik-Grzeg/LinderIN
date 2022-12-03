from typing import Literal

from app.extensions import db
from app.models import User
from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required, get_jwt_identity
from sqlalchemy.exc import IntegrityError

user = Blueprint("users", __name__)


@user.route("/api/user/role")
@jwt_required()
def check_role_of_user():
    user_email = get_jwt_identity()
    user = User.query.filter_by(email=user_email).first()
    if user:
        return jsonify(am_i_recruiter=user.recruiter_role), 200

@user.route("/api/users", methods=["PUT"])
@jwt_required()
def update_user() -> tuple[Literal, int]:
    user_json = request.json
    user = User(**user_json)

    try:
        User.query.filter_by(email=user.email).update(user.to_dict_ignore())
        db.session.commit()

        return "", 204
    except IntegrityError:
        return jsonify(error="Unable to update provided user"), 400


@user.route("/api/users", methods=["GET"])
@jwt_required()
def get_user() -> tuple[Literal, int]:
    query_params = request.args

    if "email" in query_params:
        user = User.query.filter_by(email=query_params["email"]).first()

        if user:
            return jsonify(user.to_dict()), 200

        return "", 404

    return jsonify(error="Email is missing"), 400


@user.route("/api/users", methods=["DELETE"])
@jwt_required()
def delete_user() -> tuple[Literal, int]:
    query_params = request.args

    if "email" in query_params:
        user = User.query.filter_by(email=query_params["email"]).first()

        if user:
            db.session.delete(user)
            db.session.commit()

            return "", 204
        return jsonify(error="User with that email does not exists"), 404

    return jsonify(error="Email is missing"), 400
