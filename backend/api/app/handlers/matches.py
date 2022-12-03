from typing import Literal

from app.extensions import db
from app.models import JobOffer, User
from flask import Blueprint
from flask import current_app as ca
from flask import jsonify, request
from flask_jwt_extended import get_jwt_identity, jwt_required
from sqlalchemy import select, text
from sqlalchemy.exc import IntegrityError

matches = Blueprint("matches", __name__)


@matches.route("/api/matches/<keyword>", methods=["GET"])
@jwt_required()
def get_matches(keyword: str):
    # keywords = request.args.getlist("keywords")
    ca.logger.debug(keyword)
    user_email = get_jwt_identity()
    user = User.query.filter_by(email=user_email).first()

    ca.logger.debug("Got keywords: {keywords}")
    if user:
        offers = JobOffer.query.all()

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
    worker_email = data.get("worker_email")

    



# @todo zapis matchow bazujac na swipach
