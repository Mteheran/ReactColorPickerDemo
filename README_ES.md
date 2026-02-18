# 🎨 React Color Picker Demo

Una aplicación interactiva y sencilla de selector de colores construida con React que demuestra el uso de **props** y **estado de componentes** para cambiar colores dinámicamente en la pantalla.

[![React](https://img.shields.io/badge/React-17.0.2-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Licencia](https://img.shields.io/badge/Licencia-MIT-green.svg)](LICENSE)
[![Azure Static Web Apps CI/CD](https://github.com/Mteheran/ReactColorPickerDemo/actions/workflows/azure-static-web-apps-mango-flower-00e2aa010.yml/badge.svg)](https://github.com/Mteheran/ReactColorPickerDemo/actions)

> 🌐 [English version](README.md)

---

## 📖 Tabla de Contenidos

- [Acerca del Proyecto](#-acerca-del-proyecto)
- [Demostración](#-demostración)
- [Primeros Pasos](#-primeros-pasos)
  - [Requisitos Previos](#requisitos-previos)
  - [Instalación](#instalación)
  - [Ejecutar la Aplicación](#ejecutar-la-aplicación)
- [Scripts Disponibles](#-scripts-disponibles)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Cómo Funciona](#️-cómo-funciona)
- [Tecnologías Utilizadas](#️-tecnologías-utilizadas)
- [Contribuir](#-contribuir)
- [Licencia](#-licencia)

---

## 📌 Acerca del Proyecto

Este proyecto es una aplicación React ideal para principiantes que muestra cómo usar **props** y **estado** para construir componentes de interfaz interactivos. Los usuarios pueden hacer clic en botones de colores (🔵 azul, 🟢 verde, 🔴 rojo, 🟡 amarillo) para cambiar el color de fondo de un contenedor en tiempo real.

Es ideal para desarrolladores que están aprendiendo:

- Composición de componentes en React
- Paso de datos mediante **props**
- Gestión de **estado** con componentes de clase
- Manejo de eventos en React

---

## 🚀 Demostración

Una vez en ejecución, la aplicación muestra un encabezado con el logo de React y una sección de selector de colores. Haz clic en cualquiera de los cuatro botones de color para actualizar instantáneamente el área de visualización:

| Acción | Resultado |
|---|---|
| Clic en botón 🔵 Azul | El contenedor se vuelve **azul** |
| Clic en botón 🟢 Verde | El contenedor se vuelve **verde** |
| Clic en botón 🔴 Rojo | El contenedor se vuelve **rojo** |
| Clic en botón 🟡 Amarillo | El contenedor se vuelve **amarillo** |

---

## 🏁 Primeros Pasos

### Requisitos Previos

- **Node.js** (v12 o superior recomendado)
- **npm** (incluido con Node.js) o **yarn**

> 💡 Puedes verificar tu instalación ejecutando:
> ```bash
> node --version
> npm --version
> ```

### Instalación

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/Mteheran/ReactColorPickerDemo.git
   cd ReactColorPickerDemo
   ```

2. **Instalar dependencias:**

   Usando npm:
   ```bash
   npm install
   ```

   O usando yarn:
   ```bash
   yarn install
   ```

### Ejecutar la Aplicación

Iniciar el servidor de desarrollo:

```bash
npm start
```

O con yarn:

```bash
yarn start
```

La aplicación se abrirá automáticamente en [http://localhost:3000](http://localhost:3000) en tu navegador predeterminado.

---

## 📜 Scripts Disponibles

| Comando | Descripción |
|---|---|
| `npm start` | 🚀 Ejecuta la aplicación en modo desarrollo en `localhost:3000` |
| `npm run build` | 📦 Crea una compilación optimizada para producción en la carpeta `build/` |
| `npm test` | 🧪 Inicia el ejecutor de pruebas en modo interactivo |
| `npm run eject` | ⚠️ Expone la configuración de Create React App (irreversible) |

---

## 📁 Estructura del Proyecto

```
ReactColorPickerDemo/
├── public/
│   ├── favicon.ico          # Ícono de la aplicación
│   ├── index.html           # Plantilla HTML
│   └── manifest.json        # Manifiesto PWA
├── src/
│   ├── App.css              # Estilos de la aplicación y el selector de colores
│   ├── App.js               # Componente principal con la lógica del ColorPicker
│   ├── App.test.js          # Prueba básica de renderizado
│   ├── index.css            # Estilos globales
│   ├── index.js             # Punto de entrada de la aplicación
│   ├── logo.svg             # Logo de React
│   └── registerServiceWorker.js  # Service worker para soporte offline
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Cómo Funciona

La aplicación está compuesta por dos componentes clave definidos en `src/App.js`:

1. **`ColorContainer`** — Un componente funcional que recibe una prop `color` y aplica una clase CSS correspondiente para renderizar una caja de color.

2. **`ColorPicker`** — Un componente de clase que gestiona el color seleccionado actualmente en su **estado** interno. Cuando un usuario hace clic en uno de los cuatro botones de color, el estado se actualiza y el `ColorContainer` se vuelve a renderizar con el nuevo color.

```
Usuario hace clic → setState({ color }) → ColorContainer se re-renderiza → Nuevo color mostrado
```

---

## 🛠️ Tecnologías Utilizadas

- [React](https://reactjs.org/) `17.0.2` — Biblioteca JavaScript para construir interfaces de usuario
- [React DOM](https://reactjs.org/docs/react-dom.html) `17.0.2` — Métodos específicos del DOM para React
- [Create React App](https://create-react-app.dev/) — Herramienta para iniciar aplicaciones React
- [Azure Static Web Apps](https://azure.microsoft.com/en-us/products/app-service/static) — CI/CD y alojamiento

---

## 🤝 Contribuir

¡Las contribuciones, problemas y solicitudes de funcionalidades son bienvenidas!

1. **Haz un fork** del repositorio
2. **Crea** tu rama de funcionalidad (`git checkout -b feature/funcionalidad-increible`)
3. **Confirma** tus cambios (`git commit -m 'Agregar funcionalidad increíble'`)
4. **Sube** la rama (`git push origin feature/funcionalidad-increible`)
5. **Abre** un Pull Request

No dudes en abrir un [issue](https://github.com/Mteheran/ReactColorPickerDemo/issues) si encuentras un error o tienes una sugerencia.

---

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia [MIT](LICENSE).

---

_Originalmente escrito y mantenido por los contribuidores y [Devin](https://app.devin.ai), con actualizaciones del equipo principal._
