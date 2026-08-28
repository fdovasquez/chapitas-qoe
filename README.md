# Generador de chapitas

Aplicacion web simple para preparar hojas carta con imagenes circulares para chapitas/botones.

## Uso

1. Abre la app.
2. Elige el tipo de chapita.
3. Presiona **Agregar fotos**.
4. Toca una chapita para cambiar o borrar su foto.
5. Presiona **PDF / Imprimir** y guarda como PDF o imprime al 100%.

La app usa por defecto chapitas visibles de 58 mm con corte de 70 mm.

## Publicacion sugerida

Dominio final:

```text
https://chapitas.qoe.cl
```

Repositorio sugerido:

```text
fdovasquez/chapitas-qoe
```

## DigitalOcean App Platform

Este proyecto esta listo para publicarse como **Static Site** en DigitalOcean App Platform.

La configuracion base esta en:

```text
.do/app.yaml
```

Si `qoe.cl` esta usando DNS de DigitalOcean, la app spec incluye el dominio `chapitas.qoe.cl` con zona `qoe.cl`.

