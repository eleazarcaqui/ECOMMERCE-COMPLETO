"""migrando cliente

Revision ID: 67d20790d02d
Revises: 52a819f54456
Create Date: 2023-09-15 16:33:42.248579

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '67d20790d02d'
down_revision = '52a819f54456'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('tbl_cliente',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('nombre', sa.String(length=100), nullable=False),
    sa.Column('email', sa.String(length=100), nullable=False),
    sa.Column('direccion', sa.String(length=100), nullable=False),
    sa.Column('provincia', sa.String(length=20), nullable=False),
    sa.Column('telefono', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('tbl_cliente')
    # ### end Alembic commands ###
