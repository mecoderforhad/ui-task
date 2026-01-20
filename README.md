# Featured News Section – UI Task

This project implements **only the highlighted featured news section** from the provided reference screenshot, as requested in the task scope. The goal is to demonstrate clean component design, responsive layout handling, and modern Next.js + Tailwind CSS usage.

---

## 🔍 Scope Clarification

✔ Implemented **only the main center featured article section**, which includes:

* Featured image
* Category badge
* Headline / title
* Author & date meta information
* Short excerpt
* Call-to-action button (Read More)

❌ The following were intentionally **not implemented**:

* Navigation bar
* Left or right sidebars
* Other article lists or grids
* Footer

This is strictly aligned with the instruction: **“Implement only the specific section highlighted.”**

---

## 🧱 Tech Stack

* **Next.js (Latest, App Router)**
* **React 18**
* **Tailwind CSS v3**
* **TypeScript**

No additional libraries were used to keep the implementation minimal and focused.

---

## 📁 Project Structure

```txt
app/
  ├── layout.tsx        # Root layout
  ├── page.tsx          # Renders the featured section only
  └── globals.css       # Tailwind base styles

components/
  └── featured/
      ├── FeaturedNewsCard.tsx  # Reusable featured section component
      └── index.ts

public/
  └── images/
      └── featured-news.jpg
```

The component is isolated in a feature-based folder to keep it reusable and scalable.

---

## 🧩 Component Design

The featured section is implemented as a reusable React component:

```tsx
<FeaturedNewsCard
  category="Politics"
  title="‘Election was rigged’ says opposition, police confirm three dead"
  excerpt="When we get out of the glass bottle of our ego and when we escape..."
  author="John Doe"
  date="February 17, 2020"
  imageUrl="/images/featured-news.jpg"
/>
```

All content is driven by props to support future reuse.

---

## 📱 Responsiveness

The layout is fully responsive and tested across:

* **Mobile** – optimized image height, readable text, no overflow
* **Tablet** – balanced spacing and typography
* **Desktop** – strong visual hierarchy for a featured article

Tailwind breakpoints (`sm`, `md`) are used for responsive adjustments.

---

## 🎯 Design Considerations

* Semantic HTML (`article`, `h2`, `p`) for accessibility
* Clear typography hierarchy
* Minimal but realistic hover and interaction states
* Clean Tailwind utility usage without over-styling

Pixel-perfect replication was not the goal; instead, the focus was on **visual accuracy, usability, and maintainability**.

---

## ▶️ Getting Started

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000` to view the featured section.

---

## 📝 Notes

This implementation intentionally avoids over-engineering (state management, APIs, global stores) to stay aligned with the task requirements and evaluation focus.

---

Thank you for reviewing this submission.
