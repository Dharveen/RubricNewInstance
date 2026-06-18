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
    *   **AC 1:** Given the user is on the Home page, the specialized domains section must display interactive cards for the core SQE pillars.
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
- **Scenario:** Verify primary "CONTACT US" CTA navigation.
- **Test Type:** Happy Path
- **Priority:** Critical
- **Preconditions:** User is on the Home page.
- **Test Steps:**
  1. Navigate to the Home page.
  2. Locate the primary "CONTACT US" button in the Hero section.
  3. Click the button.
- **Test Data:** N/A
- **Expected Result:** The application navigates to the `/contact` route and the Contact page is rendered.

- **Test Case ID:** TC-01-02
- **Flow ID:** FL-01
- **Scenario:** Verify Hero tagline branding and typography.
- **Test Type:** UI / Branding
- **Priority:** High
- **Preconditions:** User is on the Home page.
- **Test Steps:**
  1. Observe the Hero section main headline.
  2. Verify the text matches the tagline: "Structured quality. Measurable digital impact."
  3. Verify font family is Hanken Grotesk.
- **Test Data:** N/A
- **Expected Result:** Tagline matches requirements and branding font is applied correctly.

### FL-02: Service Exploration
- **Test Case ID:** TC-02-01
- **Flow ID:** FL-02
- **Scenario:** Verify Bento Grid card interactivity on Desktop.
- **Test Type:** Happy Path / UI
- **Priority:** High
- **Preconditions:** User is on the Home page.
- **Test Steps:**
  1. Scroll to the "Specialised Department Domains" section.
  2. Hover over any domain card (e.g., QA, ITSM).
- **Test Data:** N/A
- **Expected Result:** Card displays a visual hover effect (e.g., scale or shadow) to indicate interactivity.

- **Test Case ID:** TC-02-02
- **Flow ID:** FL-02
- **Scenario:** Verify "SERVICES" secondary CTA navigation.
- **Test Type:** Happy Path
- **Priority:** High
- **Preconditions:** User is on the Home page.
- **Test Steps:**
  1. Locate the "SERVICES" button in the Hero section.
  2. Click the button.
- **Test Data:** N/A
- **Expected Result:** The application navigates to the `/services` route.

### FL-03: Strategic Inquiry
- **Test Case ID:** TC-03-01
- **Flow ID:** FL-03
- **Scenario:** Verify successful population of the Contact form.
- **Test Type:** Happy Path
- **Priority:** Critical
- **Preconditions:** User is on the Contact page.
- **Test Steps:**
  1. Enter values for First Name, Last Name, and Professional Email.
  2. Select "Software Development (DEV)" from the Inquiry Department dropdown.
  3. Enter text in the message field.
  4. Click "SEND MESSAGE".
- **Test Data:** Name: "John Doe", Email: "john.doe@enterprise.com".
- **Expected Result:** Form inputs are accepted. (Actual backend submission logic: To be confirmed).

- **Test Case ID:** TC-03-02
- **Flow ID:** FL-03
- **Scenario:** Verify form validation for missing mandatory email.
- **Test Type:** Validation / Negative
- **Priority:** High
- **Preconditions:** User is on the Contact page.
- **Test Steps:**
  1. Leave the "Professional Email" field empty.
  2. Fill in all other required fields.
  3. Click "SEND MESSAGE".
- **Test Data:** N/A
- **Expected Result:** Form prevents submission and displays a validation alert/message for the Email field.

### FL-04: Talent Acquisition
- **Test Case ID:** TC-04-01
- **Flow ID:** FL-04
- **Scenario:** Verify department filter on Careers page.
- **Test Type:** Happy Path / Validation
- **Priority:** Medium
- **Preconditions:** User is on the Careers page.
- **Test Steps:**
  1. Scroll down to the "Current Openings" section.
  2. Select "Engineering" from the department dropdown.
- **Test Data:** N/A
- **Expected Result:** The list of roles updates to display only engineering-related positions.

- **Test Case ID:** TC-04-02
- **Flow ID:** FL-04
- **Scenario:** Verify speculative inquiry initiation.
- **Test Type:** Happy Path
- **Priority:** Medium
- **Preconditions:** User is on the Careers page.
- **Test Steps:**
  1. Locate and click the "SEND SPECULATIVE CV" button.
- **Test Data:** N/A
- **Expected Result:** Button initiates a mailto action to careers@rubric.co.za or navigates to a designated form (Implementation pending).

### FL-05: Platform Validation
- **Test Case ID:** TC-05-01
- **Flow ID:** FL-05
- **Scenario:** Verify display of Enterprise Platform metrics.
- **Test Type:** UI / Data
- **Priority:** High
- **Preconditions:** User is on the Enterprise Platform page.
- **Test Steps:**
  1. Locate the "Metrics Row".
  2. Verify values for Uptime SLA and Data Encryption.
- **Test Data:** N/A
- **Expected Result:** Metrics display "99.99%" and "AES-256" respectively, reflecting verified engineering data.

- **Test Case ID:** TC-05-02
- **Flow ID:** FL-05
- **Scenario:** Verify "REQUEST ACCESS" CTA interaction.
- **Test Type:** Happy Path
- **Priority:** High
- **Preconditions:** User is on the Enterprise Platform page.
- **Test Steps:**
  1. Click the "REQUEST ACCESS" button.
- **Test Data:** N/A
- **Expected Result:** The application triggers a relevant platform enquiry or navigates to the contact form.

### FL-06: Global Navigation Integrity
- **Test Case ID:** TC-06-01
- **Flow ID:** FL-06
- **Scenario:** Verify sticky Navbar behavior on scroll.
- **Test Type:** UI / Regression
- **Priority:** High
- **Preconditions:** Access any page with scrollable content (e.g., Services).
- **Test Steps:**
  1. Scroll down the page.
  2. Observe the Navbar position.
- **Test Data:** N/A
- **Expected Result:** The Navbar remains fixed at the top of the viewport.

- **Test Case ID:** TC-06-02
- **Flow ID:** FL-06
- **Scenario:** Verify Navbar link routing (Desktop).
- **Test Type:** Happy Path / Regression
- **Priority:** Critical
- **Preconditions:** User is on the Home page.
- **Test Steps:**
  1. Click the "Insights" link in the Navbar.
  2. Verify page load.
  3. Click the "rubric" wordmark logo.
- **Test Data:** N/A
- **Expected Result:** Browser navigates to Insights and then returns to the Home page.

### FL-07: Mobile / Responsive Navigation
- **Test Case ID:** TC-07-01
- **Flow ID:** FL-07
- **Scenario:** Verify mobile menu toggle and overlay display.
- **Test Type:** Responsive / Happy Path
- **Priority:** Critical
- **Preconditions:** Mobile viewport width (<768px).
- **Test Steps:**
  1. Tap the hamburger Menu icon.
  2. Observe the navigation overlay.
  3. Tap the "X" (close) icon.
- **Test Data:** N/A
- **Expected Result:** Menu opens a full-screen overlay with primary links; tapping close removes the overlay.

- **Test Case ID:** TC-07-02
- **Flow ID:** FL-07
- **Scenario:** Verify responsive layout of service cards on Tablet.
- **Test Type:** Responsive
- **Priority:** Medium
- **Preconditions:** Tablet viewport width (768px - 1024px).
- **Test Steps:**
  1. Navigate to the Home page.
  2. Observe the domain cards grid layout.
- **Test Data:** N/A
- **Expected Result:** Grid layout adjusts (e.g., from 5 to 2 or 3 columns) to maintain legibility without horizontal scrolling.

### FL-08: Branding & Visual Consistency
- **Test Case ID:** TC-08-01
- **Flow ID:** FL-08
- **Scenario:** Verify primary brand color usage across pages.
- **Test Type:** UI / Branding
- **Priority:** High
- **Preconditions:** Access Home, Services, and About pages.
- **Test Steps:**
  1. Verify background of Hero/Footer uses Graphite (#1E2126).
  2. Verify primary buttons use Signal Red (#E53935).
- **Test Data:** N/A
- **Expected Result:** Visual elements strictly adhere to the defined brand color tokens.

- **Test Case ID:** TC-08-02
- **Flow ID:** FL-08
- **Scenario:** Verify UI component rounding and border styles.
- **Test Type:** UI / Branding
- **Priority:** High
- **Preconditions:** View primary buttons and cards.
- **Test Steps:**
  1. Inspect the corner rounding of buttons and domain cards.
- **Test Data:** Specification: ROUND_FOUR.
- **Expected Result:** Elements maintain a consistent 4px/8px rounding as per the design system specification.

### FL-09: Proof of Impact
- **Test Case ID:** TC-09-01
- **Flow ID:** FL-09
- **Scenario:** Verify case study success metric accuracy.
- **Test Type:** UI / Data
- **Priority:** High
- **Preconditions:** User is on the Case Studies page.
- **Test Steps:**
  1. Locate the "Automated Precision for Enterprise Finance" card.
  2. Verify the impact metric displayed.
- **Test Data:** Metric: "90% Failure Reduction".
- **Expected Result:** Card accurately displays the verified SQE impact statistic.

- **Test Case ID:** TC-09-02
- **Flow ID:** FL-09
- **Scenario:** Verify consultation link from Case Studies page.
- **Test Type:** Happy Path
- **Priority:** High
- **Preconditions:** User is on the Case Studies page.
- **Test Steps:**
  1. Locate and click the "SCHEDULE CONSULTATION" button.
- **Test Data:** N/A
- **Expected Result:** The application navigates to the `/contact` route.

### FL-10: Thought Leadership
- **Test Case ID:** TC-10-01
- **Flow ID:** FL-10
- **Scenario:** Verify Insights search bar presence and placeholder.
- **Test Type:** UI
- **Priority:** Medium
- **Preconditions:** User is on the Insights page.
- **Test Steps:**
  1. Identify the search input field in the sidebar.
  2. Verify the placeholder text.
- **Test Data:** Placeholder: "SEARCH INSIGHTS...".
- **Expected Result:** Search bar is present with the correct placeholder string.

- **Test Case ID:** TC-10-02
- **Flow ID:** FL-10
- **Scenario:** Verify trending topics tag selection.
- **Test Type:** Happy Path / UI
- **Priority:** Medium
- **Preconditions:** User is on the Insights page.
- **Test Steps:**
  1. Observe the "Trending Topics" section in the sidebar.
  2. Verify tags like #QAAutomation and #ShiftLeft are visible.
- **Test Data:** N/A
- **Expected Result:** The tag list is rendered and clickable for filtering (Filtering logic: Implementation pending).

### FL-11: About / Mission Review
- **Test Case ID:** TC-11-01
- **Flow ID:** FL-11
- **Scenario:** Verify mission text and inception year.
- **Test Type:** UI / Data
- **Priority:** Medium
- **Preconditions:** User is on the About page.
- **Test Steps:**
  1. Read the Hero headline and secondary narrative.
- **Test Data:** Inception Year: 2007.
- **Expected Result:** Text correctly describes Rubric’s history and commitment to Software Quality Engineering since 2007.

- **Test Case ID:** TC-11-02
- **Flow ID:** FL-11
- **Scenario:** Verify Footer office locations.
- **Test Type:** UI / Happy Path
- **Priority:** Medium
- **Preconditions:** Scroll to the footer of any page.
- **Test Steps:**
  1. Identify physical office details for Johannesburg and Mauritius.
- **Test Data:** N/A
- **Expected Result:** Footer displays verified addresses for both Global HQ and Mauritius regional office.
