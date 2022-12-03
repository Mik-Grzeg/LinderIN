import hashlib

from config import Config


def hash_passwd(passwd: str) -> str:
    encoded_passwd_and_salt = (passwd + Config.JWT_SECRET_KEY).encode()
    return hashlib.md5(encoded_passwd_and_salt).hexdigest()
