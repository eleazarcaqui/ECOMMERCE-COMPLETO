from flask import Blueprint

api = Blueprint('api',__name__,url_prefix='/api')

from .models import Categoria

from .resources import categorias
from .resources import productos
from .resources import pedidos
from .resources import clientes
from .resources import pagos