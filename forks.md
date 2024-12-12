# Trabajando con forks en equipo

Una de las formas mas simples de trabajar en equipo en GitHub es a través de los forks. Un fork es una copia de un repositorio en el que puedes trabajar sin afectar el repositorio original.

El flujo de trabajo con forks es el siguiente:

1. Hacer un fork del repositorio original.
2. Clonar el fork a tu computadora.
3. Comprobamos si el remoto original está enlazado con `git remote -v`.
4. Agregamos el remoto original con `git remote add upstream <URL>`.
5. Modificamos el código.
6. Si el repositorio original ha sido actualizado, traemos los cambios con `git fetch upstream`.
7. Si ya tenemos cambios en nuestro fork, los integramos con `git add .` y `git commit -m "mensaje"`.
7. Integramos los cambios del repo principal con `git merge upstream/main`.
8. Resolvemos conflictos si los hay.
9. Añadimos los cambios resueltos con `git add .` y `git commit -m "mensaje"`.
10. Subimos los cambios a nuestro fork con `git push origin main`.
11. En github, creamos un `pull request` para solicitar que los cambios sean integrados al repositorio original.
12. Quien mantiene el repositorio original revisa los cambios y decide si los integra o no, acorde a las reglas del proyecto.
13. Los demás integrantes del equipo deben recibir una notificación de que hay una nueva versión del repositorio para actualizar su fork.

Normas:

No se aceptaran `pull requests` que no cumplan las siguientes normas:

1. El código debe estar bien documentado en el README.md
2. El código debe ser lo más limpio y estructurado posible.
3. Las variables deben tener nombres descriptivos y lo mas cortos posibles.
4. Las variables seguirán la convención `camelCase`.
5. Las funciones seguirán la convención `camelCase`.