// Datos de ejemplo
const categorias = {
  "Física 1": [
    {
      nombre: "Movimiento rectilíneo",
      descripcion: "Es el movimiento en línea recta con velocidad constante o variable.",
      imagen: "https://www.neurochispas.com/wp-content/uploads/2024/05/Formula-de-movimiento-rectilineo-uniforme.png"
    },
    {
      nombre: "Caída libre",
      descripcion: "Es el movimiento de un cuerpo bajo la acción exclusiva de la gravedad.",
      imagen: "https://ecuacionde.com/wp-content/uploads/2021/12/image-9.png"
    },
  ],
  "Física 2": [
    {
      nombre: "Leyes de Newton",
      descripcion: "Son las tres leyes fundamentales que describen el movimiento de los cuerpos.",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Newton%27s_laws.svg/320px-Newton%27s_laws.svg.png"
    },
    {
      nombre: "Trabajo y energía",
      descripcion: "Se relacionan con la capacidad de realizar fuerza y movimiento.",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Energy_transfer.svg/320px-Energy_transfer.svg.png"
    },
  ],
  "Física 3": [
    {
      nombre: "Ondas",
      descripcion: "Son perturbaciones que se propagan a través de un medio o del vacío.",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Wave.gif/320px-Wave.gif"
    },
    {
      nombre: "Óptica",
      descripcion: "Es la rama de la física que estudia la luz y su comportamiento.",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Lens3.svg/320px-Lens3.svg.png"
    },
  ]
};

let categoriaSeleccionada = "";
let temasFiltrados = [];

const categoryMenu = document.getElementById("category-menu");
const topicList = document.getElementById("topic-list");
const topicDetail = document.getElementById("topic-detail");
const detailContent = document.getElementById("detail-content");
const searchInput = document.getElementById("search");
const backBtn = document.getElementById("back-btn");

// Mostrar categorías en barra lateral
function cargarCategorias() {
  for (const categoria in categorias) {
    const btn = document.createElement("button");
    btn.textContent = categoria;
    btn.addEventListener("click", () => {
      categoriaSeleccionada = categoria;
      temasFiltrados = categorias[categoria];
      mostrarTemas();
      topicDetail.classList.remove("show");
      topicList.style.display = "grid";
    });
    categoryMenu.appendChild(btn);
  }
}

// Mostrar lista de temas
function mostrarTemas() {
  topicList.innerHTML = "";

  temasFiltrados.forEach((tema) => {
    const card = document.createElement("div");
    card.className = "topic-card";

    // Miniatura con imagen y nombre
    card.innerHTML = `
      <img src="${tema.imagen}" alt="${tema.nombre}" style="width: 100%; height: 120px; object-fit: cover; border-radius: 10px 10px 0 0;">
      <div style="padding: 0.5rem;">${tema.nombre}</div>
    `;

    card.addEventListener("click", () => mostrarDetalle(tema));
    topicList.appendChild(card);
  });
}


// Mostrar detalle del tema
function mostrarDetalle(tema) {
  detailContent.innerHTML = `
    <h2>${tema.nombre}</h2>
    <img src="${tema.imagen}" alt="${tema.nombre}" style="max-width: 400px; height: 250px; object-fit: contain; margin-bottom: 1rem; border-radius: 10px;">
    <p>${tema.descripcion}</p>
  `;
  topicDetail.classList.add("show");
  topicList.style.display = "none";
}



// Buscar temas
searchInput.addEventListener("input", () => {
  const texto = searchInput.value.toLowerCase();
  if (!categoriaSeleccionada) return;

  temasFiltrados = categorias[categoriaSeleccionada].filter((tema) =>
    tema.nombre.toLowerCase().includes(texto)
  );
  mostrarTemas();
});

// Botón para regresar
backBtn.addEventListener("click", () => {
  topicDetail.classList.remove("show");
  topicList.style.display = "grid";
});

cargarCategorias();

