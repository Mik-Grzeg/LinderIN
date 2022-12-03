"""empty message

Revision ID: 316bf7da28c4
Revises: 9c00ebae30c5
Create Date: 2022-12-03 13:06:37.119771

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '316bf7da28c4'
down_revision = '9c00ebae30c5'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('matches',
    sa.Column('person_id', sa.Integer(), nullable=False),
    sa.Column('job_offer_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['job_offer_id'], ['job_offer.id'], ),
    sa.ForeignKeyConstraint(['person_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('person_id', 'job_offer_id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('matches')
    # ### end Alembic commands ###
