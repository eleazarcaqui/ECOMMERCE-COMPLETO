"""migrando producto

Revision ID: 4225a7882e8d
Revises: a628361d608c
Create Date: 2023-09-14 15:03:07.904821

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '4225a7882e8d'
down_revision = 'a628361d608c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('tbl_producto',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('nombre', sa.String(length=200), nullable=False),
    sa.Column('precio', sa.Double(), nullable=True),
    sa.Column('descripcion', sa.String(length=255), nullable=True),
    sa.Column('imagen', sa.String(length=255), nullable=True),
    sa.Column('fecha_registro', sa.Date(), nullable=True),
    sa.Column('stock', sa.Integer(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('tbl_producto')
    # ### end Alembic commands ###
