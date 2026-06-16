# Business Requirements Document: Rubric Website Redesign

## 1. Document Information
- **Project Name:** Rubric Website Redesign
- **Repository:** Dharveen/RubricNewInstance
- **Reference Site:** [https://rubric.co.za/](https://rubric.co.za/)
- **Implementation Tool:** Google Jules (AI-assisted)
- **Design Tool:** Stitch (UI/UX exploration as required)

## 2. Background
Rubric is a technology consulting and software quality engineering (SQE) company. The existing website is being redesigned end-to-end to align with a newly developed brand identity that emphasizes structure, transformation, and measurable impact.

## 3. Business Objectives
- Redesign the Rubric website to be modern, premium, professional, and structured.
- Establish a strong visual alignment with the new brand identity.
- Clearly position Rubric as a leader in technology consulting and software quality engineering.
- Improve user engagement and lead generation through a streamlined digital experience.

## 4. Project Scope
### In Scope
- End-to-end redesign of the Rubric website.
- Implementation of the new brand identity and color system.
- Development of core pages: Home, About, Services (and sub-sections), Careers, and Contact.
- Responsive design for desktop, tablet, and mobile.
- Integration of brand assets provided in the repository.

### Out of Scope
- Backend ERP or internal system integrations.
- Creation of marketing video content.
- Third-party recruitment platform development (integration only).

## 5. Stakeholders
- **Client Stakeholders:** Rubric Executive Team
- **Project Lead:** Dharveen
- **Implementation Engineer:** Google Jules (AI)
- **Quality Assurance:** Rubric SQE Team

## 6. Current State
The current website ([rubric.co.za](https://rubric.co.za/)) does not reflect the new "Rubric" brand identity. The layout and design language are outdated and do not fully represent the company's premium positioning in the software quality engineering space.

## 7. Future State
A high-performance, visually striking website that utilizes a professional palette of Graphite and Signal Red. The site will feature a structured layout that guides users through Rubric's specialized services, showcasing their expertise in QA, DEV, and Consulting.

## 8. Brand Requirements
### Brand Identity
- **Keywords:** Structure, Transformation, Measurable Impact.
- **Tone:** Professional, Premium, Tech-forward.

### Color System
- **Graphite:** #1E2126 (Primary Background/Text)
- **Signal Red:** #E53935 (Primary Accent/Brand Color)
- **Slate:** #687280
- **Fog:** #F2F2F2
- **White:** #FFFFFF

### Service-Specific Colors
- **QA:** #E53935
- **ITSM:** #FFB020
- **DEV:** #2563EB
- **Consulting:** #7C3AED
- **Training:** #14B8A6

### Assets
- `rubric-logo-primary.png`
- `rubric-logo-variations.png`
- `rubric-brand-construction.png`

## 9. Website Pages and Requirements
- **Home:** High-impact hero section with the primary logo, clear value proposition, and navigation to key services.
- **About:** Overview of Rubric’s mission, history, and commitment to software excellence.
- **Services:** Landing page summarizing core offerings.
- **Service Sections:** Dedicated details for QA, ITSM, DEV, Consulting, and Training.
- **Careers:** Showcase company culture and current opportunities.
- **Contact:** Modern contact form with office locations and contact details.

## 10. Functional Requirements
- **FR1:** Responsive navigation menu across all devices.
- **FR2:** Interactive service cards highlighting specific domains.
- **FR3:** Functional contact form with validation.
- **FR4:** Fast-loading imagery and optimized brand assets.

## 11. Non-Functional Requirements
- **Performance:** Site should achieve a Google PageSpeed score of 90+ on desktop.
- **Security:** Implementation of HTTPS and secure form handling.
- **Maintainability:** Codebase should be clean and documented for future updates.

## 12. SEO Requirements
- Metadata (Title tags, descriptions) optimized for "Software Quality Engineering" and "Technology Consulting."
- Semantic HTML structure.
- XML Sitemap and Robots.txt configuration.

## 13. Accessibility Requirements
- Compliance with WCAG 2.1 Level AA standards.
- Sufficient color contrast ratios (especially with Graphite and Signal Red).
- Keyboard navigability and screen reader support.

## 14. Assumptions
- All brand assets provided are final and high-resolution.
- Technical environment (GitHub/Jules) remains stable for the duration of development.

## 15. Risks and Mitigations
- **Risk:** Jules taking longer than expected for complex layouts.
- **Mitigation:** Modular development and frequent progress reviews.
- **Risk:** GitHub authentication issues.
- **Mitigation:** Pre-configured SSH/PAT access managed by the user.

## 16. Success Criteria
- Website reflects the new brand identity perfectly.
- Positive feedback from internal stakeholders.
- Seamless performance across all major browsers.

## 17. Implementation Phases
- **Phase 1:** Asset organization and foundational layout (Current).
- **Phase 2:** Core page development (Home, About).
- **Phase 3:** Service sections and content integration.
- **Phase 4:** Careers, Contact, and Functional testing.
- **Phase 5:** SEO, Accessibility audit, and Launch.

## 18. Acceptance Criteria
- Site must use the specified #1E2126 and #E53935 as primary colors.
- All functional requirements (FR1-FR4) must be met.
- No unrelated assessment or education content is present.

## 19. Approval Section
- **Approved By:** ____________________
- **Date:** ____________________

---

## Progress and Blockers
### Current Progress Achieved:
- GitHub repository created.
- Brand assets added and pushed to the `assets/` directory.
- Repository successfully connected to Google Jules.
- Old website reference provided.
- Redesign plan generated, reviewed, expanded, and approved.
- Phase 1 initiated.
- Initial BRD created as separate reference.

### Blockers Encountered:
- GitHub authentication issue occurred during the initial push.
- Jules implementation speed was slower than expected in initial stages.
- Jules appeared stuck during Phase 1 asset organization/layout tasks.
