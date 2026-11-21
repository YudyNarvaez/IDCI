/* Configuración de Tailwind CSS y lógica interactiva para Landing_IDCI */

if (typeof tailwind !== "undefined") {
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          brand: {
            dark: "#064e3b",   // Verde Bosque
            teal: "#0d9488",   // Verde Esmeralda/Azulino
            accent: "#14b8a6", // Acento brillante
            light: "#f0fdf4",  // Fondo claro
            surface: "#ffffff"
          }
        },
        fontFamily: {
          sans: ['"Plus Jakarta Sans"', "sans-serif"],
          mono: ['"JetBrains Mono"', "monospace"]
        }
      }
    }
  };
}

document.addEventListener("alpine:init", () => {
  Alpine.data("carouselApp", () => ({
    currentIndex: 0,
    itemsPerPage: 3,
    students: [
      {
        name: "David Felipe Garzón Barbosa",
        semester: "9°",
        project: "Fragmentum: Videojuego como herramienta de autoconocimiento en crisis emocionales"
      },
      {
        name: "Juan Diego Romero Jiménez",
        semester: "9°",
        project: "Fragmentum: Videojuego como herramienta de autoconocimiento en crisis emocionales"
      },
      {
        name: "Esteban Alonso Umaña Velásquez",
        semester: "6°",
        project: "Red Académica de Estudiantes - Conformación Capítulo Estudiantil ACOFI UDEC"
      },
      {
        name: "Felipe Antonio Cortés",
        semester: "6°",
        project: "Arquitectura de componentes informáticos distribuidos"
      },
      {
        name: "Nicolas Rincón",
        semester: "9°",
        project: "Identificación y análisis de patrones discursivos y narrativas en la configuración de posicionamientos narcisistas dentro de relatos de violencia de género utilizando técnicas de procesamiento de lenguaje natural"
      },
      {
        name: "Cesar Bolívar",
        semester: "9°",
        project: "Identificación y análisis de patrones discursivos y narrativas en la configuración de posicionamientos narcisistas dentro de relatos de violencia de género utilizando técnicas de procesamiento de lenguaje natural"
      },
      {
        name: "Jorge Alcides Diaz Lozano",
        semester: "6°",
        project: "Entornos gamificados para la enseñanza de programación"
      },
      {
        name: "Danna Angelika Ruiz Rodriguez",
        semester: "9°",
        project: "Red Académica y de Investigación: Mujeres en la Ingeniería Cátedra Matilda - CAL"
      },
      {
        name: "Michael Mateo Melgarejo",
        semester: "9°",
        project: "Automatización del preprocesamiento, segmentación y caracterización de patrones térmicos en ciclistas mediante visión por computadora"
      },
      {
        name: "Kelly Johanna Garzón Becerra",
        semester: "8°",
        project: "Identificación y análisis de patrones discursivos y narrativas en la configuración de posicionamientos narcisistas dentro de relatos de violencia de género utilizando técnicas de procesamiento de lenguaje natural"
      },
      {
        name: "Luis David Gómez Saltos",
        semester: "5°",
        project: "Prototipo para enseñanza ciberseguridad a niños con discapacidad en el Instituto CREINSER"
      },
      {
        name: "Héctor Danilo Rodríguez Peña",
        semester: "5°",
        project: "Prototipo para enseñanza ciberseguridad a niños con discapacidad en el Instituto CREINSER"
      },
      {
        name: "Kevin Santiago Sánchez Quitian",
        semester: "5°",
        project: "NuestraApp: Plataforma de Innovación Tecnológica para el apoyo en la autonomía financiera de Madres Cabeza de Hogar"
      },
      {
        name: "Johan Alfredo Castellanos Bedoya",
        semester: "5°",
        project: "NuestraApp: Plataforma de Innovación Tecnológica para el apoyo en la autonomía financiera de Madres Cabeza de Hogar"
      },
      {
        name: "Tomas Andrés Pinzón Ávila",
        semester: "5°",
        project: "Prototipo para enseñanza ciberseguridad a niños con discapacidad en el Instituto CREINSER"
      }
    ],

    init() {
      this.updateItemsPerPage();
      window.addEventListener("resize", () => this.updateItemsPerPage());
    },

    updateItemsPerPage() {
      if (window.innerWidth < 640) {
        this.itemsPerPage = 1;
      } else if (window.innerWidth < 1024) {
        this.itemsPerPage = 2;
      } else {
        this.itemsPerPage = 3;
      }
    },

    get totalPages() {
      return Math.ceil(this.students.length / this.itemsPerPage);
    },

    next() {
      if (this.currentIndex < this.students.length - this.itemsPerPage) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
    },

    prev() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = Math.max(0, this.students.length - this.itemsPerPage);
      }
    },

    goToPage(pageIndex) {
      this.currentIndex = pageIndex * this.itemsPerPage;
    },

    getInitials(name) {
      return name
        .split(" ")
        .filter((n) => n.length > 2)
        .slice(0, 2)
        .map((n) => n[0])
        .join("")
        .toUpperCase();
    }
  }));
});
