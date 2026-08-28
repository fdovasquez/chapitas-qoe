# Publicar en GitHub y DigitalOcean

## 1. Crear repositorio en GitHub

Crea un repositorio nuevo llamado:

```text
chapitas-qoe
```

En la cuenta:

```text
fdovasquez
```

Luego, desde esta carpeta:

```powershell
git init
git add .
git commit -m "Initial chapitas app"
git branch -M main
git remote add origin https://github.com/fdovasquez/chapitas-qoe.git
git push -u origin main
```

## 2. Crear la app en DigitalOcean

Opcion visual:

1. Entra a DigitalOcean.
2. Ve a **Apps**.
3. Crea una app nueva desde GitHub.
4. Elige `fdovasquez/chapitas-qoe`.
5. Tipo de componente: **Static Site**.
6. Rama: `main`.
7. Source directory: `/`.
8. Build command: vacio.
9. Output directory: `/`.
10. Deploy.

Opcion con `doctl`, si lo tienes instalado y autenticado:

```powershell
doctl apps create --spec .do/app.yaml
```

## 3. Configurar dominio

Dominio:

```text
chapitas.qoe.cl
```

Si `qoe.cl` usa DNS de DigitalOcean:

1. En la app de DigitalOcean, abre **Networking**.
2. Agrega `chapitas.qoe.cl`.
3. Elige que DigitalOcean administre el dominio.
4. Verifica que la zona sea `qoe.cl`.

Si el DNS esta en otro proveedor:

1. En DigitalOcean, agrega `chapitas.qoe.cl`.
2. Elige que tu administras el DNS.
3. Copia el CNAME que DigitalOcean entrega.
4. En tu DNS crea:

```text
Tipo: CNAME
Host: chapitas
Destino: el-alias-que-entrega-digitalocean.ondigitalocean.app
```

La propagacion DNS puede tardar.

