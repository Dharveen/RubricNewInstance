# Rubric Website Redesign - Critical User Flows & Gherkin AC

This document provides a verified mapping of user journeys based on the Stitch prototype designs and the current React implementation.

---

## 1. System Overview

### 1.1 Implemented React Routes (Source: src/App.tsx)
- `/`: Home Page
- `/about`: About Us
- `/services`: Specialized Services
- `/platform`: Enterprise Platform
- `/case-studies`: Proof Matrix / Case Studies
- `/insights`: Insights & Blog
- `/partners`: Strategic Ecosystem
- `/careers`: Career Collective
- `/contact`: Global Reach / Contact

### 1.2 Available Stitch Prototype Screens (Source: Stitch Project 15142750776367027933)
- **Homepage**: Rubric Consulting | Homepage
- **About**: About Us | Rubric Consulting
- **Services**: Our Services | Rubric Consulting
- **Platform**: Rubric Consulting Enterprise Platform
- **Case Studies**: Case Studies | Rubric Consulting
- **Insights**: Insights & Blog | Rubric Consulting
- **Partners**: Partners | Rubric Consulting
- **Careers**: Careers | Rubric Consulting
- **Contact**: Contact Us | Rubric Consulting
- **QA Specialized**: QA & Testing Assessments | Rubric Consulting

---

## 2. Critical User Flows

### 2.1 Flow: Enterprise Service Inquiry
**Source:** Present in both Stitch and React website

**User Story:**
As a potential client, I want to navigate from the home page to the services page and eventually contact Rubric so that I can inquire about their SQE services.

**Gherkin Acceptance Criteria:**
```gherkin
Feature: Enterprise Service Inquiry
  Scenario: Visitor navigates to Contact via Services
    Given I am on the Home page ("/")
    When I click on the "SERVICES" link in the Navbar
    Then I should be redirected to the Services page ("/services")
    And I should see the heading "Specialized Service Tiers"
    When I click the "SCHEDULE CONSULTATION" button
    Then I should be redirected to the Contact page ("/contact")
    And I should see the "Let's build better digital" headline
```

**QA Validation Notes:**
- Verify that the Navbar "Services" link correctly routes to `/services`.
- Verify that the "SCHEDULE CONSULTATION" button on the Services page correctly routes to `/contact`.

---

### 2.2 Flow: Technical Platform Evaluation
**Source:** Present in both Stitch and React website

**User Story:**
As a Technical Lead, I want to review the Enterprise Platform's technical metrics and request access so that I can evaluate its architectural control capabilities.

**Gherkin Acceptance Criteria:**
```gherkin
Feature: Platform Evaluation
  Scenario: Tech Lead reviews metrics and requests access
    Given I am on the Enterprise Platform page ("/platform")
    Then I should see metrics for "Uptime SLA", "Data Encryption", "Global Nodes", and "Support Cycle"
    And I should see the heading "Architectural Control."
    When I click the "REQUEST ACCESS" button
    Then a request action should be initiated (current implementation: button present)
```

**QA Validation Notes:**
- Verify the presence of the 4 key metrics (99.99%, AES-256, 12+, 24/7) on the `/platform` page.

---

### 2.3 Flow: Career Discovery & Application
**Source:** Present in both Stitch and React website

**User Story:**
As a Senior Engineer, I want to explore Rubric's culture and view open roles so that I can apply to join the collective.

**Gherkin Acceptance Criteria:**
```gherkin
Feature: Career Discovery
  Scenario: Candidate views culture and roles
    Given I am on the Careers page ("/careers")
    Then I should see the "Join the Collective." hero heading
    And I should see the "Rubric Academy" section
    When I scroll to the "Current Openings" section
    Then I should see job openings like "Senior SQE Consultant"
    When I click the "SEND SPECULATIVE CV" button
    Then a mailto link to "careers@rubric.co.za" should be triggered
```

---

### 2.4 Flow: Global Office Verification
**Source:** Present in both Stitch and React website

**User Story:**
As a business partner, I want to verify Rubric's physical presence in Johannesburg and Mauritius so that I can coordinate regional engagements.

**Gherkin Acceptance Criteria:**
```gherkin
Feature: Office Verification
  Scenario: Visitor checks office addresses
    Given I am on the Contact page ("/contact")
    Then I should see office details for "Johannesburg" (South Africa)
    And I should see office details for "Grand Baie" (Mauritius)
    And Johannesburg address should be "The District, 8 Arnold Rd, Rosebank"
```

---

### 2.5 Flow: Header Navigation & Branding
**Source:** Present in both Stitch and React website

**User Story:**
As a site visitor, I want to use the header navigation and see the brand logo so that I can easily move between pages and identify the company.

**Gherkin Acceptance Criteria:**
```gherkin
Feature: Header Navigation
  Scenario: Visitor uses navbar links and logo
    Given I am on any page
    Then I should see the Rubric logo in the Navbar
    When I click the Rubric logo
    Then I should be redirected to the Home page ("/")
    When I click "About" in the Navbar
    Then I should be redirected to the About page ("/about")
    When I click the "CONTACT" button in the Navbar
    Then I should be redirected to the Contact page ("/contact")
```

---

### 2.6 Flow: Mobile Navigation
**Source:** Present in both Stitch and React website

**User Story:**
As a mobile user, I want to use a mobile-friendly menu so that I can navigate the site on my smartphone.

**Gherkin Acceptance Criteria:**
```gherkin
Feature: Mobile Navigation
  Scenario: Visitor uses mobile menu
    Given I am on the Home page with a mobile viewport width
    Then I should see a menu toggle icon (hamburger)
    When I click the menu toggle icon
    Then I should see the mobile navigation overlay with links to "About", "Services", "Platform", etc.
    When I click "Services" in the mobile menu
    Then the menu should close and I should be redirected to the Services page ("/services")
```

---

### 2.7 Flow: Footer Exploration
**Source:** Present in both Stitch and React website

**User Story:**
As a site visitor, I want to use the footer links to find information about the company's social presence and legal details.

**Gherkin Acceptance Criteria:**
```gherkin
Feature: Footer Exploration
  Scenario: Visitor checks footer content
    Given I am at the bottom of any page
    Then I should see the Rubric logo in the Footer
    And I should see social links (LinkedIn, Twitter, GitHub)
    And I should see "Specialized Units" and "Core Navigation" columns
```

---

### 2.8 Flow: Brand Construction & About Page
**Source:** Present in both Stitch and React website

**User Story:**
As a potential partner, I want to read about the company's history and mission so that I can understand their values.

**Gherkin Acceptance Criteria:**
```gherkin
Feature: Company History
  Scenario: Visitor reads the About page
    Given I am on the About page ("/about")
    Then I should see the "Precision is our foundation." hero heading
    And I should see the "Established 2007" metric
    And I should see the "Global Vision" section
```

---

## 3. Prototype-only flows / Future implementation

### 3.1 Flow: Specialized QA Assessment Deep-Dive
**Source:** Available in Stitch prototype only (Screen: "QA & Testing Assessments")

**Description:**
The Stitch prototype includes a dedicated "QA & Testing Assessments" landing page with granular service breakdowns for "Test Strategy", "Automation Frameworks", and "Performance Engineering".

**User Story:**
As a QA Director, I want a dedicated page for SQE assessments so that I can deep-dive into Rubric's specific testing methodologies.

---

## 4. Gap Analysis: Stitch Design vs. Implemented Website

1.  **QA Specialized Page**: Stitch has a dedicated "QA & Testing Assessments" screen which is currently not a separate route in the React app. It is likely part of the broader `/services` page in the current implementation or planned for future rollout.
2.  **Navigation Interactions**: The Stitch prototype implies complex hover states for the "Impact Vector" (Signal Red diagonal line), while the React app has basic hover transitions.
3.  **Data Persistence**: The Contact form in React is visually complete but requires backend integration for the "SEND MESSAGE" action.
4.  **Case Study Filtering**: Stitch implies a filter bar for case studies by sector (Financial Services, etc.). This is visually present in React but might need functional refinement for dynamic filtering.
