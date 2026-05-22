![Homelab](./dashboard.png)

# 📦 Homelab Containers

Este repositorio contiene la simulación de un entorno Homelab completo desplegado en una máquina virtual utilizando Docker Compose. Incluye servicios de red, monitorización, automatización multimedia, almacenamiento en la nube y gestión de contenedores, todo orquestado de forma modular.

---

# 📁 Estructura del proyecto

El proyecto sigue la siguiente estructura, dentro de cada carpeta se encuentran los respectivos ficheros docker-compose.yml que ayudarán en la configuración y despliegue de los servicios.

```bash
.
├── grafana/
├── homepage/
├── media/
├── nextcloud/
├── nginx/
├── portainer/
└── prometheus/
```

---

# 🚀 Despliegue de servicios

Para el despliegue simplemente deberemos de clonar el repositirio :

```bash
git clone https://github.com/pablocsl/homelab-containers.git
```

También tenemos la opción de descargar el release que contendrá el repo comprimido.

![Release](https://img.shields.io/github/v/release/pablocsl/homelab-containers)

Después ajustaremos la configuración del fichero 'docker-compose.yml' y la necesaria que se encuentre en el directorio del servicio que queramos desplegar y finalmente nos quedaría ejecutar el siguiente comando :

```bash
docker compose up -d
```

---

# ⚠️ Aviso sobre configuración

En este repositorio se ha censurado información sensible por seguridad, por lo que encontrarán mucha información señalada o entre puntos suspensivos donde tendrán que ajustarlo según tus necesidades, recuerda que todos los entornos no son iguales. Básicamente encontrarás etiquetas como las siguientes :

- <user> → nombre del sistema o usuario
- <passwd> → contraseñas
- <ip> → IP de la máquina o dominio (puede necesitar que indiques el puerto)
- <api-key> → claves de servicios externos

También encontrarás valores con ... indicando partes omitidas o simplificadas.

---

# 🗒️ Nota sobre Proxy

Algunas rutas del Nginx Proxy Manager se han dejado parcialmente intactas para que se entienda el contexto real del despliegue, estas rutas deben ajustarse según vuestra infraestructura y configuración de red.

---

# 🧠 Objetivo del proyecto

Este proyecto tiene fines educativos y de simulación para:

- Aprender arquitectura de servicios en Docker
- Simular un entorno real de producción en casa
- Comunicación entre los servicios dentro de contenedores
- Entender los flujos que sigue la información
- Practicar redes internas, DNS y reverse proxy

---

# 📌 Aviso

Este entorno está diseñado para uso personal y educativo. No se recomienda exponerlo a internet sin una configuración adecuada de seguridad.
