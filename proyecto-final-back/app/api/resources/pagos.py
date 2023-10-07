from flask_restful import Resource, Api
from flask import request

from .. import api
from ..models import Pago
from ..schemas import PagoSchema

api_pagos = Api(api)

class pagoResource(Resource):
    def get(self):
        data = Pago.get_all()
        data_schema = PagoSchema(many=True)
        
        context = {
            'status':True,
            'content':data_schema.dump(data)
        }
        
        return context

    def post(self):
        data = request.get_json()
        obj_pago = Pago(data['nro_factura'])
        if 'fecha_factura' in data:
            obj_pago.fecha_factura = data['fecha_factura']
        if 'metodo_pago' in data:
            obj_pago.metodo_pago = data['metodo_pago']
        if 'estado_pago' in data:
            obj_pago.estado_pago = data['estado_pago']
        if 'direccion_envio' in data:
            obj_pago.direccion_envio = data['direccion_envio']
        if 'subtotal' in data:
            obj_pago.subtotal = data['subtotal']
        if 'igv' in data:
            obj_pago.igv = data['igv']
        if 'total' in data:
            obj_pago.total = data['total']
        if 'notas' in data:
            obj_pago.notas = data['notas']
        if 'cliente_id' in data:
            obj_pago.cliente_id = data['cliente_id']
        
        obj_pago.save()

        data_schema = PagoSchema()

        context = {
            'status':True,
            'content': data_schema.dump(obj_pago)
        }
        return context
    
class PagoDetailResource(Resource):

    def get(self,id):
        data = Pago.get_by_id(id)
        if not data:
             return{
                'status':False,
                'content':'Pago no encontrado'
            },404
            
        data_schema = PagoSchema()
        context = {
            'status':True,
            'content':data_schema.dump(data)
        }
        return context  
    
    def put(self,id):
        obj_pago = Pago.get_by_id(id)
        if not obj_pago:
            return{
                'status':False,
                'content':'Pago no encontrado'
            },404
        
        data = request.get_json()
        if 'nro_factura' in data:
            obj_pago.nro_factura = data['nro_factura']
        if 'fecha_factura' in data:
            obj_pago.fecha_factura = data['fecha_factura']
        if 'metodo_pago' in data:
            obj_pago.metodo_pago = data['metodo_pago']
        if 'estado_pago' in data:
            obj_pago.estado_pago = data['estado_pago']
        if 'direccion_envio' in data:
            obj_pago.direccion_envio = data['direccion_envio']
        if 'subtotal' in data:
            obj_pago.subtotal = data['subtotal']
        if 'igv' in data:
            obj_pago.igv = data['igv']
        if 'total' in data:
            obj_pago.total = data['total']
        if 'notas' in data:
            obj_pago.notas = data['notas']
        if 'cliente_id' in data:
            obj_pago.cliente_id = data['cliente_id']
    
        obj_pago.save()
        
        data_schema = PagoSchema()
        context = {
            'status':True,
            'content':data_schema.dump(obj_pago)
        }
        return context  
        
    def delete(self,id):
        try:
            obj_pago = Pago.get_by_id(id)
            obj_pago.delete()
            
            data_schema = PagoSchema()
            
            context = {
                'status':True,
                'content':data_schema.dump(obj_pago)
            }
            
            return context
            
        except Exception as e:
            return {
                'status':False,
                'content': str(e)
            },500
        
api_pagos.add_resource(pagoResource,'/pago')
api_pagos.add_resource(PagoDetailResource,'/pago/<id>',endpoint='pago')
