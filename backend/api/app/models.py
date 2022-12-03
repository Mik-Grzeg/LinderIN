from collections import OrderedDict
from typing import Iterable

from app.extensions import db


class ToDicter:
    def to_dict(self) -> Iterable:
        return OrderedDict({k: getattr(self, k) for k in self.__mapper__.c.keys()})


class User(db.Model, ToDicter):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String, unique=True, nullable=False)
    password = db.Column(db.String, nullable=False)
    first_name = db.Column(db.String, nullable=False)
    last_name = db.Column(db.String, nullable=False)
    city = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=False)
    recruiter_role = db.Column(db.Boolean, default=False, nullable=False)

    def to_dict_ignore(self) -> Iterable:
        return OrderedDict(
            {
                k: getattr(self, k)
                for k in self.__mapper__.c.keys()
                if k not in self.ignore_serializaton
            }
        )


class JobOffer(db.Model, ToDicter):
    id = db.Column(db.Integer, primary_key=True)
    keywords = db.Column(db.ARRAY(db.String), nullable=False)
