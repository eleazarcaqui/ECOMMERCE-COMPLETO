import os
import werkzeug

from flask_restful import Resource,Api, reqparse
from flask import request

from .. import api
from ..models import Producto
from ..schemas import ProductoSchema

api_productos = Api(api)

class UploadImage(Resource):

    def post(self):
        try:
            parse = reqparse.RequestParser()
            parse.add_argument('file',type=werkzeug.datastructures.FileStorage,location='files')
            args = parse.parse_args()
            
            image_file = args['file']
            image_file.save(os.path.join(os.getcwd(),'app','static','uploads',image_file.filename))
            
            url_path = request.host_url + 'static/uploads/' + str(image_file.filename)
            
            context = {
                'status':True,
                'content':url_path
            }
            
            return context,201
        
        except Exception as e:
            return {
                'status':False,
                'content':str(e)

            },500
        
class ProductoResource(Resource):
    def get(self):
        data = Producto.get_all()
        data_schema = ProductoSchema(many=True)
        
        context = {
            'status':True,
            'content':data_schema.dump(data)
        }
        
        return context

    def post(self):
        data = request.get_json()
        obj_producto = Producto(data['nombre'])
        if 'precio' in data:
            obj_producto.precio = data['precio']
        if 'descripcion' in data:
            obj_producto.descripcion = data['descripcion']        
        if 'imagen' in data:
            obj_producto.imagen = data['imagen']
        if 'fecha_registro' in data:
            obj_producto.fecha_registro = data['fecha_registro']
        if 'stock' in data:
            obj_producto.stock = data['stock']
        if 'categoria_id' in data:
            obj_producto.categoria_id = data['categoria_id']
            
        obj_producto.save()
        if 'categoria_id' in data:
            obj_producto.categoria_id = data['categoria_id']

        data_schema = ProductoSchema()

        context = {
            'status':True,
            'content':data_schema.dump(obj_producto)
        }

        return context

class ProductoDetailResource(Resource):
    
    def get(self,id):
        data = Producto.get_by_id(id)
        if not data:
             return{
                'status':False,
                'content':'producto no encontrado'
            },404
            
        data_schema = ProductoSchema()
        context = {
            'status':True,
            'content':data_schema.dump(data)
        }
        return context
    
    def put(self,id):
        obj_producto = Producto.get_by_id(id)
        if not obj_producto:
            return{
                'status':False,
                'content':'producto no encontrado'
            },404
        
        data = request.get_json()    
        if 'nombre' in data:
            obj_producto.nombre = data['nombre']
        if 'precio' in data:
            obj_producto.precio = data['precio']
        if 'descripcion' in data:
            obj_producto.descripcion = data['descripcion'] 
        if 'imagen' in data:
            obj_producto.imagen = data['imagen']
        if 'fecha_registro' in data:
            obj_producto.fecha_registro = data['fecha_registro']
        if 'stock' in data:
            obj_producto.stock = data['stock']
        if 'categoria_id' in data:
            obj_producto.categoria_id = data['categoria_id']
                
        obj_producto.save()
        
        data_schema = ProductoSchema()
        context = {
            'status':True,
            'content':data_schema.dump(obj_producto)
        }
        return context
    
    def delete(self,id):
        try:
            obj_producto = Producto.get_by_id(id)
            obj_producto.delete()
            
            data_schema = ProductoSchema()
            
            context = {
                'status':True,
                'content':data_schema.dump(obj_producto)
            }
            
            return context
            
        except Exception as e:
            return {
                'status':False,
                'content': str(e)
            },500

api_productos.add_resource(ProductoResource,'/producto')
api_productos.add_resource(ProductoDetailResource,'/producto/<id>',endpoint='producto')