from typing import Literal

from app.extensions import db
from app.models import JobOffer, User
from flask import Blueprint
from flask import current_app as ca
from flask import jsonify, request
from flask_jwt_extended import get_jwt_identity, jwt_required
from sqlalchemy.exc import IntegrityError

job_offer = Blueprint("job_offer", __name__)


@job_offer.route("/api/job_offer", methods=["POST"])
@jwt_required()
def create_job_offer() -> tuple[Literal, int]:
    user_email = get_jwt_identity()
    user = User.query.filter_by(email=user_email).first()
    if user:
        job_offer_json = request.json
        job_offer_json["recruiter_email"] = user.email
        job_offer = JobOffer(**job_offer_json)

        try:
            db.session.add(job_offer)
            db.session.commit()

            return jsonify({}), 201
        except IntegrityError:
            return jsonify(error=f"Unable to create job offer"), 400

    return jsonify({}), 404


@job_offer.route("/api/job_offer", methods=["GET"])
@jwt_required()
def get_job_offers() -> tuple[Literal, int]:
    ca.logger.debug("Got job offers request")
    jobs = JobOffer.query.all()
    return jsonify([v.to_dict() for v in jobs]), 201


@job_offer.route("/api/job_offer/<id>", methods=["DELETE"])
@jwt_required()
def delete_job_offer(id: int) -> tuple[Literal, int]:
    ca.logger.debug(f"Deleting job offer request: {id}")

    job_offer = JobOffer.query.filter_by(id=id).first()

    if job_offer:
        db.session.delete(job_offer)
        db.session.commit()

        return "", 204
    return jsonify(error="Job offer with provided id does not exist"), 404


@job_offer.route("/api/job_offer/<id>", methods=["PUT"])
@jwt_required()
def update_job_offer(id: int) -> tuple[Literal, int]:
    ca.logger.debug(f"Updating job offer request: {id}")

    job_offer = JobOffer.query.filter_by(id=id).first()

    if not job_offer:
        return jsonify(error="Job offer with provided id does not exist"), 404

    for k, v in request.json.items():
        try:
            setattr(job_offer, k, v)
        except KeyError:
            continue

    db.session.commit()

    return "", 204
