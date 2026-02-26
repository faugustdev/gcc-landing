export const es = {
  nav: {
    problem: "Problema",
    howItWorks: "Como funciona",
    commands: "Comandos",
    architecture: "Arquitectura",
    quickstart: "Inicio rapido",
  },
  hero: {
    badge: "Basado en investigacion peer-reviewed — Leer el paper",
    title1: "Memoria que",
    title2: "persiste, ramifica",
    title3: "y fusiona",
    description:
      "GCC le da a tus agentes LLM memoria estructurada y versionada. Guarda milestones, ramifica experimentos, fusiona resultados — nunca pierdas contexto otra vez.",
    createdBy: "Creado por",
    viewOnGithub: "Ver en GitHub",
    learnMore: "Saber mas",
    terminalCode: `> "Construye una REST API para una app de tareas"

[GCC] Inicializando estructura .GCC/...
[GCC] Creado: main.md, metadata.yaml, commit.md, log.md

> "guarda este milestone"

[GCC] COMMIT [C001]: Servidor Express con modelo Todo
  Branch: main
  Archivos: server.js, models/todo.js

> "ramifica para probar SQLite"

[GCC] BRANCH: try-sqlite
  Proposito: Evaluar SQLite como almacenamiento ligero

> "donde quedamos?"

[GCC] CONTEXT --full
  Completado: M1 (servidor), M2 (SQLite integrado)
  Listo para continuar con manejo de errores.`,
  },
  problem: {
    tag: "El Problema",
    title: "Los agentes olvidan todo",
    description:
      "Los agentes LLM son poderosos pero sin estado. Sin memoria estructurada, las tareas de largo alcance son imposibles.",
    items: [
      {
        title: "El contexto desaparece",
        description:
          "A medida que las conversaciones crecen, las decisiones criticas y el razonamiento tecnico desaparecen detras del limite de tokens. Horas de trabajo — perdidas.",
      },
      {
        title: "Sin experimentacion segura",
        description:
          "Probar enfoques alternativos contamina la conversacion principal. No hay forma de aislar experimentos o revertir cambios.",
      },
      {
        title: "Las sesiones no se conectan",
        description:
          "Cada nueva conversacion empieza de cero. El agente no tiene idea de lo que paso ayer o lo que se decidio.",
      },
      {
        title: "El handoff es imposible",
        description:
          "El trabajo de un agente es invisible para otro. No hay memoria compartida, ni estado estructurado para transferir.",
      },
    ],
  },
  howItWorks: {
    tag: "El Ciclo OTA",
    title: "Como funciona GCC",
    description:
      "Los agentes operan a traves de ciclos Observacion-Pensamiento-Accion, con cada decision significativa registrada y recuperable.",
    steps: [
      {
        title: "Observar",
        description:
          "El agente lee logs, verifica el estado e identifica que ha cambiado desde el ultimo checkpoint.",
      },
      {
        title: "Pensar",
        description:
          "Analiza la situacion actual, evalua estrategias y decide el mejor curso de accion.",
      },
      {
        title: "Actuar",
        description:
          "Ejecuta el plan — escribiendo codigo, corrigiendo bugs, experimentando — luego persiste el progreso con COMMIT, BRANCH o MERGE.",
      },
    ],
  },
  commands: {
    tag: "Comandos",
    title: "Cuatro operaciones. Control total.",
    description:
      "Inspirado en Git, GCC provee cuatro operaciones componibles que cubren el ciclo de vida completo de la memoria del agente.",
    triggersLabel: "Disparadores",
    items: [
      {
        description:
          "Persiste un milestone con contexto tecnico completo. Cada commit captura razonamiento, archivos tocados y proposito del branch.",
      },
      {
        description:
          "Crea un espacio de trabajo aislado para experimentar. Los branches no contaminan el flujo principal — prueba lo que quieras de forma segura.",
      },
      {
        description:
          "Sintetiza un branch completado de vuelta al main. Captura que se intento, que se aprendio y que se debe integrar.",
      },
      {
        description:
          "Recupera memoria historica a cualquier resolucion — desde un roadmap de alto nivel hasta trazas OTA detalladas.",
      },
    ],
  },
  architecture: {
    tag: "Arquitectura",
    title: "Un sistema de archivos para la memoria",
    description:
      "Todo vive bajo .GCC/ — legible por humanos, versionado e inspeccionable en cualquier momento.",
    files: [
      "Roadmap global con objetivos, milestones y branches activos.",
      "Estado de infraestructura: registro de branches, arbol de archivos, dependencias, config.",
      "Entradas de commit estructuradas con razonamiento, archivos y contexto de branch.",
      "Entradas secuenciales de trazas OTA. Limitadas a 50 para recuperacion eficiente.",
      "Espacios de trabajo aislados, cada uno con su propio historial de commits y log OTA.",
    ],
  },
  quickstart: {
    tag: "Empezar",
    title: "Funcionando en segundos",
    description:
      "Instala GCC y deja que tus agentes recuerden todo. Funciona con Claude Code o cualquier framework de agentes.",
    recommended: "Recomendado",
    methods: [
      { title: "Skills.sh" },
      { title: "Instalacion manual" },
      { title: "Standalone" },
    ],
    naturalLanguage: "Luego solo usa lenguaje natural",
    examples: [
      { say: '"guarda este milestone"' },
      { say: '"prueba un enfoque diferente"' },
      { say: '"eso funciono, fusionalo"' },
      { say: '"donde quedamos?"' },
    ],
  },
  footer: {
    ctaTitle: "Dale a tus agentes memoria que",
    ctaHighlight: "no olvidaran",
    ctaDescription:
      "Open source, licencia MIT, respaldado por investigacion. Empieza a construir agentes que recuerdan.",
    starOnGithub: "Star en GitHub",
    readPaper: "Leer el paper",
    builtBy: "Creado por",
  },
}
