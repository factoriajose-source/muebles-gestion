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
  "7022": {
    nombre: "7022 · Tapizados Mayor",
    precioPunto: 2.90, dtoMax: 25,
    desplegable: true,
    modelos: [
      {cod:"AKUA", nombre:"7022-AKUA", script:"tarifas_7022/catalogo_7022_akua.js", variable:"CATALOGO_7022_AKUA", carpeta:"tarifas_7022/img", color:"#455a64"},
      {cod:"BUTACA-450", nombre:"7022-BUTACA-450", script:"tarifas_7022/catalogo_7022_butaca_450.js", variable:"CATALOGO_7022_BUTACA_450", carpeta:"tarifas_7022/img", color:"#455a64"},
      {cod:"BUTACA-500", nombre:"7022-BUTACA-500", script:"tarifas_7022/catalogo_7022_butaca_500.js", variable:"CATALOGO_7022_BUTACA_500", carpeta:"tarifas_7022/img", color:"#455a64"},
      {cod:"CITY", nombre:"7022-CITY", script:"tarifas_7022/catalogo_7022_city.js", variable:"CATALOGO_7022_CITY", carpeta:"tarifas_7022/img", color:"#455a64"},
      {cod:"COJINES", nombre:"7022-COJINES", script:"tarifas_7022/catalogo_7022_cojines.js", variable:"CATALOGO_7022_COJINES", carpeta:"tarifas_7022/img", color:"#455a64"},
      {cod:"ELI", nombre:"7022-ELI", script:"tarifas_7022/catalogo_7022_eli.js", variable:"CATALOGO_7022_ELI", carpeta:"tarifas_7022/img", color:"#455a64"},
      {cod:"ESTELA", nombre:"7022-ESTELA", script:"tarifas_7022/catalogo_7022_estela.js", variable:"CATALOGO_7022_ESTELA", carpeta:"tarifas_7022/img", color:"#455a64"},
      {cod:"FENDY", nombre:"7022-FENDY", script:"tarifas_7022/catalogo_7022_fendy.js", variable:"CATALOGO_7022_FENDY", carpeta:"tarifas_7022/img", color:"#455a64"},
      {cod:"GEO", nombre:"7022-GEO", script:"tarifas_7022/catalogo_7022_geo.js", variable:"CATALOGO_7022_GEO", carpeta:"tarifas_7022/img", color:"#455a64"},
      {cod:"GIO", nombre:"7022-GIO", script:"tarifas_7022/catalogo_7022_gio.js", variable:"CATALOGO_7022_GIO", carpeta:"tarifas_7022/img", color:"#455a64"},
      {cod:"KENZO", nombre:"7022-KENZO", script:"tarifas_7022/catalogo_7022_kenzo.js", variable:"CATALOGO_7022_KENZO", carpeta:"tarifas_7022/img", color:"#455a64"},
      {cod:"KUORE", nombre:"7022-KUORE", script:"tarifas_7022/catalogo_7022_kuore.js", variable:"CATALOGO_7022_KUORE", carpeta:"tarifas_7022/img", color:"#455a64"},
      {cod:"LOTUS", nombre:"7022-LOTUS", script:"tarifas_7022/catalogo_7022_lotus.js", variable:"CATALOGO_7022_LOTUS", carpeta:"tarifas_7022/img", color:"#455a64"},
      {cod:"MAGNUM", nombre:"7022-MAGNUM", script:"tarifas_7022/catalogo_7022_magnum.js", variable:"CATALOGO_7022_MAGNUM", carpeta:"tarifas_7022/img", color:"#455a64"},
      {cod:"MARTINA", nombre:"7022-MARTINA", script:"tarifas_7022/catalogo_7022_martina.js", variable:"CATALOGO_7022_MARTINA", carpeta:"tarifas_7022/img", color:"#455a64"},
      {cod:"NINA", nombre:"7022-NINA", script:"tarifas_7022/catalogo_7022_nina.js", variable:"CATALOGO_7022_NINA", carpeta:"tarifas_7022/img", color:"#455a64"},
      {cod:"NOA", nombre:"7022-NOA", script:"tarifas_7022/catalogo_7022_noa.js", variable:"CATALOGO_7022_NOA", carpeta:"tarifas_7022/img", color:"#455a64"},
      {cod:"PETIT", nombre:"7022-PETIT", script:"tarifas_7022/catalogo_7022_petit.js", variable:"CATALOGO_7022_PETIT", carpeta:"tarifas_7022/img", color:"#455a64"},
      {cod:"POLO", nombre:"7022-POLO", script:"tarifas_7022/catalogo_7022_polo.js", variable:"CATALOGO_7022_POLO", carpeta:"tarifas_7022/img", color:"#455a64"},
      {cod:"PREMIUM", nombre:"7022-PREMIUM", script:"tarifas_7022/catalogo_7022_premium.js", variable:"CATALOGO_7022_PREMIUM", carpeta:"tarifas_7022/img", color:"#455a64"},
      {cod:"SENSE", nombre:"7022-SENSE", script:"tarifas_7022/catalogo_7022_sense.js", variable:"CATALOGO_7022_SENSE", carpeta:"tarifas_7022/img", color:"#455a64"},
      {cod:"TICO", nombre:"7022-TICO", script:"tarifas_7022/catalogo_7022_tico.js", variable:"CATALOGO_7022_TICO", carpeta:"tarifas_7022/img", color:"#455a64"},
      {cod:"TOPO", nombre:"7022-TOPO", script:"tarifas_7022/catalogo_7022_topo.js", variable:"CATALOGO_7022_TOPO", carpeta:"tarifas_7022/img", color:"#455a64"},
      {cod:"TRIANA", nombre:"7022-TRIANA", script:"tarifas_7022/catalogo_7022_triana.js", variable:"CATALOGO_7022_TRIANA", carpeta:"tarifas_7022/img", color:"#455a64"}
    ]
  },
  "6028": {
    nombre: "6028 · Quality",
    precioPunto: 3.02, dtoMax: 25,
    desplegable: true,   // muchos modelos: se elige en una lista desplegable
    modelos: [
      {cod:"AFRODITA-PLUS", nombre:"6028-AFRODITA-PLUS", script:"tarifas_6028/catalogo_6028_afrodita_plus.js", variable:"CATALOGO_6028_AFRODITA_PLUS", carpeta:"tarifas_6028/img", color:"#c2185b"},
      {cod:"APOLO-PLUS", nombre:"6028-APOLO-PLUS", script:"tarifas_6028/catalogo_6028_apolo_plus.js", variable:"CATALOGO_6028_APOLO_PLUS", carpeta:"tarifas_6028/img", color:"#c2185b"},
      {cod:"ATENEA-PLUS", nombre:"6028-ATENEA-PLUS", script:"tarifas_6028/catalogo_6028_atenea_plus.js", variable:"CATALOGO_6028_ATENEA_PLUS", carpeta:"tarifas_6028/img", color:"#c2185b"},
      {cod:"BETH", nombre:"6028-BETH", script:"tarifas_6028/catalogo_6028_beth.js", variable:"CATALOGO_6028_BETH", carpeta:"tarifas_6028/img", color:"#c2185b"},
      {cod:"CRONOS-PLUS", nombre:"6028-CRONOS-PLUS", script:"tarifas_6028/catalogo_6028_cronos_plus.js", variable:"CATALOGO_6028_CRONOS_PLUS", carpeta:"tarifas_6028/img", color:"#c2185b"},
      {cod:"EOS-PLUS", nombre:"6028-EOS-PLUS", script:"tarifas_6028/catalogo_6028_eos_plus.js", variable:"CATALOGO_6028_EOS_PLUS", carpeta:"tarifas_6028/img", color:"#c2185b"},
      {cod:"FRESTH", nombre:"6028-FRESTH", script:"tarifas_6028/catalogo_6028_fresth.js", variable:"CATALOGO_6028_FRESTH", carpeta:"tarifas_6028/img", color:"#c2185b"},
      {cod:"GEORGINA", nombre:"6028-GEORGINA", script:"tarifas_6028/catalogo_6028_georgina.js", variable:"CATALOGO_6028_GEORGINA", carpeta:"tarifas_6028/img", color:"#c2185b"},
      {cod:"IBIZA", nombre:"6028-IBIZA", script:"tarifas_6028/catalogo_6028_ibiza.js", variable:"CATALOGO_6028_IBIZA", carpeta:"tarifas_6028/img", color:"#c2185b"},
      {cod:"INFINITY-PLUS", nombre:"6028-INFINITY-PLUS", script:"tarifas_6028/catalogo_6028_infinity_plus.js", variable:"CATALOGO_6028_INFINITY_PLUS", carpeta:"tarifas_6028/img", color:"#c2185b"},
      {cod:"JAGUAR-PLUS", nombre:"6028-JAGUAR-PLUS", script:"tarifas_6028/catalogo_6028_jaguar_plus.js", variable:"CATALOGO_6028_JAGUAR_PLUS", carpeta:"tarifas_6028/img", color:"#c2185b"},
      {cod:"JAZZ", nombre:"6028-JAZZ", script:"tarifas_6028/catalogo_6028_jazz.js", variable:"CATALOGO_6028_JAZZ", carpeta:"tarifas_6028/img", color:"#c2185b"},
      {cod:"KEYRA", nombre:"6028-KEYRA", script:"tarifas_6028/catalogo_6028_keyra.js", variable:"CATALOGO_6028_KEYRA", carpeta:"tarifas_6028/img", color:"#c2185b"},
      {cod:"LANZAROTE", nombre:"6028-LANZAROTE", script:"tarifas_6028/catalogo_6028_lanzarote.js", variable:"CATALOGO_6028_LANZAROTE", carpeta:"tarifas_6028/img", color:"#c2185b"},
      {cod:"MALLORCA", nombre:"6028-MALLORCA", script:"tarifas_6028/catalogo_6028_mallorca.js", variable:"CATALOGO_6028_MALLORCA", carpeta:"tarifas_6028/img", color:"#c2185b"},
      {cod:"MARINA", nombre:"6028-MARINA", script:"tarifas_6028/catalogo_6028_marina.js", variable:"CATALOGO_6028_MARINA", carpeta:"tarifas_6028/img", color:"#c2185b"},
      {cod:"MENORCA", nombre:"6028-MENORCA", script:"tarifas_6028/catalogo_6028_menorca.js", variable:"CATALOGO_6028_MENORCA", carpeta:"tarifas_6028/img", color:"#c2185b"},
      {cod:"MORFEO-PLUS", nombre:"6028-MORFEO-PLUS", script:"tarifas_6028/catalogo_6028_morfeo_plus.js", variable:"CATALOGO_6028_MORFEO_PLUS", carpeta:"tarifas_6028/img", color:"#c2185b"},
      {cod:"NAOMI", nombre:"6028-NAOMI", script:"tarifas_6028/catalogo_6028_naomi.js", variable:"CATALOGO_6028_NAOMI", carpeta:"tarifas_6028/img", color:"#c2185b"},
      {cod:"NEW-DANCE", nombre:"6028-NEW-DANCE", script:"tarifas_6028/catalogo_6028_new_dance.js", variable:"CATALOGO_6028_NEW_DANCE", carpeta:"tarifas_6028/img", color:"#c2185b"},
      {cod:"NOE", nombre:"6028-NOE", script:"tarifas_6028/catalogo_6028_noe.js", variable:"CATALOGO_6028_NOE", carpeta:"tarifas_6028/img", color:"#c2185b"},
      {cod:"ODISEO", nombre:"6028-ODISEO", script:"tarifas_6028/catalogo_6028_odiseo.js", variable:"CATALOGO_6028_ODISEO", carpeta:"tarifas_6028/img", color:"#c2185b"},
      {cod:"PAGANI", nombre:"6028-PAGANI", script:"tarifas_6028/catalogo_6028_pagani.js", variable:"CATALOGO_6028_PAGANI", carpeta:"tarifas_6028/img", color:"#c2185b"},
      {cod:"PORTO", nombre:"6028-PORTO", script:"tarifas_6028/catalogo_6028_porto.js", variable:"CATALOGO_6028_PORTO", carpeta:"tarifas_6028/img", color:"#c2185b"},
      {cod:"RIHANNA", nombre:"6028-RIHANNA", script:"tarifas_6028/catalogo_6028_rihanna.js", variable:"CATALOGO_6028_RIHANNA", carpeta:"tarifas_6028/img", color:"#c2185b"},
      {cod:"SABBA", nombre:"6028-SABBA", script:"tarifas_6028/catalogo_6028_sabba.js", variable:"CATALOGO_6028_SABBA", carpeta:"tarifas_6028/img", color:"#c2185b"},
      {cod:"SELENE", nombre:"6028-SELENE", script:"tarifas_6028/catalogo_6028_selene.js", variable:"CATALOGO_6028_SELENE", carpeta:"tarifas_6028/img", color:"#c2185b"},
      {cod:"SHORT", nombre:"6028-SHORT", script:"tarifas_6028/catalogo_6028_short.js", variable:"CATALOGO_6028_SHORT", carpeta:"tarifas_6028/img", color:"#c2185b"},
      {cod:"SOUL", nombre:"6028-SOUL", script:"tarifas_6028/catalogo_6028_soul.js", variable:"CATALOGO_6028_SOUL", carpeta:"tarifas_6028/img", color:"#c2185b"},
      {cod:"SPACE", nombre:"6028-SPACE", script:"tarifas_6028/catalogo_6028_space.js", variable:"CATALOGO_6028_SPACE", carpeta:"tarifas_6028/img", color:"#c2185b"},
      {cod:"SWING", nombre:"6028-SWING", script:"tarifas_6028/catalogo_6028_swing.js", variable:"CATALOGO_6028_SWING", carpeta:"tarifas_6028/img", color:"#c2185b"},
      {cod:"TENERIFE", nombre:"6028-TENERIFE", script:"tarifas_6028/catalogo_6028_tenerife.js", variable:"CATALOGO_6028_TENERIFE", carpeta:"tarifas_6028/img", color:"#c2185b"},
      {cod:"TESLA-PLUS", nombre:"6028-TESLA-PLUS", script:"tarifas_6028/catalogo_6028_tesla_plus.js", variable:"CATALOGO_6028_TESLA_PLUS", carpeta:"tarifas_6028/img", color:"#c2185b"},
      {cod:"VANIA", nombre:"6028-VANIA", script:"tarifas_6028/catalogo_6028_vania.js", variable:"CATALOGO_6028_VANIA", carpeta:"tarifas_6028/img", color:"#c2185b"},
      {cod:"ZEUS-PLUS", nombre:"6028-ZEUS-PLUS", script:"tarifas_6028/catalogo_6028_zeus_plus.js", variable:"CATALOGO_6028_ZEUS_PLUS", carpeta:"tarifas_6028/img", color:"#c2185b"}
    ]
  },
  "8183": {
    nombre: "8183 · Liberto",
    precioPunto: 2.80, dtoMax: 25,
    modelos: [
      {cod:"LIBERTO-CLASICO", nombre:"8183-LIBERTO-CLASICO", script:"tarifas_8183/catalogo_8183_clasica.js", variable:"CATALOGO_8183_CLASICA", carpeta:"tarifas_8183/img/clasica", color:"#5b3a29"},
      {cod:"LIBERTO-SPAZIO", nombre:"8183-LIBERTO-SPAZIO", script:"tarifas_8183/catalogo_8183_spazio.js", variable:"CATALOGO_8183_SPAZIO", carpeta:"tarifas_8183/img/spazio", color:"#2e5e6e"}
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
      {cod:"PEKIN", nombre:"Pekín", script:"tarifas_3090/catalogo_3090_pekin.js", variable:"CATALOGO_3090_PEKIN", carpeta:"tarifas_3090/img/pekin", color:"#922b21"},
      {cod:"BOSTON", nombre:"Boston motor", script:"tarifas_3090/catalogo_3090_boston.js", variable:"CATALOGO_3090_BOSTON", carpeta:"tarifas_3090/img/boston", color:"#4a4a4a"}
    ]
  }
};