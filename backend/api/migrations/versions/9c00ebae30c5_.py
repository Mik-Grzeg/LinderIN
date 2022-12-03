"""empty message

Revision ID: 9c00ebae30c5
Revises: 34ee605f0d06
Create Date: 2022-12-03 12:20:12.829606

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9c00ebae30c5'
down_revision = '34ee605f0d06'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('job_offer', schema=None) as batch_op:
        batch_op.add_column(sa.Column('recruiter_email', sa.String(), nullable=True))
        batch_op.drop_constraint('job_offer_recruiter_id_fkey', type_='foreignkey')
        batch_op.create_foreign_key(None, 'user', ['recruiter_email'], ['email'])
        batch_op.drop_column('recruiter_id')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('job_offer', schema=None) as batch_op:
        batch_op.add_column(sa.Column('recruiter_id', sa.INTEGER(), autoincrement=False, nullable=True))
        batch_op.drop_constraint(None, type_='foreignkey')
        batch_op.create_foreign_key('job_offer_recruiter_id_fkey', 'user', ['recruiter_id'], ['id'])
        batch_op.drop_column('recruiter_email')

    # ### end Alembic commands ###