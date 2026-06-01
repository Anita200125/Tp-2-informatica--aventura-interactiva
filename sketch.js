let estado = "menu";

// IMÁGENES
let imgPortada;
let imgCalleSinRata;
let imgRata;
let imgInteriorContenedor;
let imgRataComiendo;
let imgPersonaContenedor;
let imgRataMuerta;
let imgRataAtacaVagabundo;
let imgPoliciaVagabundoRata;
let imgRataEdificio;
let imgRataSubeCable;
let imgRataCableSinRata;

// IMÁGENES DEL DEPARTAMENTO
let imgRataCableViendoPersona;
let imgRataPasandoADepto;
let imgRataCasaSucia;
let imgCasaSuciaSinRata;
let imgPersonaRataJuntos;

// VARIABLES
let nombreRata = "";
let escribiendoNombre = false;

let rataX = 60;
let rataY = 285;
let rataW = 170;
let rataH = 90;

let rataCableX = 300;
let rataCableY = 290;

let contador = 0;
let ayuda = "";

// VARIABLES DE INTERACCIÓN
let observacion = 0;
let comidaEncontrada = 0;
let encontroPizza = false;
let encontroLata = false;
let encontroCaja = false;

function preload() {
  imgPortada = loadImage("img/portada.png");
  imgCalleSinRata = loadImage("img/calle_contenedor_sin_rata.png");
  imgRata = loadImage("img/rata_sola.png");
  imgInteriorContenedor = loadImage("img/contenedor_rata.png");
  imgRataComiendo = loadImage("img/rata_comiendo_borbojos.png");
  imgPersonaContenedor = loadImage("img/persona_abre_el_contenedor.png");
  imgRataMuerta = loadImage("img/rata_muerta.png");
  imgRataAtacaVagabundo = loadImage("img/rata_ataca_vagabundo.png");
  imgPoliciaVagabundoRata = loadImage("img/policia_vagabundo_rata.png");
  imgRataEdificio = loadImage("img/rata_edificio.png");
  imgRataSubeCable = loadImage("img/rata_sube_cable.png");
  imgRataCableSinRata = loadImage("img/rata_cable_sinrata.png");

  imgRataCableViendoPersona = loadImage("img/rata_cable_viendo_persona.png");
  imgRataPasandoADepto = loadImage("img/rata_pasando_a_depto.png");
  imgRataCasaSucia = loadImage("img/rata_casa_sucia.png");
  imgCasaSuciaSinRata = loadImage("img/casa_sucia_sin_rata.png");
  imgPersonaRataJuntos = loadImage("img/persona_rata_juntos.png");
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  ayuda = "";
  cursor(ARROW);

  if (estado === "menu") pantallaMenu();
  if (estado === "creditos") pantallaCreditos();
  if (estado === "calle") pantallaCalle();
  if (estado === "rataCamina") animacionRataCamina();
  if (estado === "contenedor") pantallaContenedor();
  if (estado === "comiendo") pantallaComiendo();
  if (estado === "persona") pantallaPersona();
  if (estado === "ataqueVagabundo") pantallaAtaqueVagabundo();
  if (estado === "policiaVagabundoRata") pantallaPoliciaVagabundoRata();
  if (estado === "rataEdificio") pantallaRataEdificio();
  if (estado === "rataCable") pantallaRataCable();
  if (estado === "subiendoCable") pantallaSubiendoCable();
  if (estado === "ventana") pantallaVentana();
  if (estado === "espiar") pantallaEspiar();
  if (estado === "entrarDepto") pantallaEntrarDepto();
  if (estado === "buscarComida") pantallaBuscarComida();
  if (estado === "decisionFinal") pantallaDecisionFinal();
  if (estado === "finalBueno") pantallaFinalBueno();
  if (estado === "finalMalo") pantallaFinalMalo();
  if (estado === "muerte") pantallaMuerte();

  if (ayuda !== "") textoAyuda(ayuda);
}

// ---------------- MENU ----------------

function pantallaMenu() {
  image(imgPortada, 0, 0, width, height);

  fill(0, 165);
  rect(0, 0, width, height);

  fill(255);
  textAlign(CENTER);
  textSize(42);
  text("EL RATA", width / 2, 70);

  textSize(16);
  text("Escribí el nombre de tu rata:", width / 2, 125);

  fill(escribiendoNombre ? 255 : 220);
  rect(180, 145, 240, 42, 8);

  fill(0);
  textSize(20);
  text(nombreRata === "" ? "Nombre..." : nombreRata, width / 2, 171);

  dibujarBoton(210, 220, 180, 45, "JUGAR");
  dibujarBoton(210, 280, 180, 40, "CRÉDITOS");
}

// ---------------- CRÉDITOS ----------------

function pantallaCreditos() {
  background(10);

  fill(255);
  textAlign(CENTER);

  textSize(32);
  text("CRÉDITOS", width / 2, 70);

  textSize(17);
  text("Juego: El Rata", width / 2, 120);
  text("Aventura gráfica interactiva en p5.js", width / 2, 150);

  textSize(18);
  text("Realizado por:", width / 2, 200);

  textSize(16);
  text("Alvaro Oxley", width / 2, 230);
  text("Ana Robledo", width / 2, 255);
  text("Camila", width / 2, 280);

  textSize(14);
  text("UNA - Artes Multimediales", width / 2, 320);

  dibujarBoton(210, 340, 180, 40, "VOLVER");
}

// ---------------- CALLE ----------------

function pantallaCalle() {
  image(imgCalleSinRata, 0, 0, width, height);
  image(imgRata, rataX, rataY, rataW, rataH);

  textoAbajo(nombreRata + " busca refugio. Click en el contenedor.");
  zonaInteractiva(270, 80, 320, 270, "Entrar al contenedor");
}

function animacionRataCamina() {
  image(imgCalleSinRata, 0, 0, width, height);

  rataX += 2.4;
  rataY -= 0.35;

  image(imgRata, rataX, rataY, rataW, rataH);
  textoAbajo(nombreRata + " corre hacia el contenedor...");

  if (rataX > 340) {
    estado = "contenedor";
    rataX = 60;
    rataY = 285;
  }
}

// ---------------- CONTENEDOR ----------------

function pantallaContenedor() {
  image(imgInteriorContenedor, 0, 0, width, height);

  textoAbajo("Elegí qué hace " + nombreRata + ".");

  zonaInteractiva(210, 70, 170, 210, "Comer cereales con borbojos");
  zonaInteractiva(380, 215, 180, 135, "Acercarse a la trampa");
}

function pantallaComiendo() {
  image(imgRataComiendo, 0, 0, width, height);

  textoAbajo(nombreRata + " come borbojos. Click en la tapa del contenedor.");
  zonaInteractiva(0, 0, 600, 90, "Abrir la tapa del contenedor");
}

function pantallaPersona() {
  image(imgPersonaContenedor, 0, 0, width, height);

  textoAbajo("Mantené apretada la cara del vagabundo para atacar.");
  zonaInteractiva(360, 40, 190, 170, "Mantener apretado para atacar");

  if (mouseIsPressed && mouseSobre(360, 40, 190, 170)) {
    contador++;

    fill(255, 220);
    textAlign(CENTER);
    textSize(14);
    text("Atacando...", width / 2, 330);

    if (contador > 35) {
      contador = 0;
      estado = "ataqueVagabundo";
    }
  } else {
    contador = 0;
  }
}

function pantallaAtaqueVagabundo() {
  image(imgRataAtacaVagabundo, 0, 0, width, height);

  textoAbajo("Click otra vez en el vagabundo para que " + nombreRata + " escape.");
  zonaInteractiva(360, 60, 200, 220, "Escapar del vagabundo");
}

function pantallaPoliciaVagabundoRata() {
  image(imgPoliciaVagabundoRata, 0, 0, width, height);

  textoAbajo(nombreRata + " escapa mientras el policía arresta al vagabundo.");

  contador++;

  if (contador > 300) {
    contador = 0;
    estado = "rataEdificio";
  }
}

// ---------------- ESCENA TRISTE ----------------

function pantallaRataEdificio() {
  image(imgRataEdificio, 0, 0, width, height);

  textoAbajo(nombreRata + " mira la ciudad sola, buscando un hogar y un lugar amable donde comer.");

  contador++;

  if (contador > 300) {
    contador = 0;
    estado = "rataCable";
  }
}

// ---------------- CABLE ----------------

function pantallaRataCable() {
  image(imgRataSubeCable, 0, 0, width, height);

  textoAbajo(nombreRata + " encuentra un cable. Mantené click para ayudarla a subir.");
  zonaInteractiva(190, 150, 230, 210, "Mantener click y guiar con el mouse");

  if (mouseIsPressed && mouseSobre(190, 150, 230, 210)) {
    estado = "subiendoCable";
    rataCableX = mouseX - 70;
    rataCableY = mouseY - 40;
  }
}

function pantallaSubiendoCable() {
  image(imgRataCableSinRata, 0, 0, width, height);

  textoAbajo("Guiá a " + nombreRata + " con el mouse hasta la ventana.");

  if (mouseIsPressed) {
    rataCableX = constrain(mouseX - 70, 250, 360);
    rataCableY = constrain(mouseY - 40, 40, 300);
  } else {
    estado = "rataCable";
  }

  image(imgRata, rataCableX, rataCableY, 140, 75);

  if (rataCableY < 70) {
    estado = "ventana";
    contador = 0;
  }
}

// ---------------- DEPARTAMENTO ----------------

function pantallaVentana() {
  image(imgRataCableViendoPersona, 0, 0, width, height);

  textoAbajo(nombreRata + " ve un departamento sucio. Click en la ventana para espiar.");
  zonaInteractiva(300, 70, 260, 220, "Espiar por la ventana");
}

function pantallaEspiar() {
  image(imgRataCableViendoPersona, 0, 0, width, height);

  textoAbajo("Mantené apretado para observar al humano.");

  if (mouseIsPressed && mouseSobre(300, 70, 260, 220)) {
    observacion += 2;
  } else {
    observacion -= 1;
  }

  observacion = constrain(observacion, 0, 100);

  fill(0, 180);
  rect(170, 305, 260, 25, 8);

  fill(255);
  rect(175, 310, observacion * 2.5, 15, 6);

  fill(255);
  textAlign(CENTER);
  textSize(14);
  text("Observando...", width / 2, 295);

  if (observacion >= 100) {
    observacion = 0;
    contador = 0;
    estado = "entrarDepto";
  }
}

function pantallaEntrarDepto() {
  image(imgRataPasandoADepto, 0, 0, width, height);

  textoAbajo(nombreRata + " entra en silencio por la ventana.");

  contador++;

  if (contador > 180) {
    contador = 0;
    estado = "buscarComida";
  }
}

function pantallaBuscarComida() {
  image(imgRataCasaSucia, 0, 0, width, height);

  fill(0, 180);
  rect(0, 0, 600, 40);

  fill(255);
  textAlign(LEFT);
  textSize(15);
  text("Comida encontrada: " + comidaEncontrada + "/3", 20, 25);

  textoAbajo("Buscá comida escondida en el departamento.");

  if (!encontroPizza) {
    zonaInteractiva(430, 245, 130, 90, "Comer restos de pizza");
  }

  if (!encontroLata) {
    zonaInteractiva(50, 300, 90, 70, "Revisar la lata");
  }

  if (!encontroCaja) {
    zonaInteractiva(260, 130, 140, 100, "Buscar comida en la mesa");
  }
}

function pantallaDecisionFinal() {
  image(imgCasaSuciaSinRata, 0, 0, width, height);

  fill(0, 170);
  rect(0, 0, width, height);

  fill(255);
  textAlign(CENTER);
  textSize(22);
  text("El humano estaba tan solo como " + nombreRata + ".", width / 2, 115);

  textSize(15);
  text("¿Qué debería hacer?", width / 2, 150);

  dibujarBoton(110, 220, 170, 45, "ROBAR COMIDA");
  dibujarBoton(320, 220, 170, 45, "ACERCARSE");
}

function pantallaFinalMalo() {
  image(imgRataEdificio, 0, 0, width, height);

  fill(0, 160);
  rect(0, 0, width, height);

  fill(255);
  textAlign(CENTER);
  textSize(30);
  text("FINAL TRISTE", width / 2, 85);

  textSize(16);
  text(nombreRata + " robó comida, pero volvió a quedar sola bajo la lluvia.", width / 2, 140);

  dibujarBoton(210, 290, 180, 45, "VOLVER AL MENÚ");
}

function pantallaFinalBueno() {
  image(imgPersonaRataJuntos, 0, 0, width, height);

  fill(0, 130);
  rect(0, 0, width, height);

  fill(255);
  textAlign(CENTER);

  textSize(34);
  text("FINAL BUENO", width / 2, 65);

  textSize(17);
  text("Dos criaturas solas compartieron el mismo refugio.", width / 2, 125);

  text(nombreRata + " encontró comida, calor y una noche menos triste.", width / 2, 155);

  dibujarBoton(210, 300, 180, 45, "VOLVER AL MENÚ");
}

// ---------------- MUERTE ----------------

function pantallaMuerte() {
  image(imgRataMuerta, 0, 0, width, height);

  fill(0, 140);
  rect(0, 0, width, height);

  fill(255);
  textAlign(CENTER);

  textSize(34);
  text("GAME OVER", width / 2, 55);

  textSize(18);
  text("La trampa fue más rápida que " + nombreRata, width / 2, 90);

  dibujarBoton(width / 2 - 100, 320, 200, 45, "VOLVER AL MENU");
}

// ---------------- MOUSE ----------------

function mousePressed() {
  if (estado === "menu") {
    if (mouseSobre(180, 145, 240, 42)) {
      escribiendoNombre = true;
    } else {
      escribiendoNombre = false;
    }

    if (mouseSobre(210, 220, 180, 45)) {
      if (nombreRata === "") nombreRata = "Rata";
      estado = "calle";
    }

    if (mouseSobre(210, 280, 180, 40)) {
      estado = "creditos";
    }
  }

  else if (estado === "creditos") {
    if (mouseSobre(210, 340, 180, 40)) {
      estado = "menu";
    }
  }

  else if (estado === "calle") {
    if (mouseSobre(270, 80, 320, 270)) {
      estado = "rataCamina";
    }
  }

  else if (estado === "contenedor") {
    if (mouseSobre(210, 70, 170, 210)) {
      estado = "comiendo";
      contador = 0;
    }

    if (mouseSobre(380, 215, 180, 135)) {
      estado = "muerte";
    }
  }

  else if (estado === "comiendo") {
    if (mouseSobre(0, 0, 600, 90)) {
      estado = "persona";
      contador = 0;
    }
  }

  else if (estado === "ataqueVagabundo") {
    if (mouseSobre(360, 60, 200, 220)) {
      estado = "policiaVagabundoRata";
      contador = 0;
    }
  }

  else if (estado === "ventana") {
    if (mouseSobre(300, 70, 260, 220)) {
      estado = "espiar";
      observacion = 0;
    }
  }

  else if (estado === "buscarComida") {
    if (!encontroPizza && mouseSobre(430, 245, 130, 90)) {
      encontroPizza = true;
      comidaEncontrada++;
    }

    if (!encontroLata && mouseSobre(50, 300, 90, 70)) {
      encontroLata = true;
      comidaEncontrada++;
    }

    if (!encontroCaja && mouseSobre(260, 130, 140, 100)) {
      encontroCaja = true;
      comidaEncontrada++;
    }

    if (comidaEncontrada >= 3) {
      estado = "decisionFinal";
    }
  }

  else if (estado === "decisionFinal") {
    if (mouseSobre(110, 220, 170, 45)) {
      estado = "finalMalo";
    }

    if (mouseSobre(320, 220, 170, 45)) {
      estado = "finalBueno";
    }
  }

  else if (estado === "finalBueno") {
    if (mouseSobre(210, 300, 180, 45)) {
      reiniciarJuego();
    }
  }

  else if (estado === "finalMalo") {
    if (mouseSobre(210, 290, 180, 45)) {
      reiniciarJuego();
    }
  }

  else if (estado === "muerte") {
    if (mouseSobre(width / 2 - 100, 320, 200, 45)) {
      reiniciarJuego();
    }
  }
}

// ---------------- TECLADO ----------------

function keyPressed() {
  if (key === "r" || key === "R") {
    reiniciarJuego();
  }

  if (estado === "menu" && escribiendoNombre) {
    if (keyCode === BACKSPACE) {
      nombreRata = nombreRata.slice(0, -1);
    } else if (keyCode === ENTER) {
      escribiendoNombre = false;
    } else if (key.length === 1 && nombreRata.length < 12) {
      nombreRata += key;
    }
  }
}

// ---------------- FUNCIONES AUXILIARES ----------------

function reiniciarJuego() {
  estado = "menu";
  contador = 0;
  observacion = 0;

  rataX = 60;
  rataY = 285;
  rataCableX = 300;
  rataCableY = 290;

  escribiendoNombre = false;

  comidaEncontrada = 0;
  encontroPizza = false;
  encontroLata = false;
  encontroCaja = false;
}

function mouseSobre(x, y, w, h) {
  return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
}

function zonaInteractiva(x, y, w, h, texto) {
  if (mouseSobre(x, y, w, h)) {
    cursor(HAND);
    ayuda = texto;
  }
}

function dibujarBoton(x, y, w, h, texto) {
  if (mouseSobre(x, y, w, h)) {
    fill(255);
  } else {
    fill(210);
  }

  rect(x, y, w, h, 10);

  fill(0);
  textAlign(CENTER, CENTER);
  textSize(16);
  text(texto, x + w / 2, y + h / 2);
}

function textoAbajo(txt) {
  noStroke();
  fill(0, 190);
  rect(0, 350, width, 50);

  fill(255);
  textAlign(CENTER);
  textSize(14);
  text(txt, width / 2, 380);
}

function textoAyuda(txt) {
  fill(0, 210);
  rect(mouseX + 12, mouseY + 12, textWidth(txt) + 20, 28, 6);

  fill(255);
  textAlign(LEFT, CENTER);
  textSize(13);
  text(txt, mouseX + 22, mouseY + 26);
}