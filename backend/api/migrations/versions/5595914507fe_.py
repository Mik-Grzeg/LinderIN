"""empty message

Revision ID: 5595914507fe
Revises: 70e4dc5d5d04
Create Date: 2022-12-03 07:23:34.044600

"""
import sqlalchemy as sa
from alembic import op

# revision identifiers, used by Alembic.
revision = "5595914507fe"
down_revision = "70e4dc5d5d04"
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table("job_offer", schema=None) as batch_op:
        batch_op.add_column(sa.Column("img_uri", sa.String(), nullable=False))

    with op.batch_alter_table("user", schema=None) as batch_op:
        batch_op.add_column(sa.Column("img_uri", sa.String(), nullable=False))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table("user", schema=None) as batch_op:
        batch_op.drop_column("img_uri")

    with op.batch_alter_table("job_offer", schema=None) as batch_op:
        batch_op.drop_column("img_uri")

    # ### end Alembic commands ###