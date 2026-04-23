# Ganga | Price Comparison Web

> **Ganga is a clean, neutral, and high-density web interface designed to compare product prices across Colombia's top e-commerce platforms. The project prioritizes efficiency and trustworthy data, removing visual clutter to focus on what matters: making the best buying decision.**

---

## Purpose & Visual Aesthetics

This project was developed following formal software engineering methodologies. You can review the detailed planning and design documents here:

* [Frontend Design Document (FDD)](./docs/PRD.md): Detailed visual design and architecture.
  
### Purpose & Visual Aesthetics

* **Design Philosophy:** Data-dense but clean, avoiding visual noise.

* **Color Palette:**

  * **Primary:** #0F172A (Deep Slate)

  * **Accent:** #2563EB (Royal Blue)

  * **Background:** #F8FAFC (Light Gray)

  * **Typography:** Manrope for structure and Inter for precision labels.

---

## The Ecosystem

This repository is the frontend for the [Ganga API](https://github.com/miguelvelezsk/ganga-api). Together, they form a full-stack architecture for intelligent shopping.

## Frontend Tech Stack

* **Framework:** React + Vite (Optimized SPA)

* **Styling:** Tailwind CSS

* **UI Components:** Shadcn/ui (Cards, Inputs, Skeleton Loaders)

* **Data Fetching:** TanStack Query (State & Cache Management)

* **Icons:** Lucide React & React Icons

* **Language:** TypeScript (for type safety)
---

## Infrastructure & Deployment

The application is organized into a modular hierarchy for high maintainability:

* **Layout:** Responsive Navbar, dynamic Header with search validation, and a centralized Main area.

* **Dynamic Grid:** A 3-column system (Desktop) that alternates states:

  * **Loading:** Custom Skeleton Loaders reflecting the card structure.

  * **Success:** Clean Shadcn Cards with e-commerce badges (Blue for Mercado Libre, Yellow for Éxito).

  * **Empty:** NoResults component for failed searches or filtered noise.

---

## User Flow & Logic

1. **Search Validation:** Ensures queries are alphanumeric and non-empty.

2. **API Consumption:** Executes a GET request to /search?product_name={query} via TanStack Query.

3. **Data Formatting:**

  * **Currency:** Raw integers are converted to COP format via Intl.NumberFormat.

---

## 🚀 Page Link:

**[Ganga](https://ganga-price-comparison-web.vercel.app/)**

## Author

**Miguelangel Velez Aguirre**
* Systems Engineering Student at Universidad de Antioquia (UdeA)
* [LinkedIn Profile](https://www.linkedin.com/in/miguelangel-v%C3%A9lez-aguirre-235982168/) | [GitHub Portfolio](https://github.com/miguelvelezsk?tab=repositories)
