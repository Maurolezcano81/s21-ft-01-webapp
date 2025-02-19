
## ¿Qué es Git Flow?

Git Flow es una colección de extensiones para Git que proporcionan una metodología de ramificación basada en flujos de trabajo. Introduce dos ramas principales para el desarrollo y una serie de ramas de soporte para manejar características, lanzamientos y correcciones de errores.

## ¿Por qué usar Git Flow?

- **Estructura organizada**: Facilita el manejo de ramas y versiones.
- **Control de versiones**: Mejor gestión de versiones y lanzamientos.
- **Colaboración**: Simplifica el trabajo en equipo al seguir un flujo de trabajo claro y estructurado.

## Instalación

### Windows

1. Descarga e instala [Git](https://git-scm.com/download/win) si aún no lo tienes.
2. Abre la terminal de Git Bash y ejecuta:
   ```sh
   git flow init -d
   ```

Linux

```bash
sudo apt-get install git

```

Instalación Git Flow

```bash
sudo apt-get install git-flow
```

Inicializar Git Flow en tu repositorio

```bash
git flow init -d
```

## Configuración de Git Flow

Para inicializar Git Flow en tu repositorio, navega a tu directorio de trabajo y ejecuta:


```bash
git flow init

```

Esto configurará las ramas predeterminadas. A continuación, se te pedirá que confirmes las ramas y los nombres predeterminados. Puedes aceptar las sugerencias predeterminadas presionando `Enter`.

## Ramas principales

- `main`: La rama principal que contiene el historial oficial del proyecto.
- `develop`: Rama de desarrollo donde se integra el trabajo de todas las características.

## Ramas de soporte

- `feature`: Ramas para desarrollar nuevas características.
- `release`: Ramas para preparar lanzamientos.
- `hotfix`: Ramas para corregir errores en producción.

## Comandos importantes

### Iniciar una nueva característica

```bash
git flow feature start nombre-feature

```

### Finalizar una característica

```bash
git flow feature finish nombre-feature

```

Publicar una característica (para compartirla con otros desarrolladores


```bash
git flow feature publish nombre-feature

```

Obtener una característica de otro desarrollador

```bash
git flow feature pull origin nombre-feature

```

Iniciar una nueva rama de release

```bash
git flow release start nombre-release

```

Finalizar una rama de release

```bash 
git flow release finish nombre-release
```

Iniciar una nueva rama de hotfix

```bash
git flow hotfix start nombre-hotfix

```

Finalizar una rama de hotfix

```bash
git flow hotfix finish nombre-hotfix

```

## Flujo de trabajo típico

1. **Desarrollo de características**:
    
    - Crear una nueva rama de característica: `git flow feature start mi-feature`.
    - Trabajar en la característica.
    - Finalizar la característica: `git flow feature finish mi-feature`.
2. **Preparación para un lanzamiento**:
    
    - Crear una nueva rama de release: `git flow release start 1.0.0`.
    - Probar y corregir errores.
    - Finalizar la rama de release: `git flow release finish 1.0.0`.
3. **Corrección de errores en producción**:
    
    - Crear una nueva rama de hotfix: `git flow hotfix start nombre-hotfix`.
    - Corregir el error.
    - Finalizar la rama de hotfix: `git flow hotfix finish nombre-hotfix`.


## Comandos extras

**Verificar el estado de Git Flow**:

```bash
git flow status

```

**Eliminar una rama de característica remota**:

```bash
git push origin :feature/nombre-feature
```

**Eliminar una rama de release remota**:

```bash
git push origin :release/nombre-release

```

**Eliminar una rama de hotfix remota**:

```bash
git push origin :hotfix/nombre-hotfix

```

## Conclusión

Git Flow es una herramienta poderosa que facilita la gestión de ramas y el flujo de trabajo en proyectos de desarrollo. Al seguir una metodología clara, puedes mantener un proyecto organizado y colaborar de manera más eficiente con tu equipo.



una forma de trabajar usando el nombre de la incidencia de Jira en las ramas que se crean 

ejemplo

```bash
git flow feature start CST-8
```

```bash
git commit -m "Feature CST-8: creación y escructura del home"
```

como pushear ?

```bash
git push origin
```

ejemplo  :

```bash
git push origin feature/CST-8
```



Mensajes para el commit  

```HTML

Add: al agregar una nueva característica o funcionalidad
Fix: al corregir un error o problema en el código
Update: al actualizar una biblioteca o dependencia
Remove: al eliminar código o archivos
Refactor: al realizar una refactorización de código sin cambiar su funcionalidad
Optimize: al realizar una optimización del código para mejorar su rendimiento
Chance: al realizar un cambio que no encaja en ninguna de las categorías anteriores
Document: al agregar o mejorar la documentación del código

```
