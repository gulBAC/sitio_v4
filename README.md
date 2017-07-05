# gulBAC - sitio web 4.0

## Volvimos a los sitios estáticos

Estamos usando [Cactus](https://github.com/koenbok/Cactus) para la generación de las páginas con el motor de templates de [Django](https://docs.djangoproject.com/en/dev/topics/templates/). La hoja de estilos es la de [MaterializeCss](http://materializecss.com/) con algunos pequeños cambios. Para la parte de meetups que carga información dinámica se usa [Jquery](http://jquery.com/) y [VueJs](http://vuejs.org/).

## Preparar el ambiente de desarrollo

### Instalar NPM y precompilar javascript y css

1. [Instalar Node.js](https://nodejs.org/en/download/package-manager/)
2. Instalar dependencias
```
$ cd /path/al/proyecto
$ npm install
```
3. Ejecutar webpack
```
$ ./node_modules/webpack/bin/webpack.js
```

### Instalar Cactus
1. Instalar usando easy_install
```
$ sudo apt-get install easy_install
$ sudo easy_install cactus
```

### Ejecutar servidor
```
$ cactus serve
```