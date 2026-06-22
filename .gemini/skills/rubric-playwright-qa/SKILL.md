# Skill: rubric-playwright-qa

## Metadata

* **name**: rubric-playwright-qa
* **description**: Use this skill when working on Playwright E2E automation, form validation tests, responsive checks, navigation tests, branding checks, QA automation, user stories, acceptance criteria, manual test cases, Jira/Xray-ready test cases, or QA documentation for the Rubric Website Redesign.
* **invocation**: Use the rubric-playwright-qa skill.
* **activation_keywords**:
    * Playwright
    * E2E automation
    * Contact form validation
    * Careers form validation
    * responsive testing
    * navigation testing
    * branding checks
    * QA automation
    * user stories
    * acceptance criteria
    * manual test cases
    * QA documentation
    * Jira test cases
    * Xray test cases

## Example Invocations

* Use the rubric-playwright-qa skill. Generate user stories for FL-03 Strategic Inquiry and FL-04 Talent Acquisition.
* Use the rubric-playwright-qa skill. Update Contact form validation tests.
* Use the rubric-playwright-qa skill. Generate manual test cases for FL-01 to FL-11.
* Use the rubric-playwright-qa skill. Fix failing Playwright E2E tests without changing the UI design.

## Project Context
* **Tech Stack**: React, TypeScript, Vite, Tailwind CSS, Playwright.
* **Website Routes**:
    * `/ ` (Home)
    * `/about`
    * `/services`
    * `/platform`
    * `/case-studies`
    * `/insights`
    * `/careers`
    * `/contact`
* **Source of Truth**: Refer to `docs/rubric-critical-flows-user-stories-acceptance-criteria.md` for approved flows, user stories, acceptance criteria, and manual test cases.

## Automation Rules
* **Tooling**: Use Playwright with TypeScript.
* **Locators**:
    * Prefer `getByRole`, `getByLabel`, `getByText`, `getByPlaceholder`, and `getByTestId`.
    * Avoid fragile CSS selectors where possible.
    * Use `data-testid` only when semantic locators are not reliable.
* **Testing Scope**:
    * Do not test backend/API submission unless explicitly implemented.
    * Add comments for pending backend behavior.
    * Use `test.fixme()` only if the UI feature itself is not implemented or cannot currently be tested.
    * Do not depend on browser autofill popups.
    * Do not add external service dependencies.
    * Do not make pixel-perfect visual tests.
* **Structure**:
    * Keep tests grouped by page or major flow in separate spec files (e.g., `contact.spec.ts`, `careers.spec.ts`, `navigation.spec.ts`, `responsive.spec.ts`).
    * If existing tests use fragile selectors, refactor them only when that specific file/test is touched.

## Rubric Critical Flows
* **FL-01**: Hero Conversion
* **FL-02**: Service Exploration
* **FL-03**: Strategic Inquiry
* **FL-04**: Talent Acquisition
* **FL-05**: Platform Validation
* **FL-06**: Global Navigation Integrity
* **FL-07**: Mobile / Responsive Navigation
* **FL-08**: Branding & Visual Consistency
* **FL-09**: Proof of Impact
* **FL-10**: Thought Leadership
* **FL-11**: About / Mission Review

## User Story & QA Documentation Rules

Use this section when asked to create or update user stories, acceptance criteria, manual test cases, or QA documentation for the Rubric Website Redesign.

### User Story Rules

When generating user stories:

* Act as a Business Analyst and Software Quality Engineer.
* Use the format:
  `As a [user type], I want to [goal], so that [business value].`
* Base user stories only on:

  * Current React implementation
  * Approved website routes
  * Existing Rubric documentation
  * Stitch prototype screens
  * `docs/rubric-critical-flows-user-stories-acceptance-criteria.md`
* Do not invent pages, buttons, forms, fields, metrics, filters, backend behavior, or integrations.
* If something is not confirmed, mark it as:
  `To be confirmed against implementation`.
* Link each user story to the correct critical flow ID.

### Approved User Story Flows

* FL-01 Hero Conversion
* FL-02 Service Exploration
* FL-03 Strategic Inquiry
* FL-04 Talent Acquisition
* FL-05 Platform Validation
* FL-06 Global Navigation Integrity
* FL-07 Mobile / Responsive Navigation
* FL-08 Branding & Visual Consistency
* FL-09 Proof of Impact
* FL-10 Thought Leadership
* FL-11 About / Mission Review

### Acceptance Criteria Rules

When generating acceptance criteria:

* Use strict Given/When/Then format.
* Make each criterion testable.
* Avoid vague wording such as:

  * user-friendly
  * intuitive
  * clearly displayed
  * functional
* Do not include unconfirmed features.
* Each acceptance criterion must map back to a user story and critical flow.

### Manual Test Case Rules

When generating manual test cases:

* Include:

  * Test Case ID
  * Flow ID
  * Scenario
  * Test Type
  * Priority
  * Preconditions
  * Test Steps
  * Test Data
  * Expected Result
* Include happy path, negative, validation, UI, responsive, regression, navigation, and branding checks where applicable.
* Keep backend/API submission as pending unless implemented.

### Jira/Xray Rules

When preparing Jira or Xray-ready test cases:

* Maintain traceability between:

  * Critical Flow
  * User Story
  * Acceptance Criteria
  * Test Case
* Do not create Jira/Xray integration unless explicitly requested.
* Keep the output suitable for manual Jira/Xray entry if direct integration is unavailable.

## Form Testing Rules

### Contact Form
* **Fields**: First Name, Last Name, Professional Email, Inquiry Department, Message/Requirements.
* **Validation**:
    * Verify mandatory field validation.
    * Verify invalid email validation.
    * Verify valid input can be entered.
* **Inquiry Department Options**:
    * Quality Assurance (QA)
    * Software Development (DEV)
    * IT Service Management (ITSM)
    * Strategic Consulting
    * Corporate Training

### Careers Form
* **Fields**: Application form sections (Job Interested, Personal Details, Contact Details, Qualifications, CV Upload).
* **Validation**:
    * Verify application form visibility.
    * Verify mandatory field validation.
    * Verify invalid email validation.
    * Verify CV upload validation if implemented.
    * Verify valid input can be entered.

## Reporting & Execution
* **Reporting**:
    * Keep Playwright HTML report enabled.
    * Keep screenshots/videos/traces for failures where configured in `playwright.config.ts`.
    * Do not add Xray integration unless explicitly requested.
* **Commands**:
    * `npm run test:e2e`
    * `npm run test:e2e:headed`
    * `npm run test:e2e:ui`
    * `npm run test:e2e:report`
    * `npm run test:e2e:junit`
    * `npx playwright test tests/e2e/contact.spec.ts --headed`
    * `npx playwright test tests/e2e/careers.spec.ts --headed`

## Review & Quality Rules
* **Implementation Check**: Before changing or adding tests, inspect the current page implementation (JSX/TSX).
* **No Inventions**: Do not invent UI text, buttons, fields, or metrics.
* **Clarification**: If UI elements or behaviors are unclear, mark the test as "To be confirmed against implementation".
* **Focus**: Keep changes small, focused, and aligned with the Rubric brand identity.
* **Documentation**: Provide a PR summary listing files changed and tests updated.
