# Product Page Mockup Documentation

**Total Mockups:** 10

This document provides detailed specifications for all product mockups found on the Product page. Each entry includes the mockup title, description, dimensions, and a usage tip.

---

## 1. Hero Laptop Display
**Component:** `ProductLaptop`  
**Location:** Hero Section  

### Description
A 3D perspective laptop mockup that animates on entry (rotates and opens). It displays the main "Product Dashboard" interface, including a sidebar, "New" AI Resume Builder card, "Live" Job Tracker card, and an action grid.

### Dimensions
- **Container:** `w-[640px]` (Native width before scaling)
- **Responsive Scaling:**
  - Default: `scale-[0.45]`
  - Min (375px): `scale-[0.52]`
  - Sm: `scale-[0.65]`
  - Md: `scale-[0.85]`
  - Lg: `scale-100`
- **Screen:** `w-[600px]` with aspect ratio `16/10`
- **Perspective:** `2000px`

### Usage Tip
> **Primary Hero Visual**: Use this to showcase the "control center" of the application. The 3D open animation is designed to grab attention immediately upon page load. Ensure the `START_DELAY` in the component matches the text animations for a synchronized entrance.

---

## 2. Phone Display
**Component:** `PhoneDisplay`  
**Location:** Explore Features Section  

### Description
A highly detailed, interactive mobile phone mockup with a titanium frame style and "Dynamic Island". It features 3D tilt effects on hover. The screen displays a "Welcome Back" user dashboard, a "Match Score" glassmorphism card (92%), and a list of top job matches. It also includes floating "Notification" and "Match Score" badges that animate in.

### Dimensions
- **Container:** `w-full max-w-[320px]` (Mobile) to `max-w-[380px]` (Desktop)
- **Scale:** `scale-[0.65]` (Base) to `scale-[0.75]` (Sm). Hovers to `0.7` / `0.8`.
- **Screen Aspect Ratio:** `9/19.5`
- **Perspective:** `1200px`

### Usage Tip
> **Mobile App Preview**: Ideal for demonstrating the mobile responsiveness or specific app features. The 3D tilt effect requires mouse interaction, so it works best on desktop views where hover states are available.

---

## 3. Job Matches Marquee Card
**Component:** Inline JSX (Product.tsx)  
**Location:** Resume Builder Features Section  

### Description
A static container featuring floating company logos (Google, LinkedIn, Netflix, etc.) and a horizontally scrolling "marquee" of job category cards (e.g., "Entry Level Work from Home Jobs").

### Dimensions
- **Container:** `w-full max-w-lg` (Mobile/Tablet) to `lg:max-w-none` (Desktop)
- **Inner Job Cards:** `w-40` fixed width
- **Company Logos:** Varied sizes (`w-8` to `w-12`) positioned absolutely.

### Usage Tip
> **Dynamic Content Showcase**: Use this to visually represent "abundance" or "matching" capabilities. The marquee animation implies a continuous stream of opportunities.

---

## 4. AI Copilot Extension Browser (LinkedIn Style)
**Component:** Inline JSX (Product.tsx)  
**Location:** AI Copilot Extension Section  

### Description
A browser window mockup displaying a LinkedIn-style job card ("Software Engineer" at LinkedIn). It features a "GetLanded" extension overlay badge and skeleton content bars to simulate analyzing the page.

### Dimensions
- **Container:** Responsive `div`. `w-full`, usually constrained by parent grid col.
- **Browser Header:** Standard macOS style dots (Red/Yellow/Green).
- **Badge:** `px-2 py-1` (Mobile) to `px-3 py-1.5` (Desktop).

### Usage Tip
> **Extension Context**: Specifically designed to show how the tool integrates *over* existing platforms (like LinkedIn). The "GetLanded" badge is the focal point to show ownership/integration.

---

## 5. Resume Analyzer Browser
**Component:** Inline JSX (Product.tsx)  
**Location:** AI Resume Builder Section  

### Description
A browser window mockup showing a "Tailor Resumes" interface. It displays a job card for "Software Engineer" with a "Keyword Match" badge and a resume skeleton layout below it.

### Dimensions
- **Container:** `w-full max-w-lg` (Mobile/Tablet) to `lg:max-w-none` (Desktop).
- **Match Indicator:** Wrapper div with `flex items-center gap-2`.

### Usage Tip
> **Feature Action Shot**: Depicts the *process* of tailoring. Use this to illustrate the "before/after" or "matching" phase of the resume building workflow.

---

## 6. Job Tracker Kanban Board
**Component:** Inline JSX (Product.tsx)  
**Location:** Job Tracker Section  

### Description
A browser window mockup displaying a Kanban board with "SCREEN", "INTERVIEWING", "OFFER", and "REJECTED" columns. It includes a progress bar and a "Job Search Summarized" floating card overlay.

### Dimensions
- **Container:** Responsive `div`.
- **Kanban Scroll Area:** `min-w-[500px]` (Mobile) to `min-w-[600px]` (Desktop) inside an `overflow-x-auto` container to allow scrolling on small screens.
- **Floating Summary Card:** `w-56`, positioned `-bottom-4 -left-4`.

### Usage Tip
> **Workflow Visualization**: Demonstrates organization and tracking. The horizontal scroll is crucial for mobile responsiveness; ensure the container width doesn't break the layout.

---

## 7. Resume Builder Mini-Mockup (WeWork)
**Component:** Inline JSX (Product.tsx)  
**Location:** Teal-Style "Resume Builder" Feature  

### Description
A compact browser mockup showing a specific job match ("WeWork") with a "32%" match score circle and a "Tailor your resume" prompt.

### Dimensions
- **Container:** `w-full max-w-[300px]` (Mobile) to `md:max-w-xs`.
- **Floating Badge:** `w-40`, positioned `-bottom-4 -right-4`.

### Usage Tip
> **Feature Highlight**: A simplified version of the Resume Analyzer, focused purely on the "Score" and "Prompt" to tailor. Good for tighter layout spaces.

---

## 8. Job Tracker Mini-Mockup (List View)
**Component:** Inline JSX (Product.tsx)  
**Location:** Teal-Style "Job Tracker" Feature  

### Description
A compact browser mockup showing a list view of applications with status badges ("APPLIED", "SCREEN", "INTERVIEW").

### Dimensions
- **Container:** `w-full max-w-[300px]` (Mobile) to `md:max-w-xs`.
- **List Items:** Flex scale.

### Usage Tip
> **List Perspective**: Alternative to the Kanban board. Use this when you want to show a cleaner, high-level "list" of progress rather than the board view.

---

## 9. Job Insights Mini-Mockup (Adobe)
**Component:** Inline JSX (Product.tsx)  
**Location:** Teal-Style "Job Insights" Feature  

### Description
A compact browser mockup displaying detailed job insights for a role at "ADOBE", including salary range ($131k - $170k), sponsorship status, and a "Hard Skills" bar graph.

### Dimensions
- **Container:** `w-full max-w-[300px]` (Mobile) to `md:max-w-xs`.

### Usage Tip
> **Data visualization**: Focuses on the *metadata* of a job (Salary, Visa, Skills). Use this to highlight the "Intel/Insights" value proposition.

---

## 10. Bookmark Jobs Mini-Mockup (Toyota)
**Component:** Inline JSX (Product.tsx)  
**Location:** Teal-Style "Bookmark Jobs" Feature  

### Description
A compact browser mockup showing a job card for "Data Scientist - Product" at "Toyota", with location and salary info, simulating a saved bookmark.

### Dimensions
- **Container:** `w-full max-w-[300px]` (Mobile) to `md:max-w-xs`.

### Usage Tip
> **Save Action**: Represents the "Capture" phase. Best used to show ease of saving external content into the platform.
