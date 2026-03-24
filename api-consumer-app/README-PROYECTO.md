# Actividad Evaluada: Consumo de API en Angular

## Descripción del Proyecto

Esta aplicación Angular demuestra el consumo de una API REST pública, cumpliendo con todos los requisitos de la actividad evaluada.

## Características Implementadas

✅ **Proyecto Angular correctamente estructurado**
- Estructura modular con separación de responsabilidades
- Componentes, servicios y modelos organizados en carpetas

✅ **Configuración de HttpClient**
- HttpClient configurado en `app.config.ts`
- Importación de `provideHttpClient()`

✅ **Servicio para consumo de API**
- `UserService` implementado en `src/app/services/user.service.ts`
- Métodos para obtener usuarios de JSONPlaceholder API

✅ **Peticiones GET implementadas**
- `getUsers()`: Obtiene lista completa de usuarios
- `getUserById()`: Obtiene usuario específico por ID

✅ **Integración en componente**
- `UserListComponent` consume el servicio
- Separación clara entre lógica (servicio) y presentación (componente)

✅ **Visualización de datos**
- Muestra 10 registros de usuarios en formato tabla
- Información mostrada: ID, Nombre, Usuario, Email, Teléfono, Ciudad, Empresa

✅ **Manejo de errores**
- Interceptación de errores HTTP
- Mensajes informativos al usuario
- Botón de reintento en caso de fallo

## API Utilizada

**JSONPlaceholder**: https://jsonplaceholder.typicode.com/users
- API pública gratuita para testing y prototipado
- Proporciona datos de usuarios ficticios
- No requiere autenticación

## Estructura del Proyecto

```
src/app/
├── components/
│   └── user-list/
│       ├── user-list.component.ts
│       ├── user-list.component.html
│       └── user-list.component.css
├── models/
│   └── user.model.ts
├── services/
│   └── user.service.ts
├── app.config.ts
├── app.ts
├── app.html
└── app.css
```

## Tecnologías Utilizadas

- **Angular 19** (última versión)
- **TypeScript**
- **RxJS** para manejo de observables
- **HttpClient** para peticiones HTTP
- **CSS3** para estilos responsivos

## Instrucciones de Ejecución

### Prerrequisitos
- Node.js (versión 18 o superior)
- Angular CLI instalado globalmente

### Pasos para ejecutar

1. **Navegar al directorio del proyecto:**
   ```bash
   cd api-consumer-app
   ```

2. **Instalar dependencias (si es necesario):**
   ```bash
   npm install
   ```

3. **Ejecutar la aplicación:**
   ```bash
   ng serve
   ```

4. **Abrir en el navegador:**
   - URL: http://localhost:4200
   - La aplicación se recargará automáticamente al hacer cambios

### Comandos adicionales

- **Compilar para producción:**
  ```bash
  ng build
  ```

- **Ejecutar tests:**
  ```bash
  ng test
  ```

## Funcionalidades de la Aplicación

### Pantalla Principal
- **Header**: Título y descripción de la aplicación
- **Botón Recargar**: Permite volver a cargar los datos
- **Tabla de Usuarios**: Muestra información estructurada
- **Footer**: Información del proyecto

### Manejo de Estados
- **Loading**: Indicador visual durante la carga
- **Error**: Mensaje de error con opción de reintento
- **Success**: Tabla con datos de usuarios
- **Empty**: Mensaje cuando no hay datos

### Responsive Design
- Diseño adaptativo para diferentes tamaños de pantalla
- Tabla con scroll horizontal en dispositivos móviles
- Estilos optimizados para tablets y móviles

## Cumplimiento de Requisitos

| Requisito | Estado | Implementación |
|-----------|--------|----------------|
| Proyecto Angular estructurado | ✅ | Estructura modular con carpetas organizadas |
| Configuración HttpClient | ✅ | Configurado en app.config.ts |
| Servicio para API | ✅ | UserService con métodos GET |
| Petición GET | ✅ | getUsers() implementado |
| Integración en componente | ✅ | UserListComponent |
| Mínimo 5 registros | ✅ | Muestra 10 usuarios |
| Formato estructurado | ✅ | Tabla HTML con estilos CSS |
| Manejo de errores | ✅ | Try-catch y mensajes de error |
| Separación lógica/presentación | ✅ | Servicio separado del componente |
| Código ordenado | ✅ | Indentación y comentarios |
| Aplicación funcional | ✅ | Compilación y ejecución exitosa |

## Autor

Proyecto desarrollado para la actividad evaluada de consumo de APIs en Angular.

## Notas Técnicas

- La aplicación utiliza Angular standalone components
- Implementa buenas prácticas de TypeScript
- Manejo de errores con RxJS operators
- Estilos CSS modernos con Flexbox y Grid
- Código limpio y bien documentado