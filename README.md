# ReactColorPickerDemo

Demo de un Color Picker usando React.js
con componentes y props.

## Descripcion

Aplicacion web creada con React.js
que permite seleccionar colores
(azul, verde, rojo, amarillo)
mediante botones interactivos.
El color seleccionado se muestra
en un contenedor visual.

## Tecnologias

- React 17
- react-scripts
- CSS

## Requisitos

- Node.js
- npm

## Instalacion

Clonar el repositorio:

```bash
git clone https://github.com/Mteheran/ReactColorPickerDemo.git
cd ReactColorPickerDemo
```

Instalar dependencias:

```bash
npm install
```

## Ejecucion

Iniciar en modo desarrollo:

```bash
npm start
```

La aplicacion se abre en
[http://localhost:3000](http://localhost:3000)

## Scripts Disponibles

| Comando | Descripcion |
|---|---|
| `npm start` | Inicia el servidor |
| `npm run build` | Genera el build |
| `npm test` | Ejecuta los tests |

## Estructura del Proyecto

```
ReactColorPickerDemo/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── App.js
│   ├── App.css
│   ├── App.test.js
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Componentes

- **App**: Componente principal
  que renderiza el header
  y el ColorPicker.
- **ColorPicker**: Componente
  con botones para seleccionar
  el color activo.
- **ColorContainer**: Componente
  que muestra el color
  seleccionado.

## Licencia

Este proyecto es solo para
fines educativos y de
demostracion.
