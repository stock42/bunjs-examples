# Bun.js Examples Repository

![Bun.js](assets/bun-logo.png)

Este repositorio contiene una colección de ejemplos prácticos que demuestran la potencia y simplicidad de Bun.js, incluyendo un contador de visitas en clúster y un blog ligero. Creado por [César Casas](https://www.linkedin.com/in/cesarcasas/) en [Stock42](https://stock42.com).

[![Bun.js](https://img.shields.io/badge/Bun.js-000000?style=flat-square&logo=bun&logoColor=white)](https://bun.sh)

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](https://opensource.org/licenses/MIT)

[![GitHub Stars](https://img.shields.io/github/stars/stock42/bunjs-examples?style=flat-square)](https://github.com/stock42/bunjs-examples/stargazers)

[![GitHub Watchers](https://img.shields.io/github/watchers/stock42/bunjs-examples?style=flat-square)](https://github.com/stock42/bunjs-examples/watchers)

[![GitHub Forks](https://img.shields.io/github/forks/stock42/bunjs-examples?style=flat-square)](https://github.com/stock42/bunjs-examples/network)

# Table of Contents

- [Instalación](#instalación)
- [Ejemplos](#ejemplos)
- [Contribuyendo](#contribuyendo)
- [Licencia](#licencia)
- [Contacto](#contacto)

# About

Este repositorio está diseñado para destacar la versatilidad y rendimiento de Bun.js a través de ejemplos concisos y funcionales. Cada ejemplo muestra diferentes aspectos de Bun, como su soporte nativo para TypeScript, clúster y integración con herramientas como Redis, SQLite y AWS S3. Ya sea un principiante o un desarrollador experimentado, estos ejemplos proporcionan una visión práctica de la construcción de aplicaciones web modernas con Bun.

Ejemplos actuales:

- Contador de visitas: Un contador de visitas escalable utilizando el clúster de Bun y la integración nativa de Redis.
- Blog: Un blog ligero impulsado por HTML, SQLite y AWS S3 para almacenamiento de activos.

## Instalación

Para comenzar, asegúrate de tener Bun.js instalado. Luego, clona el repositorio e instala las dependencias:

```bash
git clone https://github.com/stock42/bunjs-examples.git
cd bunjs-examples
bun install
```

# Ejemplos

## Contador de visitas

Este ejemplo muestra cómo crear un contador de visitas usando bunjs, usando cluster.
Para ejecutar este ejemplo, necesitas tener bunjs y redis instalados.

![Visit counter clustering](assets/clustering-visit-counter.png)

Para ejecutar:

```bash
bun src/visit-counter/visit-counter-cluster.ts
```

To test (you need to have autocannon installed):

```bash
./src/visit-counter/test.sh
```

## Blog

Este ejemplo muestra cómo crear un blog usando bunjs, usando sqlite y s3.
Para ejecutar este ejemplo, necesitas tener bunjs y redis instalados.

Para ejecutar este ejemplo, necesitas tener un bucket de S3.
Recuerda agregar las siguientes variables de entorno antes de ejecutar el ejemplo (puedes agregarlas a tu archivo .env):

![Blog home](assets/blog-home.png)

![Blog post](assets/blog-post.png)

```bash
export AWS_BUCKET=your-bucket-name
export AWS_REGION=your-bucket-region
export AWS_SECRET_ACCESS_KEY=your-bucket-secret-access-key
export AWS_ACCESS_KEY_ID=your-bucket-access-key-id
```

To run:

```bash
bun src/blog/index.ts
```

now, open the browser and go to http://localhost:8080

# Contribuyendo

¡Las contribuciones son bienvenidas!
Para agregar un nuevo ejemplo o mejorar los existentes:

- Fork el repositorio.
- Crea una nueva rama (git checkout -b feature/new-example).
- Agrega tu ejemplo en el directorio src con documentación clara.
- Update the README con los detalles del nuevo ejemplo.
- Submit a pull request.

Por favor, asegúrate de que tu código siga el estilo del proyecto (usa bun run format y bun run lint) y incluye pruebas donde sea aplicable.
Reporta problemas o sugiere características a través de la página de problemas de GitHub.

# Licencia

Este proyecto está licenciado bajo la Licencia MIT (LICENSE).

# Contacto

Creado por [César Casas](https://www.linkedin.com/in/cesarcasas/) en [Stock42](https://stock42.com). Para preguntas o comentarios, abre un problema en GitHub o házmelo saber a través de LinkedIn.
