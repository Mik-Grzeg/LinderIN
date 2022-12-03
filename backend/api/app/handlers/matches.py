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


@matches.route("/api/matches", methods=["GET"])
@jwt_required()
def get_matches():
    keywords = request.args.getlist("keywords")
    ca.logger.debug(keywords)
    if keywords is not []:
        user_email = get_jwt_identity()
        user = User.query.filter_by(email=user_email).first()

        ca.logger.debug("Got keywords: {keywords}")
        if user:
            offers = JobOffer.query.all()

            result = []

            for offer in offers:
                offer_dict = offer.to_dict()
                offer_dict["matched"] = any([k in offer.keywords for k in keywords])
                result.append(offer_dict)

            ca.logger.debug(result)
            return jsonify([r for r in result]), 200
    return "", 200
