# Button and Link Analysis

This document provides a comprehensive analysis of all buttons, links, and interactive elements within the GetLanded website codebase. It details their location, current functionality, and tips for developers.

## 1. Header (`src/components/layout/Header.tsx`)

| Button / Link Text | Location | Current Action | Tips |
| :--- | :--- | :--- | :--- |
| **GetLanded Logo** | Navbar Left | Navigates to Home (`/`) | Correctly links to the landing page. |
| **Home** | Navbar Center | Navigates to Home (`/`) | Active state styling is implemented. |
| **Product** | Navbar Center | Navigates to Product (`/product`) | Active state styling is implemented. |
| **Pricing** | Navbar Center | Navigates to Pricing (`/pricing`) | Active state styling is implemented. |
| **About** | Navbar Center | Navigates to About (`/about`) | Active state styling is implemented. |
| **Blog** | Navbar Center | Navigates to Blog (`/blog`) | Active state styling is implemented. |
| **Sign In** | Navbar Right | Navigates to Login (`/login`) | Link is functional. |
| **Get Started** | Navbar Right | Navigates to Waitlist (`/waitlist`) | Primary CTA. currently points to waitlist. |
| **Hamburger Menu** | Navbar right (Mobile) | Toggles Mobile Menu | Opens the mobile navigation overlay. |
| **Mobile Links** | Mobile Menu | Navigate to respective pages | Same as desktop links, includes "Sign In" and "Get Started". |

## 2. Footer (`src/components/layout/Footer.tsx`)

| Button / Link Text | Location | Current Action | Tips |
| :--- | :--- | :--- | :--- |
| **GetLanded Logo** | Footer Top | Navigates to Home (`/`) | Correctly links to the landing page. |
| **Twitter Icon** | Footer Socials | `href="#"` (Nil) | **Missing Link**: Update with actual Twitter URL. |
| **LinkedIn Icon** | Footer Socials | `href="#"` (Nil) | **Missing Link**: Update with actual LinkedIn URL. |
| **GitHub Icon** | Footer Socials | `href="#"` (Nil) | **Missing Link**: Update with actual GitHub URL. |
| **Features** | Footer Product | Navigates to `/#features` | Anchor link to Home page features section. |
| **Extension** | Footer Product | Navigates to `/extension` | **Potential Issue**: Page might not exist yet. Verify. |
| **Pricing** | Footer Product | Navigates to `/pricing` | Correct. |
| **Waitlist** | Footer Product | Navigates to `/waitlist` | Correct. |
| **About** | Footer Company | Navigates to `/about` | Correct. |
| **Blog** | Footer Company | Navigates to `/blog` | Correct. |
| **Resources** | Footer Company | Navigates to `/resources` | Correct. |
| **Support** | Footer Company | Navigates to `/support` | Correct. |
| **Privacy** | Footer Legal | Navigates to `/privacy` | **Potential Issue**: Page might not exist yet. Verify. |
| **Terms** | Footer Legal | Navigates to `/terms` | **Potential Issue**: Page might not exist yet. Verify. |
| **Subscribe** | Footer Newsletter | `Button` with no `onClick` (Nil) | **Missing Functionality**: Add newsletter subscription logic. |

## 3. Home Page Components

### Hero (`src/components/home/Hero.tsx`)
| Button / Link Text | Location | Current Action | Tips |
| :--- | :--- | :--- | :--- |
| **Get Started Free** | Main CTA | Navigates to `/waitlist` | Primary conversion point. |

### Value Proposition (`src/components/home/ValueProp.tsx`)
| Button / Link Text | Location | Current Action | Tips |
| :--- | :--- | :--- | :--- |
| **Get Started Free** | Section CTA | Navigates to `/waitlist` | Consistent with Hero CTA. |

### Features (`src/components/home/Features.tsx`)
| Button / Link Text | Location | Current Action | Tips |
| :--- | :--- | :--- | :--- |
| **Learn more** | Hero Feature Card | `button` with no `onClick` (Nil) | **Missing Functionality**: Should navigate to `/product` or detailed feature section. |
| **Join Waitlist** | Bottom CTA | `button` with no `onClick` (Nil) | **Missing Functionality**: Wrap in `<Link to="/waitlist">` or add handler. |

### Tools Section (`src/components/home/ToolsSection.tsx` & `AIToolsCarousel.tsx`)
| Button / Link Text | Location | Current Action | Tips |
| :--- | :--- | :--- | :--- |
| **Carousel Arrows** | Tools Carousel | Scrolls Carousel | Functional internal navigation. |
| **Slide Indicators** | Tools Carousel | Jumps to Slide | Functional internal navigation. |
| **TAILOR TO JOB** | Resume Template Card Mockup | `button` with no `onClick` (Nil) | **Mockup Button**: Inside `ResumeOptimizerMockup`. purely visual currently. |
| **Tool Cards** | Carousel Items | None (Hover Only) | **Suggestion**: Make cards clickable to navigate to specific tool features. |
| **Mockup Navigation** | Uploaded Mockup Image | Nil | **Implementation**: Corresponds to `AIToolsCarousel`. Cards should link: "Resume Templates" -> `/resources`, "Chrome Extension" -> `/extension`. |

### How It Works (`src/components/home/HowItWorks.tsx`)
| Button / Link Text | Location | Current Action | Tips |
| :--- | :--- | :--- | :--- |
| **Step Cards** | Steps Grid | None (Hover Only) | Purely informational. |

### FAQ (`src/components/ui/FAQAccordion.tsx`)
| Button / Link Text | Location | Current Action | Tips |
| :--- | :--- | :--- | :--- |
| **Question Header** | Accordion Item | Toggles Answer | Functional internal interaction. |

## 4. Product Page (`src/pages/Product.tsx`)

| Button / Link Text | Location | Current Action | Tips |
| :--- | :--- | :--- | :--- |
| **Join Free Beta** | Hero CTA | Navigates to `/waitlist` | Correct. |
| **Company Logos** | Marquee Section | `cursor-pointer`, no `onClick` (Nil) | **Ambiguous**: If clickable, where should it lead? Maybe remove pointer cursor. |
| **Get Matched Now** | Jobs Section | Navigates to `/waitlist` | Correct. |
| **Add to Chrome** | Extension Section | Navigates to `/waitlist` | **Tip**: Should eventually link to Chrome Web Store. |
| **Learn More** | Extension Section | Navigates to `/product` | **Issue**: Self-referential link. Should link to specific section (`#extension`) or help docs. |
| **Analyze Your Resume** | Resume Section | Navigates to `/waitlist` | Correct. |
| **TAILOR TO JOB** | Resume Mockup | `button` no action (Nil) | Inside `ResumeOptimizerMockup`. Visual only. |
| **Coming Soon Cards** | Coming Soon Section | Hover effects only | **Suggestion**: Could link to a "Notify Me" modal. |

## 5. Pricing Page (`src/pages/Pricing.tsx`)

| Button / Link Text | Location | Current Action | Tips |
| :--- | :--- | :--- | :--- |
| **Monthly/Yearly** | Toggle Switch | Toggles Pricing State | Functional internal interaction. |
| **Get Started Free** | Free Plan Card | `button` with no `onClick` (Nil) | **Missing Functionality**: Wrap in `<Link to="/signup">` or `/waitlist`. |
| **Start Pro Trial** | Pro Plan Card | `button` with no `onClick` (Nil) | **Missing Functionality**: Wrap in `<Link to="/signup?plan=pro">`. |
| **Get Pro Plus** | Pro Plus Plan Card | `button` with no `onClick` (Nil) | **Missing Functionality**: Wrap in `<Link to="/signup?plan=plus">`. |
| **Get Started** | Comparison Table Footer | `button` with no `onClick` (Nil) | **Missing Functionality**: Needs navigation links for all 3 buttons. |
| **Get Started Free** | Footer CTA | `button` with no `onClick` (Nil) | **Missing Functionality**: Wrap in `<Link to="/waitlist">`. |
| **View Demo** | Footer CTA | `button` with no `onClick` (Nil) | **Missing Functionality**: Link to a demo video or page. |

## 6. About Page (`src/pages/About.tsx`)

| Button / Link Text | Location | Current Action | Tips |
| :--- | :--- | :--- | :--- |
| **Join the movement** | Hero | `Button` with no `onClick` (Nil) | **Missing Functionality**: Wrap in `<Link to="/waitlist">`. |
| **Read our story** | Hero | `Button` with no `onClick` (Nil) | **Missing Functionality**: Scroll to "The Genesis" section. |
| **Mail Icon** | Team Member Card | `href="#"` (Nil) | **Missing Link**: Add `mailto:` links. |
| **LinkedIn Icon** | Team Member Card | `href="#"` (Nil) | **Missing Link**: Add personal LinkedIn URLs. |
| **GitHub Icon** | Team Member Card | `href="#"` (Nil) | **Missing Link**: Add personal GitHub URLs. |
| **Get Started for Free** | Footer CTA | `Button` with no `onClick` (Nil) | **Missing Functionality**: Wrap in `<Link to="/waitlist">`. |

## 7. Blog Page (`src/pages/Blog.tsx`)

| Button / Link Text | Location | Current Action | Tips |
| :--- | :--- | :--- | :--- |
| **Category Buttons** | Filter Bar | Filters Article List | Functional state change. |
| **Read Article** | Featured Article | `div` with `cursor-pointer`, no `onClick` (Nil) | **Missing Functionality**: Should navigate to blog post slug (e.g., `/blog/post-1`). |
| **Article Card** | Article Grid | `div` with `cursor-pointer`, no `onClick` (Nil) | **Missing Functionality**: Should navigate to blog post slug. |
| **Load More Insights** | Bottom Button | `button`, no `onClick` (Nil) | **Missing Functionality**: Implement pagination or load more logic. |

## 8. Resources Page (`src/pages/Resources.tsx`)

| Button / Link Text | Location | Current Action | Tips |
| :--- | :--- | :--- | :--- |
| **Resource Item** | Grid | `motion.div` with `cursor-pointer`, no link (Nil) | **Missing Functionality**: Should link to download or resource page. |
| **Subscribe** | Newsletter Section | `button` with no `onClick` (Nil) | **Missing Functionality**: Implement subscription logic. |

## 9. Support Page (`src/pages/Support.tsx`)

| Button / Link Text | Location | Current Action | Tips |
| :--- | :--- | :--- | :--- |
| **Search Bar** | Header | `input`, no action (Nil) | **Missing Functionality**: Implement search filtering. |
| **Quick Links** | Grid (Getting Started etc.) | `motion.div` with `cursor-pointer`, no link (Nil) | **Missing Functionality**: Should link to help articles. |
| **FAQ Items** | FAQ List | `hover` effect only, no expand (Nil) | **Ambiguous**: Unlike the main FAQ accordion, these don't seem to expand. |
| **Send Message** | Contact Form | `Button`, no `type="submit"` or `onClick` (Nil) | **Missing Functionality**: Implement form submission. |

## 10. Waitlist Page (`src/pages/Waitlist.tsx`)

| Button / Link Text | Location | Current Action | Tips |
| :--- | :--- | :--- | :--- |
| **Join Waitlist** | Form | `Button`, no `type="submit"` or `onClick` (Nil) | **Missing Functionality**: Implement form submission to backend. |

## 11. Dashboard Page (`src/pages/Dashboard.tsx`) - (If Applicable/Implemented)

| Button / Link Text | Location | Current Action | Tips |
| :--- | :--- | :--- | :--- |
| **Sidebar Items** | Sidebar | Buttons change active state | Functional state change. |
| **Upgrade Now** | Pro Plan Widget | `button`, no `onClick` (Nil) | **Missing Functionality**: Navigate to upgrade/pricing. |
| **View All** | Recent Applications | `button`, no `onClick` (Nil) | **Missing Functionality**: Navigate to full applications list. |
| **Find New Jobs** | Top Bar | `Button`, no `onClick` (Nil) | **Missing Functionality**: Navigate to job board/search. |
| **Bell Icon** | Top Bar | `button`, no `onClick` (Nil) | **Missing Functionality**: Show notifications. |

---

**General Note**: Almost all "Button" components in the secondary pages (Pricing, About, Support, etc.) are currently purely visual styling wrappers without `onClick` handlers or wrapping `Link` components. A systematic pass is needed to wrap these in `Link` or add event handlers.
