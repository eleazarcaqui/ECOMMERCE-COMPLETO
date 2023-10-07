from flask_restful import Resource, Api
from flask import request

from .. import api
from ..models import Cliente
from ..schemas import ClienteSchema

api_clientes = Api(api)

class ClienteResource(Resource):
    def get(self):
        data = Cliente.get_all()
        data_schema = ClienteSchema(many=True)

        context = {
            'status':True,
            'content':data_schema.dump(data)
        }
        return context
    
    def post(self):
        data = request.get_json()
        obj_cliente = Cliente(data['nombre'])
        if 'email' in data:
            obj_cliente.email = data['email']
        if 'direccion' in data:
            obj_cliente.direccion = data['direccion']
        if 'provincia' in data:
            obj_cliente.provincia = data['provincia']
        if 'telefono' in data:
            obj_cliente.telefono = data['telefono']
        
        obj_cliente.save()

        data_schema = ClienteSchema()

        context = {
            'status':True,
            'content': data_schema.dump(obj_cliente)
        }
        return context

class ClienteDetailResource(Resource):

    def get(self,id):
        data = Cliente.get_by_id(id)
        if not data:
             return{
                'status':False,
                'content':'cliente no encontrado'
            },404
            
        data_schema = ClienteSchema()
        context = {
            'status':True,
            'content':data_schema.dump(data)
        }
        return context    

    def put(self,id):
        obj_cliente = Cliente.get_by_id(id)
        if not obj_cliente:
            return{
                'status':False,
                'content':'cliente no encontrado'
            },404
        
        data = request.get_json()    
        if 'nombre' in data:
            obj_cliente.nombre = data['nombre']
        if 'email' in data:
            obj_cliente.email = data['email']
        if 'direccion' in data:
            obj_cliente.direccion = data['direccion'] 
        if 'provincia' in data:
            obj_cliente.provincia = data['provincia']
        if 'telefono' in data:
            obj_cliente.telefono = data['telefono']
    
        obj_cliente.save()
        
        data_schema = ClienteSchema()
        context = {
            'status':True,
            'content':data_schema.dump(obj_cliente)
        }
        return context

    def delete(self,id):
        try:
            obj_cliente = Cliente.get_by_id(id)
            obj_cliente.delete()
            
            data_schema = ClienteSchema()
            
            context = {
                'status':True,
                'content':data_schema.dump(obj_cliente)
            }
            
            return context
            
        except Exception as e:
            return {
                'status':False,
                'content': str(e)
            },500

api_clientes.add_resource(ClienteResource,'/cliente')
api_clientes.add_resource(ClienteDetailResource,'/cliente/<id>',endpoint='cliente')