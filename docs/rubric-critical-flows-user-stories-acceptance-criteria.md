# Rubric Website Redesign: Critical User Flows, User Stories, and Acceptance Criteria

This document outlines the critical user journeys, supporting user stories, and verified acceptance criteria for the Rubric Website Redesign project.

---

## 1. Critical User Flows Identification

| Flow ID | Flow Name | User Type | Business Goal | Priority | Pages/Screens Involved |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **FL-01** | Hero Conversion | Enterprise Lead | Initial Engagement | Critical | Home, Contact |
| **FL-02** | Service Exploration | CIO/CTO | Solution Awareness | Critical | Home, Services, Contact |
| **FL-03** | Strategic Inquiry | Decision Maker | High-Value Lead Gen | Critical | Contact |
| **FL-04** | Talent Acquisition | Specialist Candidate | Staff Augmentation | High | Careers, Contact |
| **FL-05** | Platform Validation | Technical Buyer | Product Interest | High | Enterprise Platform, Contact |
| **FL-06** | Global Navigation Integrity | All Users | Experience Quality | Critical | Navbar, All Pages |
| **FL-07** | Mobile / Responsive Navigation | Mobile User | Accessibility & Reach | High | Navbar (Mobile), All Pages |
| **FL-08** | Branding & Visual Consistency | All Users | Brand Trust | High | All Pages |
| **FL-09** | Proof of Impact | Prospective Client | Trust Building | High | Case Studies, Contact |
| **FL-10** | Thought Leadership | Industry Peer | Authority Building | Medium | Insights |
| **FL-11** | About / Mission Review | Stakeholder | Brand Alignment | High | About, Contact |

---

## 2. User Stories & Acceptance Criteria

### FL-01: Hero Conversion
*   **User Story:** As an **Enterprise Lead**, I want to see a clear and impactful value proposition immediately upon landing, so that I can understand Rubric’s core offering and initiate a consultation without friction.
*   **Acceptance Criteria:**
    *   **AC 1:** Given the Home page has loaded, the Hero section must display the primary brand tagline.
    *   **AC 2:** When the user clicks the primary conversion CTA in the Hero section, they must be navigated to the contact route.
    *   **AC 3:** The Hero section must maintain visual hierarchy and impact across different viewport sizes.

### FL-02: Service Exploration (Bento Navigation)
*   **User Story:** As a **CIO/CTO**, I want to browse Rubric’s specialized service domains through an intuitive grid, so that I can quickly identify which engineering pillar aligns with my organization's technical needs.
*   **Acceptance Criteria:**
    *   **AC 1:** Given the user is on the Home page, the specialized domains section must display interactive cards for the core software quality engineering pillars.
    *   **AC 2:** When the user clicks the secondary navigation button in the Hero, they must be navigated to the services landing page.
    *   **AC 3:** Interaction with individual service cards must provide clear visual feedback or navigation to detailed service descriptions.

### FL-03: Strategic Inquiry (Contact Form)
*   **User Story:** As a **Decision Maker**, I want to submit a structured inquiry that specifies my department of interest, so that I can receive a tailored response from the relevant Rubric technical expert.
*   **Acceptance Criteria:**
    *   **AC 1:** Given the user is on the Contact page, the form must contain labels for name, professional email, inquiry department, and project requirements.
    *   **AC 2:** When the inquiry department selection is opened, it must include options for the verified service tiers (e.g., QA, DEV, ITSM, Consulting).
    *   **AC 3:** When the user clicks the submission button, the action must be clearly initiated.

### FL-04: Talent Acquisition (Careers)
*   **User Story:** As a **Specialist Candidate**, I want to explore Rubric’s elite culture and growth frameworks, so that I can determine if the company offers the engineering focus and growth opportunities I am looking for.
*   **Acceptance Criteria:**
    *   **AC 1:** Given the Careers page is loaded, the academy/growth section must be visible and descriptive of technical evolution.
    *   **AC 2:** The current openings section must provide a mechanism to filter or view roles by department.
    *   **AC 3:** Clicking the speculative inquiry CTA must initiate the standard recruitment contact process.

### FL-05: Platform Validation (Enterprise Platform)
*   **User Story:** As a **Technical Buyer**, I want to review the metrics and architectural guardrails of the Rubric Enterprise Platform, so that I can validate how the platform provides visibility into the software delivery lifecycle.
*   **Acceptance Criteria:**
    *   **AC 1:** Given the Enterprise Platform page is loaded, the hero section must clearly state the platform's focus on architectural control.
    *   **AC 2:** When the user views the performance metrics section, verified data points for uptime and security must be present.
    *   **AC 3:** Clicking the access request CTA must navigate the user to the relevant inquiry form.

### FL-06: Global Navigation Integrity
*   **User Story:** As an **Active User**, I want to navigate seamlessly between primary content pillars, so that I can explore Rubric’s technical capabilities and thought leadership without getting lost.
*   **Acceptance Criteria:**
    *   **AC 1:** Given any page is loaded, the Navbar must be present and sticky at the top of the viewport.
    *   **AC 2:** All primary navigation links (e.g., Platform, Insights, Case Studies) must correctly route to their respective pages.
    *   **AC 3:** The Navbar must display the primary brand wordmark with consistent styling.

### FL-07: Mobile / Responsive Navigation
*   **User Story:** As a **Mobile User**, I want to access the full site navigation via a responsive menu, so that I can explore the site effectively on smaller devices.
*   **Acceptance Criteria:**
    *   **AC 1:** When the viewport width is below the desktop threshold, the standard Navbar must be replaced by a mobile menu trigger.
    *   **AC 2:** Clicking the menu trigger must open a navigation overlay containing all primary navigation links.
    *   **AC 3:** The mobile navigation overlay must be easily dismissible and maintain legibility.

### FL-08: Branding & Visual Consistency
*   **User Story:** As a **Stakeholder**, I want to see a consistent visual identity across the entire site, so that I feel confident in Rubric’s professional engineering standards and brand authority.
*   **Acceptance Criteria:**
    *   **AC 1:** Every page must utilize the primary brand color palette (Graphite and Signal Red).
    *   **AC 2:** Typography must strictly follow the defined font families for headlines and body text.
    *   **AC 3:** UI components (buttons, cards, inputs) must maintain a consistent rounding and border style.

### FL-09: Proof of Impact (Case Studies)
*   **User Story:** As a **Prospective Client**, I want to read measurable success stories from industry-specific implementations, so that I can see the potential ROI and failure reduction Rubric can deliver to my business.
*   **Acceptance Criteria:**
    *   **AC 1:** Given the Case Studies page is loaded, real-world success metrics must be clearly displayed for each case.
    *   **AC 2:** Each case study card must display its relevant industry category.
    *   **AC 3:** Navigation to a consultation from a case study must be straightforward.

### FL-10: Thought Leadership (Insights)
*   **User Story:** As an **Industry Peer**, I want to search and filter technical insights, so that I can stay informed on the latest trends in software quality engineering.
*   **Acceptance Criteria:**
    *   **AC 1:** Given the Insights page is loaded, a search input for content discovery must be present.
    *   **AC 2:** The user must be able to view and select from a list of trending topics or tags.
    *   **AC 3:** The newsletter subscription form must be functional and placed for easy access.

### FL-11: About / Mission Review
*   **User Story:** As a **Stakeholder**, I want to read the company’s history and mission statement, so that I can understand Rubric’s commitment to architectural certainty and engineering focus.
*   **Acceptance Criteria:**
    *   **AC 1:** Given the About page is loaded, the mission statement and core engineering principles must be clearly presented.
    *   **AC 2:** The page must detail Rubric's history and long-standing focus on software excellence.
    *   **AC 3:** Navigation to a consultation from the About page must be intuitive and visible.

---

## 3. Recommended Next Step

The recommended next step for this project is to:
**Generate manual test cases** for the approved critical flows identified in this document.

---

## 4. Manual Test Cases

### FL-01: Hero Conversion
- **Test Case ID:** TC-01-01
- **Flow ID:** FL-01
- **Scenario:** Verify primary conversion CTA navigation.
- **Test Type:** Happy Path
- **Priority:** Critical
- **Preconditions:** User is on the Home page.
- **Test Steps:**
  1. Navigate to the Home page.
  2. Locate and click the primary "CONTACT US" button in the Hero section.
- **Test Data:** N/A
- **Expected Result:** The application navigates to the `/contact` route and the Contact page is rendered.

- **Test Case ID:** TC-01-02
- **Flow ID:** FL-01
- **Scenario:** Verify Hero tagline text accuracy and visual styling.
- **Test Type:** UI / Branding
- **Priority:** High
- **Preconditions:** User is on the Home page.
- **Test Steps:**
  1. Observe the Hero section main headline.
  2. Verify the text matches the approved tagline: "Structured quality. Measurable digital impact."
  3. Verify that font usage is consistent with the implemented brand identity.
- **Test Data:** N/A
- **Expected Result:** Tagline matches requirements. Headlines use the approved primary font family as per the design system (e.g., Inter or Hanken Grotesk).

### FL-02: Service Exploration
- **Test Case ID:** TC-02-01
- **Flow ID:** FL-02
- **Scenario:** Verify Bento Grid card interactivity.
- **Test Type:** Happy Path / UI
- **Priority:** High
- **Preconditions:** User is on the Home page.
- **Test Steps:**
  1. Scroll to the "Specialised Department Domains" section.
  2. Hover over or click any domain card (e.g., QA, ITSM, DEV).
- **Test Data:** N/A
- **Expected Result:** Card displays visual feedback (e.g., scale or color shift) to indicate interactivity.

- **Test Case ID:** TC-02-02
- **Flow ID:** FL-02
- **Scenario:** Verify secondary "SERVICES" CTA navigation.
- **Test Type:** Happy Path
- **Priority:** High
- **Preconditions:** User is on the Home page.
- **Test Steps:**
  1. Locate and click the secondary navigation button in the Hero section.
- **Test Data:** N/A
- **Expected Result:** The application navigates to the `/services` route.

### FL-03: Strategic Inquiry
- **Test Case ID:** TC-03-01
- **Flow ID:** FL-03
- **Scenario:** Verify successful population of the Contact form fields.
- **Test Type:** Happy Path
- **Priority:** Critical
- **Preconditions:** User is on the Contact page.
- **Test Steps:**
  1. Enter values for First Name, Last Name, and Professional Email.
  2. Select a department from the Inquiry Department dropdown.
  3. Enter text in the message/requirements field and click the submission button.
- **Test Data:** Name: "John Doe", Email: "john.doe@enterprise.com".
- **Expected Result:** Form fields accept inputs without validation errors. Actual backend submission behavior to be confirmed against implementation.

- **Test Case ID:** TC-03-02
- **Flow ID:** FL-03
- **Scenario:** Verify form validation for missing mandatory email.
- **Test Type:** Validation / Negative
- **Priority:** High
- **Preconditions:** User is on the Contact page.
- **Test Steps:**
  1. Fill in all fields except "Professional Email".
  2. Click the submission button.
- **Test Data:** N/A
- **Expected Result:** Form prevents submission and displays a validation alert/message for the mandatory field.

### FL-04: Talent Acquisition
- **Test Case ID:** TC-04-01
- **Flow ID:** FL-04
- **Scenario:** Verify department filter on Careers page.
- **Test Type:** Happy Path / Validation
- **Priority:** Medium
- **Preconditions:** User is on the Careers page.
- **Test Steps:**
  1. Scroll down to the "Current Openings" section.
  2. Open the department selection dropdown and observe available options.
  3. Select an option (e.g., Engineering).
- **Test Data:** Expected Options: All Departments, Engineering, Consulting, ITSM.
- **Expected Result:** The department dropdown contains verified options; selecting an option filters the role list as per implementation.

- **Test Case ID:** TC-04-02
- **Flow ID:** FL-04
- **Scenario:** Verify speculative inquiry initiation.
- **Test Type:** Happy Path
- **Priority:** Medium
- **Preconditions:** User is on the Careers page.
- **Test Steps:**
  1. Locate and click the "SEND SPECULATIVE CV" or equivalent CTA.
- **Test Data:** N/A
- **Expected Result:** Button initiates a contact action (e.g., mailto or form navigation) as implemented.

### FL-05: Platform Validation
- **Test Case ID:** TC-05-01
- **Flow ID:** FL-05
- **Scenario:** Verify display of Enterprise Platform metrics.
- **Test Type:** UI / Data
- **Priority:** High
- **Preconditions:** User is on the Enterprise Platform page.
- **Test Steps:**
  1. Locate the performance metrics section.
  2. Verify that implemented platform metrics are displayed correctly.
- **Test Data:** Verified Metrics: Uptime SLA (99.99%), Data Encryption (AES-256).
- **Expected Result:** Metrics are visible and match the verified engineering data in the implementation.

- **Test Case ID:** TC-05-02
- **Flow ID:** FL-05
- **Scenario:** Verify "REQUEST ACCESS" or equivalent CTA interaction.
- **Test Type:** Happy Path
- **Priority:** High
- **Preconditions:** User is on the Enterprise Platform page.
- **Test Steps:**
  1. Locate and click the primary platform CTA.
- **Test Data:** N/A
- **Expected Result:** The application initiates a relevant enquiry process or navigates to the contact form.

### FL-06: Global Navigation Integrity
- **Test Case ID:** TC-06-01
- **Flow ID:** FL-06
- **Scenario:** Verify Navbar link routing (Desktop).
- **Test Type:** Happy Path / Regression
- **Priority:** Critical
- **Preconditions:** User is on the Home page (Desktop viewport).
- **Test Steps:**
  1. Click primary links in the Navbar (e.g. About, Platform, Insights).
  2. Click the brand wordmark logo.
- **Test Data:** N/A
- **Expected Result:** Each link correctly routes to the intended page; clicking logo returns to Home.

- **Test Case ID:** TC-06-02
- **Flow ID:** FL-06
- **Scenario:** Verify Footer navigation links.
- **Test Type:** Happy Path
- **Priority:** Medium
- **Preconditions:** User scrolls to the footer of any page.
- **Test Steps:**
  1. Click on implemented links within the footer navigation sections (e.g. "Our Story" or "Careers").
- **Test Data:** N/A
- **Expected Result:** The application navigates to the correct corresponding route.

### FL-07: Mobile / Responsive Navigation
- **Test Case ID:** TC-07-01
- **Flow ID:** FL-07
- **Scenario:** Verify mobile menu toggle and overlay.
- **Test Type:** Responsive / Happy Path
- **Priority:** Critical
- **Preconditions:** Mobile viewport width (<1024px).
- **Test Steps:**
  1. Tap the Menu trigger icon.
  2. Observe the navigation overlay.
  3. Tap the close icon.
- **Test Data:** N/A
- **Expected Result:** Menu opens an overlay with primary links; tapping close removes the overlay.

- **Test Case ID:** TC-07-02
- **Flow ID:** FL-07
- **Scenario:** Verify responsive layout of core content on Tablet.
- **Test Type:** Responsive
- **Priority:** Medium
- **Preconditions:** Tablet viewport width.
- **Test Steps:**
  1. Navigate to various pages (Home, Services).
  2. Observe the layout of grids and cards.
- **Test Data:** N/A
- **Expected Result:** Layout adjusts to maintain legibility without horizontal scrolling as per implementation.

### FL-08: Branding & Visual Consistency
- **Test Case ID:** TC-08-01
- **Flow ID:** FL-08
- **Scenario:** Verify primary brand color usage.
- **Test Type:** UI / Branding
- **Priority:** High
- **Preconditions:** Access any page.
- **Test Steps:**
  1. Verify background and primary action elements use brand colors (Graphite and Signal Red).
- **Test Data:** N/A
- **Expected Result:** Visual elements adhere to the defined brand color tokens in the current implementation.

- **Test Case ID:** TC-08-02
- **Flow ID:** FL-08
- **Scenario:** Verify UI component consistency.
- **Test Type:** UI / Branding
- **Priority:** High
- **Preconditions:** View primary buttons and cards.
- **Test Steps:**
  1. Inspect corner rounding and border styles across various components.
- **Test Data:** N/A
- **Expected Result:** Elements maintain a consistent visual style as per design specifications (e.g., ROUND_FOUR).

### FL-09: Proof of Impact
- **Test Case ID:** TC-09-01
- **Flow ID:** FL-09
- **Scenario:** Verify case study success metric display.
- **Test Type:** UI / Data
- **Priority:** High
- **Preconditions:** User is on the Case Studies page.
- **Test Steps:**
  1. Observe success metrics on implemented case study cards.
- **Test Data:** Verified Case: "Automated Precision for Enterprise Finance" (90% Failure Reduction).
- **Expected Result:** Cards accurately display verified impact statistics from the implementation.

- **Test Case ID:** TC-09-02
- **Flow ID:** FL-09
- **Scenario:** Verify consultation link from Case Studies.
- **Test Type:** Happy Path
- **Priority:** High
- **Preconditions:** User is on the Case Studies page.
- **Test Steps:**
  1. Click the consultation CTA button (e.g. SCHEDULE CONSULTATION).
- **Test Data:** N/A
- **Expected Result:** The application navigates to the `/contact` route.

### FL-10: Thought Leadership
- **Test Case ID:** TC-10-01
- **Flow ID:** FL-10
- **Scenario:** Verify Insights sidebar content discovery.
- **Test Type:** UI
- **Priority:** Medium
- **Preconditions:** User is on the Insights page.
- **Test Steps:**
  1. Locate the search input field and trending topics section in the sidebar.
  2. Verify placeholders and tags.
- **Test Data:** Search Placeholder: "SEARCH INSIGHTS...".
- **Expected Result:** Content discovery elements are present with correct labels and verified trending tags as per implementation.

- **Test Case ID:** TC-10-02
- **Flow ID:** FL-10
- **Scenario:** Verify Insights interaction elements.
- **Test Type:** Happy Path / UI
- **Priority:** Medium
- **Preconditions:** User is on the Insights page.
- **Test Steps:**
  1. Observe any implemented newsletter signup form or tag filtering mechanism.
- **Test Data:** N/A
- **Expected Result:** Available interaction elements are visible and follow branding standards; functionality to be confirmed against implementation.

### FL-11: About / Mission Review
- **Test Case ID:** TC-11-01
- **Flow ID:** FL-11
- **Scenario:** Verify mission text and inception year.
- **Test Type:** UI / Data
- **Priority:** Medium
- **Preconditions:** User is on the About page.
- **Test Steps:**
  1. Read narrative text mentioning the company inception.
- **Test Data:** Year: 2007.
- **Expected Result:** Text identifies the company history correctly as per implementation.

- **Test Case ID:** TC-11-02
- **Flow ID:** FL-11
- **Scenario:** Verify physical office details.
- **Test Type:** UI / Data
- **Priority:** Medium
- **Preconditions:** Access Contact page or scroll to Footer.
- **Test Steps:**
  1. Locate office address details.
- **Test Data:** Johannesburg, Mauritius.
- **Expected Result:** Office details for confirmed locations are displayed correctly in the implementation.
