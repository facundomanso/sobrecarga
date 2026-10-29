# Sobrecarga

App para apuntar tus entrenos de gimnasio y aplicar sobrecarga progresiva (doble progresión): te sugiere cuándo subir peso o sumar repeticiones, con gráficas de progreso por ejercicio.

- Funciona sin internet y se instala en el teléfono como una app.
- Los datos se guardan solo en el teléfono de cada persona. Usa **Rutinas → Descargar copia** para hacer copias de seguridad.

## Instalar

1. Abre el link de la app en el teléfono.
2. **Android (Chrome):** toca "Instalar app" o menú ⋮ → "Instalar aplicación".
3. **iPhone (Safari):** botón Compartir → "Añadir a pantalla de inicio".

## Publicar cambios

Después de modificar `index.html`, sube el número de `VERSION` en `sw.js` para que los teléfonos reciban la versión nueva.

## App de Android (APK)

La carpeta `android/` es el proyecto de Capacitor que empaqueta esta misma app como APK.

Requisitos en la PC: Node, JDK 21 y Android SDK (en esta PC están en `~/android-tools`; cargar con `source ~/android-tools/env.sh`).

```bash
npm install
npm run apk   # copia la web a www/, sincroniza y compila
```

El APK queda en `android/app/build/outputs/apk/release/app-release.apk`.

La firma usa `~/sobrecarga-keys/keystore.properties`, que **no** está en el repositorio. Guarda una copia de esa carpeta: sin esa llave no se pueden publicar actualizaciones que se instalen encima de la app.

Antes de cada versión nueva, sube `versionCode` y `versionName` en `android/app/build.gradle`.
