# Práctica compodoc

Este proyecto de angular cuenta con variedad de ejemplos de operaciones y elementos básicos presentes en proyectos de Angular.

## Pasos para la práctia

1. Clona este repositorio: ```git clone https://github.com/NicolasCifuentesB/Practica-compodoc.git```.
2. Instala compodoc: ```npm install -g @compodoc/compodoc```.
3. Crea en la ruta principal un nuevo archivo ```tsconfig.doc.json```.
4. En el archivo creado indica los ficheros a trabajar y excluir: ```{
    "include": [
        "src/**/*.ts"
    ],
    "exclude": [
        "src/test.ts",
        "src/**/*.spec.ts",
        "src/app/file-to-exclude.ts"
    ]
}```.

5. En el archivo ```package.json```, en el espacio de scripts coloca el comando: ```"compodoc": "npx compodoc -p tsconfig.doc.json -s -o"```
6. Ejecuta el comando ```npm run compodoc``` para compilar y abrir la documnetación en el navegador.

## Práctica

Para modificar el contenido principal de la documentación modifica el archivo ```README.md```.

Revisa el apartado de ```Documentation coverage``` y realiza la documentación necesaria para completarlo al 100%.
