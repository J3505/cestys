

export const CURSOS: Curso [] = [
  {
    id: 1,
    nombre: 'Secretariado Ejecutivo',
    descripcion: 'Carrera técnica enfocada en habilidades administrativas y de oficina.',
    fechaInicio: new Date('2025-05-01'),
    fechaFin: new Date('2026-05-01'),
    horas: 80,
    precio: 150,
    imagen: 'https://i.pinimg.com/736x/45/b6/12/45b6126ff7ae10fb50ddb6ed2851b8ab.jpg',
    categoria: CategoriaCurso.CarreraTecnica,
    estado: 'Activo',
    instructor: {
      id: 1,
      nombre: 'Ana',
      apellido: 'Gómez',
      email: 'ana.gomez@cestys.edu.pe',
      telefono: '987654321',
      imagen: 'https://res.cloudinary.com/dsadfgmfn/image/upload/v1745129247/descarga_cqtwkw.jpg'
    },
    modulos: [
      {
        nombre: 'Módulo I',
        temas: [
          'Ofimática',
          'Documentación Mercantil',
          'Contabilidad Comercial',
          'Digitación'
        ]
      },
      {
        nombre: 'Módulo II',
        temas: [
          'Legislación Laboral',
          'Marketing Secretarial',
          'Técnica Secretarial',
          'Etiqueta Secretarial',
          'Atención y Servicio al Cliente'
        ]
      },
      {
        nombre: 'Módulo III',
        temas: [
          'Mecanografía',
          'Ortografía',
          'Redacción General',
          'Trámite Documentario',
          'Organización de Oficinas',
          'Oratoria y Liderazgo',
          'Taquigrafía'
        ]
      }
    ]
  },
  {
    id: 2,
    nombre: 'AutoCAD 2D - 3D 2024',
    descripcion: 'Curso de especialización en diseño asistido por computadora 2D y 3D.',
    fechaInicio: new Date('2025-06-01'),
    fechaFin: new Date('2025-08-01'),
    horas: 90,
    precio: 650,
    imagen: 'https://i.pinimg.com/736x/11/e8/e6/11e8e68479e1e9987667c9f4253e8e4b.jpg',
    categoria: CategoriaCurso.EspecializacionProfesional,
    estado: 'Activo',
    instructor: {
      id: 2,
      nombre: 'Carlos',
      apellido: 'Quispe',
      email: 'carlos.quispe@cestys.edu.pe',
      telefono: '912345678',
      imagen: 'https://res.cloudinary.com/dsadfgmfn/image/upload/v1745129247/descarga_cqtwkw.jpg'
    },
    modulos: [
      {
        nombre: 'Inicial',
        temas: [
          'Interfaz AutoCad 2024',
          'Dibujo de Piezas con Comandos: Líneas / Polilíneas / Círculos / Arcos',
          'Edición de Objetos: Rotar / Mover / Copiar',
          'Array / Explode / Mirror / etc',
          'Configuración de Unidades / Estados de Ayuda Utilitarios de Dibujo / etc'
        ]
      },
      {
        nombre: 'Intermedio',
        temas: [
          'Trazo de Planos: Layer / Capas, Multilíneas, Acotación',
          'Bloques / Bloques Dinámicos',
          'Textos para Complementar Planos',
          'Ploteo de Impresión (Model / Layout)'
        ]
      },
      {
        nombre: 'Avanzado',
        temas: [
          'Entorno de trabajo en 3D',
          'Construcción de Objetos en 3D'
        ]
      }
    ]
  },
  {
    id: 3,
    nombre: 'Contabilidad',
    descripcion: 'Carrera técnica enfocada en la gestión contable, tributaria y financiera de las empresas.',
    fechaInicio: new Date('2025-06-01'),
    fechaFin: new Date('2026-06-01'),
    horas: 480, // puedes ajustar el número según tu estructura real
    precio: 1350,
    imagen: 'https://res.cloudinary.com/dsadfgmfn/image/upload/v1745200430/03_q2ijur.jpg',
    categoria: CategoriaCurso.CarreraTecnica,
    estado: 'Activo',
    instructor: {
      id: 2,
      nombre: 'Luis',
      apellido: 'Fernández',
      email: 'luis.fernandez@cestys.edu.pe',
      telefono: '987321654',
      imagen: 'https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    modulos: [
      {
        nombre: 'Módulo I',
        temas: [
          'Computación e Informática',
          'IGV y Documentación Mercantil',
          'Contabilidad General',
          'Tributación Empresarial (Taller de PDT)'
        ]
      },
      {
        nombre: 'Módulo II',
        temas: [
          'NIC y Estados Financieros',
          'Legislación Laboral',
          'Peritaje Contable',
          'Contabilidad de Costos'
        ]
      },
      {
        nombre: 'Módulo III',
        temas: [
          'Análisis Financiero',
          'Matemática Financiera',
          'Contabilidad Bancaria',
          'Auditoría Financiera',
          'Contabilidad de Sociedades',
          'Contabilidad Gubernamental (Taller de SIAF)'
        ]
      }
    ]
  },
  {
    id: 4,
    nombre: 'Cajero Financiero y Comercial',
    descripcion: 'Curso especializado para el manejo de operaciones bancarias, servicio al cliente, y gestión financiera en instituciones comerciales.',
    fechaInicio: new Date('2025-07-01'),
    fechaFin: new Date('2025-10-01'),
    horas: 50, // Aprox. para 3 meses. Puedes ajustar.
    precio: 150,
    imagen: 'https://res.cloudinary.com/dsadfgmfn/image/upload/v1745200700/04_yngadt.jpg',
    categoria: CategoriaCurso.CarreraTecnica,
    estado: 'Activo',
    instructor: {
      id: 3,
      nombre: 'Carmen',
      apellido: 'Valverde',
      email: 'carmen.valverde@cestys.edu.pe',
      telefono: '987456123',
      imagen: 'https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    modulos: [
      {
        nombre: 'Módulo I',
        temas: [
          'Técnicas de Ventas y Excelencia de Servicio al Cliente',
          'Técnicas de Conteo y Detección de Billetes',
          'Simulador de Operaciones Bancarias',
          'Productos y Servicios Financieros',
          'Fraudes y Manejo de Tarjetas (POS)',
          'Gestión de Tesorería y Caja',
          'Aplicaciones Financieras en Excel',
          'Competitividad Laboral y Emprendimiento Financiero',
          'Operatividad de Documentos Financieros y Mercantiles',
          'Simulador Bancario',
          'Módulos ABC del BCP'
        ]
      }
    ]
  },
  {
    id: 5,
    nombre: 'Analista de Créditos y Cobranzas',
    descripcion: 'Curso especializado en gestión de créditos, análisis de riesgos, detección de fraudes y recuperación de cobranzas.',
    fechaInicio: new Date('2025-08-01'),
    fechaFin: new Date('2025-11-01'),
    horas: 100, // Estimación para 3 meses. Puedes ajustar si tienes datos reales.
    precio: 600,
    imagen: 'https://res.cloudinary.com/dsadfgmfn/image/upload/v1745201389/Analista_de_Cr%C3%A9ditos_y_Cobranzas2_kzgjx7.jpg',
    categoria: CategoriaCurso.CarreraTecnica,
    estado: 'Activo',
    instructor: {
      id: 4,
      nombre: 'Mario',
      apellido: 'Quispe',
      email: 'mario.quispe@cestys.edu.pe',
      telefono: '986123789',
      imagen: 'https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    modulos: [
      {
        nombre: 'Módulo I',
        temas: ['El Crédito']
      },
      {
        nombre: 'Módulo II',
        temas: ['Garantías: detección de documentos falsos, prevención del fraude']
      },
      {
        nombre: 'Módulo III',
        temas: ['Garantías: Detección de documentos Falsos, perversión del fraude en el Crédito']
      },
      {
        nombre: 'Módulo IV',
        temas: ['Gestión de Recuperación de Cobranzas']
      }
    ]
  },
  {
    id: 6,
    nombre: 'Ofimática',
    descripcion: 'Curso práctico sobre el manejo de herramientas de oficina modernas y productividad digital.',
    fechaInicio: new Date('2025-09-01'),
    fechaFin: new Date('2025-12-01'),
    horas: 90,
    precio: 150,
    imagen: 'https://res.cloudinary.com/dsadfgmfn/image/upload/v1745201822/ofimatica_gmjqs1.jpg',
    categoria: CategoriaCurso.CarreraTecnica,
    estado: 'Activo',
    instructor: {
      id: 5,
      nombre: 'Rosa',
      apellido: 'Delgado',
      email: 'rosa.delgado@cestys.edu.pe',
      telefono: '988123456',
      imagen: 'https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    modulos: [
      {
        nombre: 'Módulo I',
        temas: [
          'Windows 11',
          'MS Word 2022',
          'MS Excel 2022',
          'MS Power Point 2022',
          'MS Access 2022',
          'Herramientas de Internet y Redes Sociales'
        ]
      }
    ]
  },
  {
    id: 7,
    nombre: 'Diseño Gráfico',
    descripcion: 'Curso de herramientas de diseño profesional y producción gráfica digital.',
    fechaInicio: new Date('2025-09-01'),
    fechaFin: new Date('2026-01-01'),
    horas: 120,
    precio: 700,
    imagen: 'https://res.cloudinary.com/dsadfgmfn/image/upload/v1745202030/disenio_cfxmru.jpg',
    categoria: CategoriaCurso.CarreraTecnica,
    estado: 'Activo',
    instructor: {
      id: 6,
      nombre: 'Javier',
      apellido: 'López',
      email: 'javier.lopez@cestys.edu.pe',
      telefono: '989123789',
      imagen: 'https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    modulos: [
      {
        nombre: 'Módulo I',
        temas: [
          'Corel Draw Graphic Suite 2024',
          'Adobe Photoshop CC 2024',
          'Adobe Illustrator CC 2024',
          'Adobe Indesign CC 2024',
          'Camtasia Studio'
        ]
      }
    ]
  },
  {
    id: 8,
    nombre: 'Edición y Postproducción de Video',
    descripcion: 'Curso práctico de herramientas profesionales para edición y producción audiovisual.',
    fechaInicio: new Date('2025-09-01'),
    fechaFin: new Date('2026-01-01'),
    horas: 120,
    precio: 750,
    imagen: 'https://res.cloudinary.com/dsadfgmfn/image/upload/v1745202173/post_xdk2q0.jpg',
    categoria: CategoriaCurso.CarreraTecnica,
    estado: 'Activo',
    instructor: {
      id: 8,
      nombre: 'Miriam',
      apellido: 'Zamora',
      email: 'miriam.zamora@cestys.edu.pe',
      telefono: '981456987',
      imagen: 'https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    modulos: [
      {
        nombre: 'Módulo I',
        temas: [
          'Adobe Premier Pro CC 2024',
          'Adobe After Effects CC 2024',
          'Adobe Audition CC 2024'
        ]
      }
    ]
  },
  {
    id: 9,
    nombre: 'SAP 2000',
    descripcion: 'Curso de especialización en modelamiento estructural con SAP 2000, orientado a diseño en concreto y acero.',
    fechaInicio: new Date('2025-10-01'),
    fechaFin: new Date('2026-01-01'),
    horas: 60,
    precio: 150,
    imagen: 'https://res.cloudinary.com/dsadfgmfn/image/upload/v1745202532/sap20001_i40wj0.jpg',
    categoria: CategoriaCurso.EspecializacionProfesional,
    estado: 'Activo',
    instructor: {
      id: 9,
      nombre: 'Erick',
      apellido: 'Rodríguez',
      email: 'erick.rodriguez@cestys.edu.pe',
      telefono: '987456789',
      imagen: 'https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    modulos: [
      {
        nombre: 'Módulo Único',
        temas: [
          'Introducción y Entorno del Programa',
          'Método de Modelamiento Estructural',
          'Introducción al Concreto Armado',
          'Diseño de un Edificio de Concreto Armado',
          'Introducción al Diseño de Acero',
          'Diseño de un Galpón Metálico',
          'Diseños Varios'
        ]
      }
    ]
  },
  {
    id: 10,
    nombre: 'ETABS',
    descripcion: 'Curso integral de diseño y análisis estructural con ETABS, desde modelado básico hasta análisis dinámico avanzado.',
    fechaInicio: new Date('2025-10-01'),
    fechaFin: new Date('2026-01-01'),
    horas: 80,
    precio: 150,
    imagen: 'https://res.cloudinary.com/dsadfgmfn/image/upload/v1745204031/etabs_we3qon.jpg',
    categoria: CategoriaCurso.EspecializacionProfesional,
    estado: 'Activo',
    instructor: {
      id: 10,
      nombre: 'Sandra',
      apellido: 'Reyes',
      email: 'sandra.reyes@cestys.edu.pe',
      telefono: '987123456',
      imagen: 'https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    modulos: [
      {
        nombre: 'Nivel Básico',
        temas: [
          'Introducción al Programa ETABS',
          'Modelado de una Estructura',
          'Definición de Elementos Estructurales',
          'Casos de Carga y Combinaciones de Diseño',
          'Asignación y Distribución de Cargas',
          'Análisis y Obtención de Resultados',
          'Importación y Exportación a otras Aplicaciones Estructurales'
        ]
      },
      {
        nombre: 'Nivel Intermedio',
        temas: [
          'Diseño de Estructuras Metálicas',
          'Análisis Dinámico, Modal y Espectro de Respuesta',
          'Identificación y Verificación de Irregularidades Estructurales',
          'Diseño en Concreto Armado: Vigas y Columnas',
          'Diseño en Concreto Armado: Placas',
          'Diseño en Concreto Armado: Losas'
        ]
      }
    ]
  },
  {
    id: 11,
    nombre: 'ArcGIS',
    descripcion: 'Curso completo de Sistemas de Información Geográfica con ArcGIS para análisis espacial y cartografía profesional.',
    fechaInicio: new Date('2025-10-01'),
    fechaFin: new Date('2026-01-01'),
    horas: 100,
    precio: 150,
    imagen: 'https://res.cloudinary.com/dsadfgmfn/image/upload/v1745205153/10_gijjoj.jpg',
    categoria: CategoriaCurso.EspecializacionProfesional,
    estado: 'Activo',
    instructor: {
      id: 11,
      nombre: 'Paul',
      apellido: 'Valenzuela',
      email: 'paul.valenzuela@cestys.edu.pe',
      telefono: '987654321',
      imagen: 'https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    modulos: [
      {
        nombre: 'Módulo Único',
        temas: [
          'Introducción a los SIG (Sistemas de Información Geográfica)',
          'Entrada y Visualización de Datos Espaciales',
          'Configuración de Sistemas de Referencia y Proyecciones',
          'Georreferenciación y Edición de Archivos Cartográficos Vectoriales',
          'Tablas y Manejo de Información',
          'Simbolización y Etiquetado',
          'Interacción con Google Earth y AutoCAD',
          'Diseño y Presentación de Mapas',
          'Automatización de Tablas y Maplex',
          'Tipos de Selección y Análisis',
          'Geoprocesamiento y Análisis Espacial',
          'Introducción a la Geodatabase',
          'Dominios, Subtipos y Análisis Topológico',
          'Geometría Compartida y Acotado mediante la Geodatabase'
        ]
      }
    ]
  },
  {
    id: 12,
    nombre: 'Revit Architecture 2025',
    descripcion: 'Curso especializado en modelado de información de construcción (BIM) con Revit para arquitectura y diseño estructural.',
    fechaInicio: new Date('2025-10-15'),
    fechaFin: new Date('2026-02-15'),
    horas: 80,
    precio: 150,
    imagen: 'https://res.cloudinary.com/dsadfgmfn/image/upload/v1745205508/11_e7nw4a.jpg',
    categoria: CategoriaCurso.EspecializacionProfesional,
    estado: 'Activo',
    instructor: {
      id: 12,
      nombre: 'Claudia',
      apellido: 'Salas',
      email: 'claudia.salas@cestys.edu.pe',
      telefono: '981234567',
      imagen: 'https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    modulos: [
      {
        nombre: 'Módulo Único',
        temas: [
          'Conceptos Básicos de Revit',
          'Iniciar un Diseño en Revit',
          'Elementos Básicos del Modelo',
          'Cargar Componentes Adicionales, Dimensiones y Restricciones',
          'Desarrollo del Modelo',
          'Introducción a la Documentación y Presentación',
          'Detalles y Dibujos',
          'Documentación y Presentación del Modelo',
          'Técnicas de Visualización Avanzada',
          'Importación y Exportación de Archivos',
          'Vinculación de Archivos'
        ]
      }
    ]
  },
  {
    id: 13,
    nombre: 'GPS Diferencial',
    descripcion: 'Curso técnico sobre geodesia y uso de GPS diferencial para levantamientos topográficos con postproceso profesional.',
    fechaInicio: new Date('2025-10-20'),
    fechaFin: new Date('2026-01-20'),
    horas: 90,
    precio: 720,
    imagen: 'https://i.pinimg.com/736x/c5/f9/ab/c5f9abae5d9afc314decae705cd69ef9.jpg',
    categoria: CategoriaCurso.EspecializacionProfesional,
    estado: 'Activo',
    instructor: {
      id: 13,
      nombre: 'Victor',
      apellido: 'Huamán',
      email: 'victor.huaman@cestys.edu.pe',
      telefono: '989876543',
      imagen: 'https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    modulos: [
      {
        nombre: 'Módulo Único',
        temas: [
          'Introducción a la geodesia - Conceptos Básicos',
          'Red Geodésica Geocéntrica Nacional (REGGEN)',
          'Qué es el GPS y cómo funciona',
          'Partes del GPS y sus aplicaciones',
          'Configuración y manejo del GPS',
          'Trabajo práctico de campo',
          'Estacionamiento de equipo',
          'Levantamiento por método estático diferencial',
          'Descarga de datos GPS y conversión a Rinex',
          'Postproceso y obtención de resultados',
          'Levantamiento RTK',
          'Interpretación de resultados y recomendaciones'
        ]
      }
    ]
  },
  {
    id: 14,
    nombre: 'AutoCAD 2D - 3D 2025',
    descripcion: 'Curso especializado en diseño y modelado avanzado con AutoCAD, desde conceptos básicos hasta 3D.',
    fechaInicio: new Date('2025-11-01'),
    fechaFin: new Date('2026-02-01'),
    horas: 100,
    precio: 150,
    imagen: 'https://i.pinimg.com/736x/11/e8/e6/11e8e68479e1e9987667c9f4253e8e4b.jpg',
    categoria: CategoriaCurso.EspecializacionProfesional,
    estado: 'Activo',
    instructor: {
      id: 14,
      nombre: 'Carlos',
      apellido: 'Mendoza',
      email: 'carlos.mendoza@cestys.edu.pe',
      telefono: '987112233',
      imagen: 'https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    modulos: [
      {
        nombre: 'Inicial',
        temas: [
          'Interfaz AutoCad 2024',
          'Dibujo de Piezas con Comandos: Líneas / Polilíneas / Círculos / Arcos',
          'Edición de Objetos: Rotar / Mover / Copiar',
          'Array / Explode / Mirror / etc',
          'Configuración de Unidades / Estados de Ayuda Utilitarios de Dibujo / etc'
        ]
      },
      {
        nombre: 'Intermedio',
        temas: [
          'Trazo de Planos: Layer / Capas, Multilíneas, Acotación',
          'Bloques / Bloques Dinámicos',
          'Textos para Complementar Planos',
          'Ploteo de Impresión (Model / Layout)'
        ]
      },
      {
        nombre: 'Avanzado',
        temas: [
          'Procedimientos que Permiten Establecer un Entorno Apropiado para Trabajar en Tres Dimensiones',
          'Construcción de Objetos en 3D, Buscando la Representación Realista de la Geometría'
        ]
      }
    ]
  },
  {
    id: 15,
    nombre: 'Costos y Presupuestos',
    descripcion: 'Curso de especialización en presupuestos para obras civiles, edificación, saneamiento y más.',
    fechaInicio: new Date('2025-11-01'),
    fechaFin: new Date('2026-01-15'),
    horas: 80,
    precio: 150,
    imagen: 'https://img.freepik.com/foto-gratis/mujer-asiatica-trabajando-traves-papeleo_53876-138148.jpg?t=st=1745206104~exp=1745209704~hmac=df818a388be5a949f557bca4638062e7607fcf6bf6e9a397a2a24028ee7e5cfa&w=1380',
    categoria: CategoriaCurso.EspecializacionProfesional,
    estado: 'Activo',
    instructor: {
      id: 15,
      nombre: 'Natalia',
      apellido: 'Martínez',
      email: 'natalia.martinez@cestys.edu.pe',
      telefono: '989887766',
      imagen: 'https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    modulos: [
      {
        nombre: 'Módulo Único',
        temas: [
          'Inducción a Costos y Presupuestos',
          'Registro, Títulos, Subtítulos y Partidas',
          'Recursos, Metrados, Pie de Presupuesto',
          'Gastos Generales, Fórmula Polinómica',
          'Edición, Exportación, Importación y Reportes'
        ]
      }
    ]
  },
  {
    id: 16,
    nombre: 'Lectura de Planos',
    descripcion: 'Curso de interpretación y análisis de planos técnicos en arquitectura, estructuras e instalaciones.',
    fechaInicio: new Date('2025-11-01'),
    fechaFin: new Date('2026-01-15'),
    horas: 60,
    precio: 150,
    imagen: 'https://img.freepik.com/foto-gratis/sitio-construccion_53876-16234.jpg?t=st=1745206255~exp=1745209855~hmac=e5751a3f48a69b294827b4ab59c4e944326b5c91459f1afc7c4a44a47435f20a&w=1380',
    categoria: CategoriaCurso.EspecializacionProfesional,
    estado: 'Activo',
    instructor: {
      id: 16,
      nombre: 'Marco',
      apellido: 'Torres',
      email: 'marco.torres@cestys.edu.pe',
      telefono: '987665544',
      imagen: 'https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    modulos: [
      {
        nombre: 'Nivel I',
        temas: ['Diseño y Lectura de Planos - Especialidad Arquitectura']
      },
      {
        nombre: 'Nivel II',
        temas: ['Diseño y Lectura de Planos - Especialidad Estructuras']
      },
      {
        nombre: 'Nivel III',
        temas: ['Diseño y Lectura de Planos - Especialidad Instalaciones Sanitarias']
      },
      {
        nombre: 'Nivel IV',
        temas: ['Diseño y Lectura de Planos - Especialidad Instalaciones Eléctricas']
      }
    ]
  },
  {
    id: 17,
    nombre: 'AutoCAD Civil 3D 2025',
    descripcion: 'Curso especializado en diseño vial, superficies, alineamientos y redes con AutoCAD Civil 3D.',
    fechaInicio: new Date('2025-11-01'),
    fechaFin: new Date('2026-02-01'),
    horas: 90,
    precio: 820,
    imagen: 'https://i.pinimg.com/736x/11/e8/e6/11e8e68479e1e9987667c9f4253e8e4b.jpg',
    categoria: CategoriaCurso.EspecializacionProfesional,
    estado: 'Activo',
    instructor: {
      id: 17,
      nombre: 'Esteban',
      apellido: 'Cárdenas',
      email: 'esteban.cardenas@cestys.edu.pe',
      telefono: '986554433',
      imagen: 'https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    modulos: [
      {
        nombre: 'Módulo Único',
        temas: [
          'Introducción a AutoCAD Civil 3D 2024',
          'Importación de Puntos',
          'Modelado Digital de Terreno',
          'Creación de Superficies a Partir de Curvas de Nivel',
          'Trazo de Alineaciones',
          'Alineamientos Horizontales y Verticales',
          'Dibujo del Perfil Longitudinal',
          'Redes de Tuberías',
          'Construcción de Corredores',
          'Secciones y Listados de Materiales'
        ]
      }
    ]
  },
  {
    id: 18,
    nombre: 'MS Project – Planificación en Obras Civiles',
    descripcion: 'Curso especializado en el uso de Microsoft Project para la gestión, planificación y control de proyectos de construcción.',
    fechaInicio: new Date('2025-11-10'),
    fechaFin: new Date('2026-01-20'),
    horas: 60,
    precio: 150,
    imagen: 'https://img.freepik.com/foto-gratis/ingeniero-sitio-sitio-construccion_53876-42833.jpg?t=st=1745206262~exp=1745209862~hmac=ef502e070bf560025e89d0668908d05d03e02eaa166e9b856ba0d3e8ebbf79da&w=1380',
    categoria: CategoriaCurso.EspecializacionProfesional,
    estado: 'Activo',
    instructor: {
      id: 18,
      nombre: 'Luis',
      apellido: 'Vargas',
      email: 'luis.vargas@cestys.edu.pe',
      telefono: '981234999',
      imagen: 'https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    modulos: [
      {
        nombre: 'Módulo Único',
        temas: [
          'Introducción a la Gestión de Proyectos',
          'Organización de las Tareas',
          'Administrar Recursos',
          'Planeamientos de los Costos de los Recursos y Tareas',
          'Afinamiento de las Tareas',
          'Manejo del Camino Crítico',
          'Seguimiento del Proyecto'
        ]
      }
    ]
  },
  {
    id: 19,
    nombre: 'Metrados en Edificaciones',
    descripcion: 'Curso técnico donde los participantes aprenden a elaborar metrados y análisis de costos unitarios aplicados a obras de edificación.',
    fechaInicio: new Date('2025-11-10'),
    fechaFin: new Date('2026-01-10'),
    horas: 70,
    precio: 150,
    imagen: 'https://img.freepik.com/foto-gratis/angulo-vision-baja-edificio-scafolding_1252-1176.jpg?t=st=1745206371~exp=1745209971~hmac=380df08528cd5e438b0a1ccdf0765856c8fd6d9ab86f5fa9606662b45f99f9bd&w=1380',
    categoria: CategoriaCurso.EspecializacionProfesional,
    estado: 'Activo',
    instructor: {
      id: 19,
      nombre: 'Yolanda',
      apellido: 'Cáceres',
      email: 'yolanda.caceres@cestys.edu.pe',
      telefono: '988765432',
      imagen: 'https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    modulos: [
      {
        nombre: 'Módulo Único',
        temas: [
          'Identificar los Planos de Arquitectura, Estructuras, Instalaciones Sanitarias e Instalaciones Eléctricas',
          'Elaborar Metrados por Partidas',
          'Analizar Costos Unitarios por Partidas'
        ]
      }
    ]
  },
  {
    id: 20,
    nombre: 'Topografía',
    descripcion: 'Curso completo de topografía aplicada a obras civiles, desde fundamentos básicos hasta el uso de drones y Civil 3D.',
    fechaInicio: new Date('2025-11-15'),
    fechaFin: new Date('2026-02-15'),
    horas: 120,
    precio: 150,
    imagen: 'https://i.pinimg.com/736x/cb/f6/41/cbf641001e50e436654c21b5c9c5c472.jpg',
    categoria: CategoriaCurso.EspecializacionProfesional,
    estado: 'Activo',
    instructor: {
      id: 20,
      nombre: 'Raúl',
      apellido: 'Castro',
      email: 'raul.castro@cestys.edu.pe',
      telefono: '982123456',
      imagen: 'https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    modulos: [
      {
        nombre: 'Módulo I - TOPOGRAFÍA BÁSICA',
        temas: [
          'Matemática Aplicada a la Topografía',
          'Fundamentos y Aplicaciones de la Topografía',
          'Aplicaciones de Topografía',
          'Aplicación en Carretera',
          'Aplicación en Edificaciones'
        ]
      },
      {
        nombre: 'Módulo II - ALTIMETRÍA',
        temas: [
          'Altura, Cotas, Diferencias de Nivel, BM',
          'Nivelación Geométrica',
          'Ejemplos en Diferentes Obras',
          'Emplantillado en Carreteras',
          'Manejo de Eclímetro en Carreteras'
        ]
      },
      {
        nombre: 'Módulo III - TOPOGRAFÍA AUTOMATIZADA',
        temas: [
          'Uso de GPS Navegador',
          'Manejo de Estación Total: Leyca y Topcon',
          'Levantamiento con Estación Total',
          'Cambio de Estación Total',
          'Replanteo con Estación Total',
          'Costos y Errores en la Topografía'
        ]
      },
      {
        nombre: 'Módulo IV - CIVIL 3D',
        temas: [
          'Descarga de Datos de la Estación Total',
          'Transformación de Datos SDR a TXT, CSV',
          'Importación de Punto al Civil 3D',
          'Creación de Superficies',
          'Creación de Alineamientos',
          'Creación de Perfil'
        ]
      },
      {
        nombre: 'Módulo V - DRONES',
        temas: [
          'Fotogrametría Con Drones - Plan de Vuelo',
          'Tipos de Drones Según su Arquitectura',
          'Principales Componentes de los Drones',
          'Fundamentos de Fotogrametría Aérea y Topografía con Drones',
          'Planificación de Vuelo Fotogramétrico',
          'Procesamiento Fotogramétrico'
        ]
      }
    ]
  }
];
