from flask_restful import Resource, Api
from flask import request

from .. import api
from ..models import Pedido
from ..schemas import PedidoSchema

api_pedidos = Api(api)

class PedidoResource(Resource):
    def get(self):
        data = Pedido.get_all()
        data_schema = PedidoSchema(many=True)

        context={
            'status': True,
            'content': data_schema.dump(data)
        }
        return context
    def post(self):
        data = request.get_json()
        obj_pedido = Pedido(data['cantidad'])
        if 'direccion_compra' in data:
            obj_pedido.direccion_compra = data['direccion_compra']
        if 'direccion_pedido' in data:
            obj_pedido.direccion_pedido = data['direccion_pedido']
        if 'fecha_pedido' in data:
            obj_pedido.fecha_pedido = data['fecha_pedido']
        if 'estado_pedido' in data:
            obj_pedido.estado_pedido = data['estado_pedido']
        if 'metodo_entrega' in data:
            obj_pedido.metodo_entrega = data['metodo_entrega']
        if 'cliente_id' in data:
            obj_pedido.cliente_id = data['cliente_id']

        obj_pedido.save()
        data_schema = PedidoSchema()

        context ={
            'status':True,
            'content':data_schema.dump(obj_pedido)
        }
        return context

class PedidoDetailResource(Resource):

    def get(self,id):
        data = Pedido.get_by_id(id)
        if not data:
             return{
                'status':False,
                'content':'Pedido no encontrado'
            },404
            
        data_schema = PedidoSchema()
        context = {
            'status':True,
            'content':data_schema.dump(data)
        }
        return context  
    
    def put(self,id):
        obj_pedido = Pedido.get_by_id(id)
        if not obj_pedido:
            return{
                'status':False,
                'content':'Pedido no encontrado'
            },404
        
        data = request.get_json()
        if 'cantidad' in data:
            obj_pedido.cantidad = data['cantidad']
        if 'direccion_compra' in data:
            obj_pedido.direccion_compra = data['direccion_compra']
        if 'direccion_pedido' in data:
            obj_pedido.direccion_pedido = data['direccion_pedido']
        if 'fecha_pedido' in data:
            obj_pedido.fecha_pedido = data['fecha_pedido']
        if 'estado_pedido' in data:
            obj_pedido.estado_pedido = data['estado_pedido']
        if 'metodo_entrega' in data:
            obj_pedido.metodo_entrega = data['metodo_entrega']
        if 'cliente_id' in data:
            obj_pedido.cliente_id = data['cliente_id'] 

        obj_pedido.save()
        data_schema = PedidoSchema()

        context ={
            'status':True,
            'content':data_schema.dump(obj_pedido)
        }
        return context   

    def delete(self,id):
       
        obj_pedido = Pedido.get_by_id(id)
        obj_pedido.delete()
        
        data_schema = PedidoSchema()
        
        context = {
            'status':True,
            'content':data_schema.dump(obj_pedido)
        }
        
        return context    
    
api_pedidos.add_resource(PedidoResource,'/pedido')
api_pedidos.add_resource(PedidoDetailResource,'/pedido/<id>',endpoint='pedido')