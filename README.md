# To-Do-List-Backend

Este es un proyecto de To-Do-List desarrollado por dos equipos de la universidad. El backend está construido en KOA y escrito en Typescript. Se utilizan servicios en la nube para almacenar información de tareas pendientes y categorías de tareas.

## Tecnologías utilizadas

🚀 KOA
🔍 JOI
📚 Typescript
🗃️ DynamoDB
🔑 Cloud SQL
🌌 CosmosDB

## Integrantes del equipo

### Equipo 1
<div style="display: flex; justify-content: center; align-items: center;">
  <div style="text-align: center; margin-right: 20px;">
    <img src="https://img.freepik.com/fotos-premium/gato-traje-generado-inteligencia-artificial_764048-71.jpg?w=2000" alt="Juan Diego Londoño" style="width: 150px; height: 150px; border-radius: 50%;">
    <p>Juan Diego Londoño</p>
  </div>
  <div style="text-align: center; margin-right: 20px;">
    <img src="https://cdn.shopify.com/s/files/1/0255/7640/7143/products/poncelet_2n_1200x1200.jpg?v=1579034498" alt="Brandon Velasquez" style="width: 150px; height: 150px; border-radius: 50%;">
    <p>Brandon Velasquez</p>
  </div>
  <div style="text-align: center; margin-right: 20px;">
    <img src="https://www.thegreatcat.org/wp-content/uploads/2019/07/Eldar-Zakirov-Oscar-the-Gentle-Cat-724x1024.jpg" alt="Mario Alejandro Saldarriaga" style="width: 150px; height: 150px; border-radius: 50%;">
    <p>Mario Alejandro Saldarriaga</p>
  </div>
  <div style="text-align: center; margin-right: 20px;">
    <img src="https://img.freepik.com/fotos-premium/joven-hombre-negocios-confiado-encabezado-cabeza-gato-traje-negocios-negro-arte-contemporaneo_407348-1930.jpg?w=2000" alt="Sebastián Guzmán Agudelo" style="width: 150px; height: 150px; border-radius: 50%;">
    <p>Sebastián Guzmán Agudelo</p>
  </div>
  <div style="text-align: center;">
    <img src="https://i.pinimg.com/736x/1b/5c/0c/1b5c0c0259bb632db73b4568d8da3875.jpg" alt="Dianella Restrepo" style="width: 150px; height: 150px; border-radius: 50%;">
    <p>Dianella Restrepo</p>
  </div>
</div>

### Equipo 2
<div style="display: flex; justify-content: center; align-items: center;">
  <div style="text-align: center; margin-right: 20px;">
    <img src="https://i.imgur.com/2JXBMLb.jpg" alt="Mafe" style="width: 150px; height: 150px; border-radius: 50%;">
    <p>Mafe</p>
  </div>
  <div style="text-align: center; margin-right: 20px;">
    <img src="https://i.imgur.com/Xl7VyrH.jpg" alt="Sara" style="width: 150px; height: 150px; border-radius: 50%;">
    <p>Sara</p>
  </div>
  <div style="text-align: center;">
    <img src="https://i.imgur.com/gYjsKjg.jpg" alt="Santiago Velasquez" style="width: 150px; height: 150px; border-radius: 50%;">
    <p>Santiago Velasquez</p>
  </div>
</div>

## Servicios en la nube utilizados

### DynamoDB
Se utiliza DynamoDB para almacenar información de tareas pendientes, incluyendo su estado (completado o no completado), fecha de creación, fecha de vencimiento y cualquier otra información adicional que se necesite.

### Cloud SQL
Cloud SQL se utiliza para almacenar información de usuarios, como su nombre y correo electrónico, y también para almacenar información de sesiones de usuarios, lo que permite a los usuarios iniciar sesión en la aplicación y acceder a sus listas de tareas personales.

### CosmosDB
Se utiliza CosmosDB para almacenar información sobre las categorías o etiquetas que los usuarios pueden asignar a sus tareas. Esto permite tener una forma flexible de categorizar y organizar las tareas en la aplicación.

## Ejecución del proyecto
Para ejecutar el proyecto, se deben seguir los siguientes pasos:
1. Clonar el repositorio del proyecto.
2. Ejecutar el comando npm install en la carpeta del proyecto para instalar todas las dependencias.
3. Configurar las credenciales de acceso a los servicios en la nube utilizados en el archivo .env.
4. Ejecutar el comando npm run dev para iniciar el servidor en modo desarrollo.

¡Y eso es todo! Con estos simples pasos ya tendrás la aplicación funcionando en tu máquina.
