export const en = {
  nav: {
    problem: "Problem",
    howItWorks: "How It Works",
    commands: "Commands",
    architecture: "Architecture",
    quickstart: "Quick Start",
  },
  hero: {
    badge: "Based on peer-reviewed research — Read the paper",
    title1: "Memory that",
    title2: "persists, branches",
    title3: "and merges",
    description:
      "GCC gives your LLM agents structured, versioned memory. Commit milestones, branch experiments, merge results — never lose context again.",
    createdBy: "Created by",
    viewOnGithub: "View on GitHub",
    learnMore: "Learn more",
    terminalCode: `> "Build me a REST API for a todo app"

[GCC] Initializing .GCC/ structure...
[GCC] Created: main.md, metadata.yaml, commit.md, log.md

> "save this milestone"

[GCC] COMMIT [C001]: Express server with Todo model
  Branch: main
  Files: server.js, models/todo.js

> "branch to try SQLite"

[GCC] BRANCH: try-sqlite
  Purpose: Evaluate SQLite as lightweight storage

> "where were we?"

[GCC] CONTEXT --full
  Completed: M1 (server), M2 (SQLite integrated)
  Ready to continue with error handling.`,
  },
  problem: {
    tag: "The Problem",
    title: "Agents forget everything",
    description:
      "LLM agents are powerful but stateless. Without structured memory, long-horizon tasks become impossible.",
    items: [
      {
        title: "Context vanishes",
        description:
          "As conversations grow, critical decisions and technical reasoning disappear behind token limits. Hours of work — gone.",
      },
      {
        title: "No safe experimentation",
        description:
          "Trying alternative approaches pollutes the main conversation. There's no way to isolate experiments or roll back.",
      },
      {
        title: "Sessions don't connect",
        description:
          "Each new conversation starts from zero. The agent has no idea what happened yesterday or what was decided.",
      },
      {
        title: "Handoff is impossible",
        description:
          "One agent's work is invisible to another. There's no shared memory, no structured state to transfer.",
      },
    ],
  },
  howItWorks: {
    tag: "The OTA Cycle",
    title: "How GCC works",
    description:
      "Agents operate through Observation-Thought-Action cycles, with every meaningful decision logged and recoverable.",
    steps: [
      {
        title: "Observe",
        description:
          "The agent reads logs, checks state, and identifies what has changed since the last checkpoint.",
      },
      {
        title: "Think",
        description:
          "Analyzes the current situation, evaluates strategies, and decides the best course of action.",
      },
      {
        title: "Act",
        description:
          "Executes the plan — writing code, fixing bugs, experimenting — then persists progress with COMMIT, BRANCH, or MERGE.",
      },
    ],
  },
  commands: {
    tag: "Commands",
    title: "Four operations. Total control.",
    description:
      "Inspired by Git, GCC provides four composable operations that cover the full lifecycle of agent memory.",
    triggersLabel: "Triggers",
    items: [
      {
        description:
          "Persist a milestone with full technical context. Every commit captures reasoning, files touched, and branch purpose.",
      },
      {
        description:
          "Create an isolated workspace for experimentation. Branches don't pollute the main flow — try anything safely.",
      },
      {
        description:
          "Synthesize a completed branch back into main. Captures what was tried, what was learned, and what to integrate.",
      },
      {
        description:
          "Retrieve historical memory at any resolution — from a high-level roadmap to fine-grained OTA traces.",
      },
    ],
  },
  architecture: {
    tag: "Architecture",
    title: "A file system for memory",
    description:
      "Everything lives under .GCC/ — human-readable, version-controlled, and inspectable at any time.",
    files: [
      "Global roadmap with objectives, milestones, and active branches.",
      "Infrastructure state: branch registry, file tree, dependencies, config.",
      "Structured commit entries with reasoning, files, and branch context.",
      "Sequential OTA trace entries. Capped at 50 for efficient retrieval.",
      "Isolated workspaces, each with its own commit history and OTA log.",
    ],
  },
  quickstart: {
    tag: "Get Started",
    title: "Up and running in seconds",
    description:
      "Install GCC and let your agents remember everything. Works with Claude Code, or any agent framework.",
    recommended: "Recommended",
    methods: [
      { title: "Skills.sh" },
      { title: "Manual Installation" },
      { title: "Standalone" },
    ],
    naturalLanguage: "Then just use natural language",
    examples: [
      { say: '"save this milestone"' },
      { say: '"try a different approach"' },
      { say: '"that worked, merge it"' },
      { say: '"where were we?"' },
    ],
  },
  footer: {
    ctaTitle: "Give your agents memory they",
    ctaHighlight: "won't forget",
    ctaDescription:
      "Open source, MIT licensed, backed by research. Start building agents that remember.",
    starOnGithub: "Star on GitHub",
    readPaper: "Read the paper",
    builtBy: "Built by",
  },
}
