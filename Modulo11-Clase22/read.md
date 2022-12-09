### Paso 1. Instalar Node

Descargar Node desde su sitio oficial https://nodejs.org/en/

y verificar que lo tenemos instalado con el comando

```node --version```
 

### Paso 2. Instalar Sails

Usar el comando, en la terminal en modo admin

```npm install sails -g```

o

```sudo npm install sails -g```

Una vez instalado verificamos que funciona

```sails --version```

### Paso 3. Crear una carpeta de la API

Utilizar el comando API

```mkdir API``` e ingresamos con ```cd API```

### Paso 4. Generar el proyecto con sails

Utilizar el comando

```sails new```

Seleccionaremos la opción 2: Empty (pulsamos enter)

### Paso 5. Generación del API REST

Creamos la ruta post

```sails generate api post```

### Modificaremos la seguridad de nuestro proyecto

1. Abriremos la carpeta /api/config
2. Abrimos el archivo security.js

### Vamos a buscar el siguiente código

```
  // cors: {
  //   allRoutes: false,
  //   allowOrigins: '*',
  //   allowCredentials: false,
  // },
```

### Vamos a descomentar el código y lo vamos a configurar de la siguiente forma

```
  cors: {
     allRoutes: true,
     allowOrigins: '*',
     allowCredentials: false,
   },
```









