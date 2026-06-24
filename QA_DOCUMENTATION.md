# Rubric Website – Critical Flows, User Stories, Acceptance Criteria & Test Cases

**Project Name:** Rubric Website Redesign
**Source:** Repository Analysis (React) & Stitch Prototype (Project ID: 15142750776367027933)
**Application Type:** Corporate Technology Consulting / Software Quality Engineering (SQE) Website
**Note:** Xray/Jira test issues are currently unavailable for this project phase; therefore, all critical flow test cases are documented within this master document for manual verification and QA tracking.

---

## 1. Overview
This document analyses the critical user flows of the Rubric website redesign. It serves as the primary QA reference for ensuring that the implemented React application aligns with the business goals defined in the BRD and the visual precision established in the "Premium Refresh" Stitch prototype.

The document provides:
*   User stories for core personas.
*   Acceptance criteria in Given/When/Then format.
*   Manual test cases for functional and UI verification.
*   QA notes for cross-platform consistency.
*   Documented risks and open questions for stakeholder review.

---

## 2. Scope

### In Scope
*   Primary navigation routes and page consistency (Home, About, Services, Careers, Contact, Partners, Insights, Case Studies, Enterprise Platform).
*   Lead generation flow via the professional contact form.
*   Global branding adherence (Graphite/Signal Red palette, Hanken Grotesk typography, JetBrains Mono technical labels).
*   Responsive behavior across Desktop, Tablet, and Mobile devices.
*   Internal link integrity within the header and footer.

### Out of Scope
*   Backend API processing of contact form data (UI/Frontend validation only).
*   Candidate application portal or assessment platform functionality.
*   Live CMS management for Insights/Blog (static content verification only).

---

## 3. Critical Flows Summary

| Flow ID | Critical Flow | Source | Business Goal | Priority |
| :--- | :--- | :--- | :--- | :--- |
| **CF-01** | Service Discovery & Navigation | Present in both | Enable enterprise stakeholders to explore SQE and Consulting offerings. | P1 |
| **CF-02** | Lead Generation (Contact Form) | Present in both | Capture high-value consulting inquiries via validated inquiry forms. | P1 |
| **CF-03** | Careers Exploration | Present in both | Attract high-end engineering talent by showcasing culture and the "journey". | P2 |
| **CF-04** | Company Information Review | Present in both | Establish credibility through "About" and "Partner" ecosystem visibility. | P2 |
| **CF-05** | Header & Footer Navigation | Present in both | Ensure 100% reachability of all site sections from any page. | P1 |
| **CF-06** | Mobile / Responsive Layout | Present in both | Maintain architectural integrity on small screens and mobile devices. | P2 |
| **CF-07** | Branding & Visual Consistency | Present in both | Validate strict adherence to "Premium Refresh" style and precision. | P1 |

---

## 4. Detailed Critical Flows

### CF-01: Service Discovery & Navigation
**User Story:**
As a Corporate Decision Maker,
I want to navigate through Rubric’s service tiers (QA, Dev, ITSM, Consulting),
so that I can identify the specific engineering solutions required for my organization.

**Acceptance Criteria:**
| AC ID | Given / When / Then |
| :--- | :--- |
| AC-1.1 | **Given** I am on the Homepage, **When** I scroll to the Services bento-grid or click "Services" in the Navbar, **Then** I should see distinct cards for QA Consulting, Test Automation, and ITSM Strategy. |
| AC-1.2 | **Given** I am viewing a service card, **When** I click the primary action button (e.g., "INITIATE STRATEGY" or "KNOW MORE"), **Then** I should be redirected to the Contact page. |

**Test Cases:**
| Test Case ID | Scenario | Type | Priority | Action | Expected Result |
| :--- | :--- | :--- | :--- | :--- | :--- |
| TC-1.1 | Navbar Link Functionality | Happy Path | P1 | Click "Services" in the Top Navbar. | URL updates to `/services` and page loads correctly. |
| TC-1.2 | Service Card UI Hover | UI | P3 | Hover over the "Engineering" (Dev) card. | Card scales slightly and the departmental color accent highlights. |

---

### CF-02: Contact Enquiry / Lead Generation
**User Story:**
As a potential Enterprise Partner,
I want to submit a detailed inquiry regarding our SQE needs,
so that I can be contacted by a Rubric technical consultant.

**Acceptance Criteria:**
| AC ID | Given / When / Then |
| :--- | :--- |
| AC-2.1 | **Given** I am on the Contact page, **When** I fill in required fields (First Name, Last Name, Professional Email, Department) and click "SEND MESSAGE", **Then** the form should perform frontend validation. |
| AC-2.2 | **Given** an invalid email format is provided, **When** I attempt to submit, **Then** the system must display a validation message and prevent submission. |

**Test Cases:**
| Test Case ID | Scenario | Type | Priority | Action | Test Data | Expected Result |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| TC-2.1 | Valid Lead Submission | Happy Path | P1 | Fill all fields and click Submit. | "James", "james@enterprise.com" | Validation passes; success state triggered. |
| TC-2.2 | Email Validation | Validation | P2 | Enter email without "@". | "invalid_email" | Error: "Please enter a professional email". |
| TC-2.3 | Department Selection | Happy Path | P2 | Select "QA" from dropdown. | Dropdown Selection | Selection is captured correctly in the form state. |

---

### CF-07: Branding and Visual Consistency
**User Story:**
As a Rubric Brand Manager,
I want all pages to strictly adhere to the "Premium Refresh" design tokens,
so that the visual identity remains consistent with our high-end consulting status.

**Acceptance Criteria:**
| AC ID | Given / When / Then |
| :--- | :--- |
| AC-7.1 | **Given** any page load, **Then** the primary typeface must be 'Hanken Grotesk' for body and headlines. |
| AC-7.2 | **Given** the global header or footer, **Then** the Rubric lowercase wordmark and geometric 'R' icon must be present. |

**Test Cases:**
| Test Case ID | Scenario | Type | Priority | Action | Expected Result |
| :--- | :--- | :--- | :--- | :--- | :--- |
| TC-7.1 | Primary Color Audit | UI | P1 | Check primary CTA button hex code. | Background should be `#E53935` (Signal Red). |
| TC-7.2 | Background Color Check | UI | P2 | Verify background hex code on Home Hero. | Background should be `#F9F9F9` or `#1E2126` (Graphite). |

---

## 5. QA / Test Notes

*   **Browser Testing:** All flows must be validated on Chrome, Firefox, and Safari.
*   **Responsive Behavior:** The 12-column grid must collapse to 8-columns on Tablet and 4-columns on Mobile. Verify that headlines scale appropriately using the `headline-lg-mobile` tokens.
*   **Logo Visibility:** Ensure the logo in the Footer is the inverted (white) version to maintain contrast against the Graphite background.
*   **Navigation Consistency:** The "Sticky" Navbar must remain functional during scroll without obscuring anchor content.
*   **Accessibility:** All form inputs must have associated labels and focus states (Signal Red bottom border on focus).
*   **Content Accuracy:** Ensure that the "15+ Enterprise Partners" and "Established in 2007" copy (from historical context) is accurate across Home and About pages.

---

## 6. Dependencies

*   **Final Content Approval:** Specific service descriptions and "About Us" historical copy must be signed off by the Rubric executive team.
*   **Contact Details:** Final office addresses and phone numbers for Johannesburg and Mauritius must be confirmed.
*   **Stitch Prototype Sync:** Any changes to the "Premium Refresh" project in Stitch must be manually reviewed for sync with the React implementation.
*   **Hosting Environment:** Verification depends on a stable deployment/preview environment.

---

## 7. Risks

*   **Form Integration:** The contact form currently only validates on the frontend; actual lead delivery depends on a future CRM or SMTP integration.
*   **Design Drift:** Complexity of the bento-grid and overlapping layouts may lead to mobile responsiveness issues if not strictly audited.
*   **Asset Performance:** High-quality imagery must be optimized to maintain performance requirements.
*   **Route Integrity:** Internal links in the Footer (e.g., Singapore, Amsterdam) currently act as placeholders and must be mapped to final routes if implemented.

---

## 8. Open Questions

1.  **Lead Routing:** Should the contact form submit via a central email API or integrate directly with a CRM like HubSpot?
2.  **Careers Flow:** Does the "START YOUR JOURNEY" button on the Careers page link to an external platform or a local application form?
3.  **Service Drill-down:** Are there planned sub-pages for individual services (e.g., `/services/qa`) or will all descriptions reside on the main `/services` page?
4.  **Content Management:** How will the "Insights" (Blog) content be updated? (Static JSON, Headless CMS, or Markdown files).

---

## 9. Final Note
This document was generated by analyzing the Rubric Website Redesign repository (React code), the Stitch prototype "Premium Refresh" designs (Project ID: 15142750776367027933), and the project BRD. It serves as the baseline for Phase 1 QA activities.

**Document Status:** Final Draft for Review
**Date:** June 2024
**Author:** Jules (AI Engineer)

---
