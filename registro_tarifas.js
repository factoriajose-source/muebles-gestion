/* ============================================================
   REGISTRO DE TARIFAS INTERACTIVAS
   Aquí se apuntan los proveedores y sus modelos.
   - Para AÑADIR un modelo: se añade una línea en "modelos" del proveedor
     (y se suben a GitHub su fichero catalogo_*.js y su carpeta de imágenes).
   - precioPunto / dtoMax son solo valores POR DEFECTO: la página los
     sustituye por los de Proveedores (proveedores.html) cuando los lee.
   ============================================================ */
const REGISTRO_TARIFAS = {
  "8194": {
    nombre: "8194",
    precioPunto: 3.34, dtoMax: 20,
    modelos: [
      {cod:"NATI", nombre:"NATI", script:"catalogo_nati.js", variable:"CATALOGO_NATI", carpeta:"img8194", color:"#1a6b2a"},
      {cod:"ALBA", nombre:"ALBA", script:"catalogo_alba.js", variable:"CATALOGO_ALBA", carpeta:"imgALBA", color:"#003580"}
    ]
  },
  "3090": {
    nombre: "3090 · Confourt (sofás)",
    precioPunto: 1.97, dtoMax: 30,
    modelos: [
      {cod:"CAPRI", nombre:"Capri", script:"catalogo_3090_capri.js", variable:"CATALOGO_3090_CAPRI", carpeta:"img3090/capri", color:"#7a3b8f"}
    ]
  }
};
