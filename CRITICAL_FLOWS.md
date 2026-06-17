# Rubric Website - Critical User Flows & Gherkin AC

This document outlines the primary user journeys identified within the Rubric website redesign, providing User Stories and Acceptance Criteria in Gherkin format for testing and development alignment.

---

## 1. Lead Generation: Service Discovery to Consultation
**User Story:**
As a potential enterprise client, I want to explore Rubric's specialized services so that I can understand how their engineering rigor can solve my business challenges and contact them for a consultation.

**Gherkin Acceptance Criteria:**
```gherkin
Feature: Lead Generation
  Scenario: Potential client navigates from services to contact
    Given I am on the Rubric Home page
    When I click the "SERVICES" button in the hero section
    Then I should be redirected to the /services page
    And I should see specialized service tiers like "Quality Assurance" and "IT Service Management"
    When I click the "SCHEDULE CONSULTATION" button at the bottom of the Services page
    Then I should be redirected to the /contact page
    And I should see the contact form with fields for "Professional Email" and "Inquiry Department"
```

## 2. Enterprise Platform Engagement
**User Story:**
As a CTO or Technical Lead, I want to evaluate the Rubric Enterprise Platform's architectural control features so that I can decide if it's suitable for our software delivery lifecycle.

**Gherkin Acceptance Criteria:**
```gherkin
Feature: Platform Engagement
  Scenario: Technical lead requests access to the enterprise platform
    Given I am on the Enterprise Platform page (/platform)
    Then I should see the "Architectural Control" headline
    And I should see technical metrics like "Uptime SLA (99.99%)" and "Data Encryption (AES-256)"
    When I click the "REQUEST ACCESS" button
    Then I should be navigated to the contact section or form
    And the "Inquiry Department" should ideally be selectable or relevant to platform access
```

## 3. Proof of Value: Case Study Exploration
**User Story:**
As a Procurement Manager, I want to review Rubric's past successes and impact metrics so that I can verify their track record before committing to a partnership.

**Gherkin Acceptance Criteria:**
```gherkin
Feature: Proof of Value
  Scenario: User explores case study impact metrics
    Given I am on the Case Studies page (/case-studies)
    When I scroll to the "Automated Precision for Enterprise Finance" case study
    Then I should see the impact metric "90% Failure Reduction"
    And I should see a "READ FULL STORY" link
    When I click the "READ FULL STORY" link
    Then I should be directed to the contact page to inquire about similar results
```

## 4. Talent Acquisition: Career Application
**User Story:**
As a Senior Engineer, I want to find open roles at Rubric and understand their "Elite Culture" so that I can apply to join their technical collective.

**Gherkin Acceptance Criteria:**
```gherkin
Feature: Talent Acquisition
  Scenario: Candidate views open roles and applies
    Given I am on the Careers page (/careers)
    Then I should see the "Rubric Academy" section describing growth by design
    When I scroll to the "Current Openings" section
    And I select "Engineering" from the department filter
    Then I should see roles like "Senior SQE Consultant"
    When I click the "SEND SPECULATIVE CV" button
    Then my default email client should open addressed to "careers@rubric.co.za"
```

## 5. Global Presence & Direct Contact
**User Story:**
As a local business partner, I want to find Rubric's physical office locations and direct contact details so that I can reach out to them via phone or visit their office.

**Gherkin Acceptance Criteria:**
```gherkin
Feature: Contact & Presence
  Scenario: Partner finds office location and contact details
    Given I am on the Contact page (/contact)
    Then I should see office details for "Johannesburg" and "Grand Baie"
    And I should see a physical address for "The District, 8 Arnold Rd, Rosebank"
    When I click on the phone number link for the South Africa office
    Then the system should initiate a phone call to "+27 11 000 0000"
    When I fill out the contact form and click "SEND MESSAGE"
    Then the system should validate the input and show a success confirmation (UI implementation pending)
```

## 6. Strategic Partnership Exploration
**User Story:**
As a technology provider, I want to understand Rubric's partnership ecosystem and alignment standards so that I can propose a strategic alliance.

**Gherkin Acceptance Criteria:**
```gherkin
Feature: Partnership Exploration
  Scenario: Tech provider explores partnership requirements
    Given I am on the Partners page (/partners)
    Then I should see the "Strategic Tech Grid"
    And I should see partnership pillars like "Deep Technical Integration" and "Compliance Alignment"
    When I click the "Partner with Rubric" button
    Then I should be redirected to a partnership inquiry form or email contact
```

## 7. Knowledge Discovery (Insights)
**User Story:**
As an industry peer, I want to read Rubric's technical insights and success stories so that I can stay updated on SQE and digital transformation trends.

**Gherkin Acceptance Criteria:**
```gherkin
Feature: Knowledge Discovery
  Scenario: User reads featured insights
    Given I am on the Insights page (/insights)
    Then I should see a list of technical articles and featured success stories
    When I click on a featured case study (e.g., "60% Reduction in Release Cycle Time")
    Then I should be redirected to the detailed Case Study page
```
