from typing import Literal

from app.extensions import db
from app.models import JobOffer, User, PotentialMatch
from flask import Blueprint
from flask import current_app as ca
from flask import jsonify, request
from flask_jwt_extended import get_jwt_identity, jwt_required
from sqlalchemy import select, text
from sqlalchemy.exc import IntegrityError

matches = Blueprint("matches", __name__)


# @matches.route("/api/matches/<keyword>", methods=["GET"])
# @jwt_required()
# def get_matches(keyword: str):
#     # keywords = request.args.getlist("keywords")
#     ca.logger.debug(keyword)
#     user_email = get_jwt_identity()
#     user = User.query.filter_by(email=user_email).first()

#     ca.logger.debug("Got keywords: {keywords}")
#     if user:
#         offers = JobOffer.query.all()

#         result = []

#         for offer in offers:
#             offer_dict = offer.to_dict()
#             offer_dict["matched"] = keyword in offer.keywords
#             result.append(offer_dict)

#         ca.logger.debug(result)
#         return jsonify([r for r in result]), 200
#     return "", 200


@matches.route("/api/matches/<keyword>", methods=["GET"])
@jwt_required()
def get_matches(keyword: str):
    # keywords = request.args.getlist("keywords")
    ca.logger.debug(keyword)
    user_email = get_jwt_identity()
    user = User.query.filter_by(email=user_email).first()

    ca.logger.debug("Got keywords: {keywords}")
    if user:
        offers = JobOffer.query.filter_by()

        result = []

        for offer in offers:
            offer_dict = offer.to_dict()
            offer_dict["matched"] = keyword in offer.keywords
            result.append(offer_dict)

        ca.logger.debug(result)
        return jsonify([r for r in result]), 200
    return "", 200

@matches.route("/api/matches/add_potential_match", methods=["POST"])
@jwt_required()
def add_potential_match():
    data = request.json
    job_offer_id = data.get("job_offer_id")
    recruiter_email = data.get("recruiter_email", "")
    worker_id = data.get("worker_id")

    ca.logger.debug(f"Worker_id: {worker_id}, Job_offer_id: {job_offer_id}")
    match = PotentialMatch(worker_id=worker_id, job_offer_id=job_offer_id)
    try:
        db.session.add(match)
        db.session.commit()

        ca.logger.info("Added potential match")
    except:
        ca.logger.warn("Unable to add potential match")
        return jsonify(error="Unable to add potential match"), 400

    return jsonify({}), 201


@matches.route("/api/matches/<id>/accept_match", methods=["PUT"])
@jwt_required()
def accept_match(id: int):

    ca.logger.debug(f"Accepted match: {id}")
    match = PotentialMatch.query.filter_by(id=id).first()
    if not match:
        return jsonify(error="Potential match does not exist"), 404

    match.was_it_matched = True

    try:
        db.session.commit()
        return "", 204
    except:
        ca.logger.error("unable to accept match: {id}")
        return "", 400

