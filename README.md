# Chapitas QOE Desktop

Aplicacion de escritorio para Windows y Mac que genera hojas carta imprimibles para chapitas.

## Requisitos de desarrollo

- Node.js
- pnpm

## Ejecutar en desarrollo

```powershell
pnpm install
pnpm start
```

## Crear aplicacion

Windows:

```powershell
pnpm build:win
```

En Windows se genera un ZIP portable. Descomprime el ZIP y abre `Chapitas QOE.exe`.

Mac:

```bash
pnpm build:mac
```

En Mac se generan ZIP portables para Intel y Apple Silicon. Si macOS avisa que la app viene de un desarrollador no identificado, abre con clic derecho sobre la app y luego **Abrir**.

Los archivos finales quedan en `dist/`.

Tambien hay una accion de GitHub llamada **Build desktop app**. Al ejecutarse, deja los ZIP descargables en la seccion **Artifacts** de la ejecucion.

## Uso

1. Abre la aplicacion.
2. Elige el tipo de chapita.
3. Usa **Agregar fotos**.
4. Toca una chapita para cambiar o borrar su foto.
5. Usa **Guardar PDF** o **Imprimir**.
