"""migrando pago

Revision ID: 61e444c68131
Revises: 8ca8a11e68dd
Create Date: 2023-09-19 10:20:22.189676

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '61e444c68131'
down_revision = '8ca8a11e68dd'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('tbl_pago',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('nro_factura', sa.Integer(), nullable=True),
    sa.Column('fecha_factura', sa.Date(), nullable=True),
    sa.Column('metodo_pago', sa.String(length=20), nullable=False),
    sa.Column('estado_pago', sa.String(length=20), nullable=False),
    sa.Column('direccion_envio', sa.String(length=255), nullable=False),
    sa.Column('subtotal', sa.Double(), nullable=True),
    sa.Column('igv', sa.Double(), nullable=True),
    sa.Column('total', sa.Double(), nullable=True),
    sa.Column('notas', sa.String(length=255), nullable=True),
    sa.Column('cliente_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['cliente_id'], ['tbl_cliente.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('tbl_pago')
    # ### end Alembic commands ###