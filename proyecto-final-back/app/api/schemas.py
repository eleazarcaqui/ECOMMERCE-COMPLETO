from utils.db import ma

from marshmallow_sqlalchemy import SQLAlchemyAutoSchema,fields

from .models import Categoria,Producto,Cliente,Pago,Pedido,PedidoProducto

class CategoriaSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Categoria

class ProductoSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Producto
        
        include_relationships = True
    categoria = fields.Nested(CategoriaSchema)

class ClienteSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Cliente

class PagoSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Pago
        include_relationships = True
    cliente = fields.Nested(ClienteSchema)

class PedidoSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Pedido
        include_relationships = True
    Cliente = fields.Nested(ClienteSchema)

class PedidoProductoSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = PedidoProducto
        include_relationships = True
    Pedido = fields.Nested(PedidoSchema)
    Producto = fields.Nested(ProductoSchema)