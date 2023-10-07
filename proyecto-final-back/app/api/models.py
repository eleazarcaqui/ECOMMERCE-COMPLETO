from utils.db import db
from datetime import date, datetime
from sqlalchemy.orm import relationship
from sqlalchemy import event

class Categoria(db.Model):
    __tablename__ = "tbl_categoria"
    
    id = db.Column(db.Integer,primary_key=True)
    nombre = db.Column(db.String(200),nullable=False)
    marca = db.Column(db.String(100),nullable=False)
    descripcion = db.Column(db.String(254),nullable=True)
    
    def __init__(self,nombre,marca,descripcion):
        self.nombre = nombre
        self.marca = marca
        self.descripcion = descripcion
    
    @staticmethod
    def get_all():
        return Categoria.query.all()
    
    def save(self):
        if not self.id:
            db.session.add(self)
        db.session.commit()
        
    @staticmethod
    def get_by_id(id):
        return Categoria.query.get(id)
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()    

class Producto(db.Model):
    __tablename__ = "tbl_producto"
    
    id = db.Column(db.Integer,primary_key=True)
    nombre = db.Column(db.String(200),nullable=False)
    precio = db.Column(db.Double,default=0)
    descripcion = db.Column(db.String(255),nullable=True)
    imagen = db.Column(db.String(255),
                       default='https://www.ryr-shop.com.pe/wp-content/uploads/2023/06/Laptop-gamer-MSI-Raider-GE66-Intel-mod-1.png')
    fecha_registro = db.Column(db.Date, default=date.today())
    stock = db.Column(db.Integer,default=0)
    categoria_id = db.Column(db.Integer,db.ForeignKey('tbl_categoria.id'),nullable=True)
    categoria = relationship("Categoria", backref="productos")

    def __init__(self,nombre):
        self.nombre = nombre

    @staticmethod
    def get_all():
        return Producto.query.all()
    
    @staticmethod
    def get_by_id(id):
        return Producto.query.get(id)
    
    def save(self):
        if not self.id:
            db.session.add(self)
        db.session.commit()
        
    def delete(self):
        db.session.delete(self)
        db.session.commit()

class Cliente(db.Model):
    __tablename__ = "tbl_cliente"

    id = db.Column(db.Integer,primary_key=True)
    nombre = db.Column(db.String(100),nullable=False)
    email = db.Column(db.String(100),nullable=False, unique=True)
    direccion = db.Column(db.String(100),nullable=False)
    provincia = db.Column(db.String(20),nullable=False)
    telefono = db.Column(db.Integer,default=0)

    def __init__(self,nombre):
        self.nombre = nombre

    @staticmethod
    def get_all():
        return Cliente.query.all()
    
    def save(self):
        if not self.id:
            db.session.add(self)
        db.session.commit()

    @staticmethod
    def get_by_id(id):
        return Cliente.query.get(id)
      
    def delete(self):
        db.session.delete(self)
        db.session.commit()

class Pago(db.Model):
    __tablename__ = "tbl_pago"

    id = db.Column(db.Integer,primary_key=True)
    nro_factura = db.Column(db.Integer,default=0)
    fecha_factura = db.Column(db.Date, default=datetime)
    metodo_pago = db.Column(db.String(20), nullable=False)
    estado_pago = db.Column(db.String(20), nullable=False)
    direccion_envio = db.Column(db.String(255), nullable=False)
    subtotal = db.Column(db.Double, default=0)
    igv = db.Column(db.Double, default=0.18)
    total = db.Column(db.Double, default=0)
    notas = db.Column(db.String(255), nullable=True)
    cliente_id = db.Column(db.Integer,db.ForeignKey('tbl_cliente.id'),nullable=True)
    
    def __init__(self,nro_factura):
        self.nro_factura = nro_factura

    @staticmethod
    def get_all():
        return Pago.query.all()
    
    def save(self):
        if not self.id:
            db.session.add(self)
        db.session.commit()

    @staticmethod
    def get_by_id(id):
        return Pago.query.get(id)
      
    def delete(self):
        db.session.delete(self)
        db.session.commit()

class Pedido(db.Model):
    __tablename__ = "tbl_pedido"
     
    id = db.Column(db.Integer,primary_key=True)
    cantidad = db.Column(db.Integer, default=0)
    direccion_compra = db.Column(db.String(255), nullable=False)
    direccion_pedido = db.Column(db.String(255), nullable=False)
    fecha_pedido = db.Column(db.Date, default=datetime)
    estado_pedido = db.Column(db.String(20), nullable=False)
    metodo_entrega = db.Column(db.String(20), nullable=False)
    cliente_id = db.Column(db.Integer,db.ForeignKey('tbl_cliente.id'), nullable=True)

    def __init__(self,cantidad):
        self.cantidad = cantidad

    @staticmethod
    def get_all():
        return Pedido.query.all()
    
    def save(self):
        if not self.id:
            db.session.add(self)
        db.session.commit()

    @staticmethod
    def get_by_id(id):
        return Pedido.query.get(id)
      
    def delete(self):
        db.session.delete(self)
        db.session.commit()
        
class PedidoProducto(db.Model):
    __tablename__ = 'tbl_pedido_producto'

    id = db.Column(db.Integer,primary_key=True)
    pedido_id = db.Column(db.Integer,db.ForeignKey('tbl_pedido.id'), nullable=True)
    producto_id = db.Column(db.Integer,db.ForeignKey('tbl_producto.id'), nullable=True)
    cantidad = db.Column(db.Integer,default=0)

    @staticmethod
    def get_all():
        return PedidoProducto.query.all()