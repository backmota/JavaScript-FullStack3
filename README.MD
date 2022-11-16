### Comandos NPM

Vamos a enumerar los principales comandos de inmediato y los utilizaremos de forma coherente y los veremos en detalle

- npm init - Inicializa npm en el proyecto y crea el archivo package.json.
- npm install - Instala todas las dependencias listadas en package.json.
- npm list --depth=0 - Muestra en el terminal la lista de los paquetes instalados localmente con números de versión y sin dependencias.
- npm install [nombre del paquete] - Instala el paquete localmente en la carpeta node_modules.
- npm uninstall [nombre-paquete] - Elimina el paquete instalado localmente y actualiza `paquete.json.
- npm start y npm test - Ejecuta el script start o test ubicado en paquete.json
- npm run [custom-script] - Ejecuta el script personalizado ubicado en el package paquete.json`.
- npm outdated - se utiliza para buscar actualizaciones, detectar compatibles versiones mediante programación y mostrar la lista de actualizaciones disponibles.
- npm update - Actualiza todos los paquetes a la versión máxima permitida.

### Inicialización del proyecto

Cada proyecto comienza con la creación de un archivo package.json, mantiene un seguimiento de las dependencias, contiene información de servicio, permite escribir scripts npm y sirve como una instrucción para crear un nuevo proyecto basado en la configuración ya preparada. El archivo package.json puede ser creado con el comando npm init, inicializando así el proyecto en la carpeta actual.

```npm init --yes``
