pasos:
1.- instalacion de entorno virtual
- python -m venv venv
- venv\scripts\activate
2.- agregar todo las librerias y extensiones en archivo requirements.txt 
- pip install -r requirements.txt
3.- creacion de carpetas 
- app, utils, run.py
- creacion de archivos dentro de las carpetas 
4.- hacer las migraciones a base de datos 
- flask db init
- flask db migrate -m "commit"
- flask db upgrade