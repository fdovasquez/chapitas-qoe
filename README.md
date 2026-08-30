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

En Mac se genera un DMG. El build de Mac debe hacerse desde un computador Mac.

Los archivos finales quedan en `dist/`.

## Uso

1. Abre la aplicacion.
2. Elige el tipo de chapita.
3. Usa **Agregar fotos**.
4. Toca una chapita para cambiar o borrar su foto.
5. Usa **Guardar PDF** o **Imprimir**.
