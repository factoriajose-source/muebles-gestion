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
      {cod:"BAZA", nombre:"Baza", script:"tarifas_3090/catalogo_3090_baza.js", variable:"CATALOGO_3090_BAZA", carpeta:"tarifas_3090/img/baza", color:"#8b4513"},
      {cod:"SANTORINI", nombre:"Santorini", script:"tarifas_3090/catalogo_3090_santorini.js", variable:"CATALOGO_3090_SANTORINI", carpeta:"tarifas_3090/img/santorini", color:"#c0392b"},
      {cod:"GRANADA", nombre:"Granada", script:"tarifas_3090/catalogo_3090_granada.js", variable:"CATALOGO_3090_GRANADA", carpeta:"tarifas_3090/img/granada", color:"#b9770e"},
      {cod:"SOFIA", nombre:"Sofía", script:"tarifas_3090/catalogo_3090_sofia.js", variable:"CATALOGO_3090_SOFIA", carpeta:"tarifas_3090/img/sofia", color:"#d35400"},
      {cod:"NAPOLES-SICILIA", nombre:"Nápoles / Sicilia", script:"tarifas_3090/catalogo_3090_napoles_sicilia.js", variable:"CATALOGO_3090_NAPOLES_SICILIA", carpeta:"tarifas_3090/img/napoles_sicilia", color:"#2c3e50"},
      {cod:"MALAGA", nombre:"Málaga", script:"tarifas_3090/catalogo_3090_malaga.js", variable:"CATALOGO_3090_MALAGA", carpeta:"tarifas_3090/img/malaga", color:"#1f6f8b"},
      {cod:"JAEN", nombre:"Jaén", script:"tarifas_3090/catalogo_3090_jaen.js", variable:"CATALOGO_3090_JAEN", carpeta:"tarifas_3090/img/jaen", color:"#117a65"},
      {cod:"CORDOBA", nombre:"Córdoba", script:"tarifas_3090/catalogo_3090_cordoba.js", variable:"CATALOGO_3090_CORDOBA", carpeta:"tarifas_3090/img/cordoba", color:"#6c3483"},
      {cod:"CAPRI", nombre:"Capri", script:"tarifas_3090/catalogo_3090_capri.js", variable:"CATALOGO_3090_CAPRI", carpeta:"tarifas_3090/img/capri", color:"#7a3b8f"},
      {cod:"ENZO", nombre:"Enzo", script:"tarifas_3090/catalogo_3090_enzo.js", variable:"CATALOGO_3090_ENZO", carpeta:"tarifas_3090/img/enzo", color:"#c2185b"},
      {cod:"FLAVIO", nombre:"Flavio", script:"tarifas_3090/catalogo_3090_flavio.js", variable:"CATALOGO_3090_FLAVIO", carpeta:"tarifas_3090/img/flavio", color:"#e67e22"},
      {cod:"CRETA", nombre:"Creta", script:"tarifas_3090/catalogo_3090_creta.js", variable:"CATALOGO_3090_CRETA", carpeta:"tarifas_3090/img/creta", color:"#a04000"},
      {cod:"TOKIO", nombre:"Tokio", script:"tarifas_3090/catalogo_3090_tokio.js", variable:"CATALOGO_3090_TOKIO", carpeta:"tarifas_3090/img/tokio", color:"#b03a2e"},
      {cod:"DUBAI", nombre:"Dubai", script:"tarifas_3090/catalogo_3090_dubai.js", variable:"CATALOGO_3090_DUBAI", carpeta:"tarifas_3090/img/dubai", color:"#1a5276"},
      {cod:"NIZA", nombre:"Niza", script:"tarifas_3090/catalogo_3090_niza.js", variable:"CATALOGO_3090_NIZA", carpeta:"tarifas_3090/img/niza", color:"#148f77"},
      {cod:"BOMBAY", nombre:"Bombay", script:"tarifas_3090/catalogo_3090_bombay.js", variable:"CATALOGO_3090_BOMBAY", carpeta:"tarifas_3090/img/bombay", color:"#7d6608"},
      {cod:"BERLIN", nombre:"Berlín", script:"tarifas_3090/catalogo_3090_berlin.js", variable:"CATALOGO_3090_BERLIN", carpeta:"tarifas_3090/img/berlin", color:"#273746"},
      {cod:"LONDRES", nombre:"Londres", script:"tarifas_3090/catalogo_3090_londres.js", variable:"CATALOGO_3090_LONDRES", carpeta:"tarifas_3090/img/londres", color:"#566573"},
      {cod:"VALETTA", nombre:"Valetta", script:"tarifas_3090/catalogo_3090_valetta.js", variable:"CATALOGO_3090_VALETTA", carpeta:"tarifas_3090/img/valetta", color:"#884ea0"},
      {cod:"CUBA", nombre:"Cuba", script:"tarifas_3090/catalogo_3090_cuba.js", variable:"CATALOGO_3090_CUBA", carpeta:"tarifas_3090/img/cuba", color:"#239b56"},
      {cod:"ARIZONA", nombre:"Arizona", script:"tarifas_3090/catalogo_3090_arizona.js", variable:"CATALOGO_3090_ARIZONA", carpeta:"tarifas_3090/img/arizona", color:"#ca6f1e"},
      {cod:"HAWAI", nombre:"Hawai", script:"tarifas_3090/catalogo_3090_hawai.js", variable:"CATALOGO_3090_HAWAI", carpeta:"tarifas_3090/img/hawai", color:"#2e86c1"},
      {cod:"ROSA", nombre:"Rosa", script:"tarifas_3090/catalogo_3090_rosa.js", variable:"CATALOGO_3090_ROSA", carpeta:"tarifas_3090/img/rosa", color:"#d81b60"},
      {cod:"IBIZA", nombre:"Ibiza", script:"tarifas_3090/catalogo_3090_ibiza.js", variable:"CATALOGO_3090_IBIZA", carpeta:"tarifas_3090/img/ibiza", color:"#17a589"},
      {cod:"BAKU", nombre:"Baku", script:"tarifas_3090/catalogo_3090_baku.js", variable:"CATALOGO_3090_BAKU", carpeta:"tarifas_3090/img/baku", color:"#5d6d7e"},
      {cod:"PEKIN", nombre:"Pekín", script:"tarifas_3090/catalogo_3090_pekin.js", variable:"CATALOGO_3090_PEKIN", carpeta:"tarifas_3090/img/pekin", color:"#922b21"}
    ]
  }
};
