const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("chapitasDesktop", {
  savePdf: () => ipcRenderer.invoke("save-pdf"),
  onSavePdfShortcut: (callback) => {
    ipcRenderer.on("desktop-save-pdf", callback);
  }
});

