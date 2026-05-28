AGENTS.md - Architecture & Context (Samsung AI Analytics Hub)
This file serves as persistent memory and context for any AI agent, LLM assistant, or developer working on the Samsung AI Analytics Hub hackathon project. It outlines the frontend architecture, data flow, features, and AI integration guidelines to ensure rapid development and code consistency.

1. Project Overview
The Samsung AI Analytics Hub is an intelligent dashboard application designed for a hackathon. It processes data regarding Samsung product sales, customer behavior, and inventory levels, using AI agents to provide deep insights, predictive analytics, and conversational data exploration.

Target Users: - Store Managers & Analysts: To monitor performance, view predictive stock alerts, and track KPIs.

Executive Decision Makers: To see high-level trends and interact with an AI Copilot for ad-hoc business intelligence.

Core Functionality: Interactive dashboards, top-selling product metrics, business health indices (liquidity, turnover, demand growth), and an AI-driven analytical assistant.

2. Tech Stack
Frontend Core: React 19 + TypeScript + Vite.

Routing: React Router v6 (for moving between Dashboard, Inventory, and AI Chat views).

State & Data Fetching: React Query (@tanstack/react-query) for caching mock/real API responses + Custom Hooks.

Data Visualization: Recharts or Chart.js (optimized for real-time lookups and interactive filtering).

Styling: Tailwind CSS + Radix UI primitives + shadcn/ui components.

AI / LLM Integration: Vercel AI SDK or direct streaming integration with an LLM API (e.g., OpenAI/Anthropic/Gemini) to act as the resident data analyst agent.

3. Architecture Overview
The frontend is structured to keep UI presentation completely decoupled from data transformation and AI streaming logic.

Directory Structure (src/)
components/: UI components.

ui/: Design system primitives (Buttons, Cards, Dialogs via shadcn/ui).

dashboard/: Charts, KPI metric cards, and top-selling product lists.

ai-agent/: Chat interfaces, prompt suggestions, and streaming token layout.

pages/:

DashboardPage.tsx: The primary analytical grid view (Top products, trends, main interactive dashboard).

InventoryPage.tsx: Detailed tables showing current stock vs AI-predicted demand.

AgentChatPage.tsx: Full-screen conversational UI to query the Samsung dataset.

hooks/:

useAnalytics.ts: Aggregates, filters, and computes indices (Sales performance, growth rates).

useAgentChat.ts: Handles streaming responses, context passing, and UI updates for the AI assistant.

services/: API client layers. Contains logic to send formatted Samsung sales structures to the LLM agent context.

types/: Strongly typed definitions for Samsung product categories (Mobile, TV & AV, Home Appliances), sales metrics, and conversation histories.

Data Flow:
Samsung Raw Dataset / API -> useAnalytics Hooks -> Interactive UI Charts -> Context Injection to AI Agent -> User Conversational View

4. User Flows & Key Views
1. The Landing / Overview Screen (Dashboard Interactivo)
Top-Selling Products: A highlighted section showcasing Samsung's top performers (e.g., Galaxy S Series, Neo QLED TVs) with dynamic date-range toggles.

Business Indices: Visual indicators for complex operational metrics like Inventory Turnover Rate, Sales Growth Velocity, and Demand Predictability.

Interactive Grid: Clicking on specific charts (e.g., a drop in home appliance sales) dynamically updates the surrounding data cards to isolate that context.

2. Conversational AI Analyst Flow
The user clicks a floating action button or enters the chat room.

The user asks: "Why did Galaxy Buds sales drop last week?" or "Give me a summary of the most successful product line this quarter."

The AI Agent accesses the active dashboard state, analyzes the underlying Samsung JSON dataset, and returns text summaries alongside structured UI charts inside the chat window.

5. AI Agent Capabilities & Context Injection
To make the AI agent effective during the hackathon demo, it must be fed structural context:

System Prompts: Embedded context defining the agent as an expert Samsung Retail & Supply Chain Analyst.

Data Payload Stripping: Because LLM context windows can get clogged, hooks must summarize massive product datasets into structured KPI aggregates before feeding them to the agent prompt.

Function Calling / Tool Use: The agent should be capable of outputting a JSON block that triggers the frontend UI to change tabs or apply specific chart filters automatically.

6. Key Features
Planned / Core Hackathon Scope:

Interactive charts (Bar, Area, and Donut charts mapping Samsung sales categories).

Real-time indexing scoreboards (calculating health percentages based on stock vs sales).

Highlight matrix for Top-5 and Bottom-5 moving products.

Mocked streaming or live API connection to an LLM for conversational insights.

Out of Scope (For Hackathon Constraints):

Live enterprise database writes (Read-only analytics mode).

User management/authentication (Bypassed with a default "Guest Analyst" profile for rapid judging).

7. Code Standards & Hackathon Delivery
Speed + Type Safety: Leverage TypeScript strictly for data models (Product, SaleRecord, InventoryItem), but allow quick UI prototyping. Avoid any where it breaks chart data schemas.

Component Speed: Utilize lucide-react for clean, recognizable dashboard icons.

No Hardcoded Values: Global Samsung product metrics must be driven by data constants (src/data/samsung_mock_data.json) so they can be swapped for live data instantly if needed.

8. Presentation & UX Optimizations (For Judges)
The "Wow" Factor: Ensure charts have smooth entrance animations (framer-motion or built-in Recharts configurations).

Dark Mode / Premium Tech Theme: A sleek midnight-blue/dark interface matches Samsung's premium tech branding (bg-slate-950, text-slate-50, accenting with Samsung Blue #034EA2).

One-Click Prompts: Pre-populate quick-click buttons for judges to test the AI agent instantly (e.g., 📊 "Analyze sales trends", ⚠️ "Find stock shortages").

9. Current Hackathon To-Do List
[ ] Set up Mock Database Engine: Seed samsung_mock_data.json with realistic numbers covering products, sales history, and supply margins.

[ ] Build DashboardPage.tsx Layout: Structure the top-selling products component alongside the primary interactive analytical charts.

[ ] Calculate Business Indices: Write the functional utilities to generate mathematical scores for product health and demand metrics.

[ ] Integrate LLM API Context Hook: Connect the text-area input with the AI prompt context, packaging the summary of the top products into the system state.

[ ] Polish Dashboard Responsiveness: Ensure the judges can open the prototype on a monitor or tablet flawlessly without layout breaks.