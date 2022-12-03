from collections import OrderedDict
from typing import Iterable

from app.extensions import db


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String, unique=True, nullable=False)
    first_name = db.Column(db.String, nullable=False)
    last_name = db.Column(db.String, nullable=False)
    city = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=False)
    recruiter_role = db.Column(db.Boolean, default=False, nullable=False)

    def to_dict_except_id(self) -> Iterable:
        return OrderedDict(
            {k: getattr(self, k) for k in self.__mapper__.c.keys() if k != "id"}
        )

    def to_dict(self) -> Iterable:
        return OrderedDict({k: getattr(self, k) for k in self.__mapper__.c.keys()})
