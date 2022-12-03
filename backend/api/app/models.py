from collections import OrderedDict
from typing import Iterable

from app.extensions import db


class Base(db.Model):
    __abstract__ = True

    id = db.Column(db.Integer, primary_key=True)
    created_on = db.Column(db.DateTime, default=db.func.now())
    updated_on = db.Column(db.DateTime, default=db.func.now(), onupdate=db.func.now())

    ignore_serialization = []

    def to_dict(self) -> Iterable:
        return OrderedDict({k: getattr(self, k) for k in self.__mapper__.c.keys()})

    def to_dict_ignore(self) -> Iterable:
        return OrderedDict(
            {
                k: getattr(self, k)
                for k in self.__mapper__.c.keys()
                if k not in self.ignore_serializaton
            }
        )

matches = db.Table('matches',
    db.Column('person_id', db.Integer, db.ForeignKey('user.id'), primary_key=True),
    db.Column('job_offer_id', db.Integer, db.ForeignKey('job_offer.id'), primary_key=True)
)


class User(Base):
    email = db.Column(db.String, unique=True, nullable=False)
    password = db.Column(db.String, nullable=False)
    first_name = db.Column(db.String, nullable=False)
    last_name = db.Column(db.String, nullable=False)
    city = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=False)
    recruiter_role = db.Column(db.Boolean, default=False, nullable=False)
    job_offers = db.relationship("JobOffer", backref="recruiter", lazy=True)
    img_uri = db.Column(db.String, nullable=False)
    matches = db.relationship('JobOffer', secondary=matches, lazy='subquery',
            backref=db.backref('users', lazy=True))

    ignore_serializaton = ["id", "password"]


class JobOffer(Base):
    keywords = db.Column(db.ARRAY(db.String), nullable=False)
    description = db.Column(db.String, nullable=False)
    recruiter_email = db.Column(db.String, db.ForeignKey("user.email"))
    img_uri = db.Column(db.String, nullable=False)

# class Matches(db.Model):
#     potential_offers = db.Column(db.ARRAY(db.Integer))
#     matched_offers = db.Column(db.ARRAY(db.Integer))

