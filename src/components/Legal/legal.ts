export type LegalPolicy = {
  id: string;
  title: string;
  lastUpdated: string;
  summary: string;
  markdown: string;
};

export const legalPolicies: LegalPolicy[] = [
  {
    id: "privacy-policy",
    title: "Privacy Policy",
    lastUpdated: "11/04/2026",
    summary: "How Excel Fire Ltd collects, uses and protects your personal data.",
    markdown: `Excel Fire Ltd is committed to protecting your personal data and handling it responsibly. This policy explains what we collect, how we use it, and the rights you have over your information.

### Who we are

Excel Fire Ltd is registered in England and Wales (company number 11776179). Our registered office is Swift House, Ground Floor, 18 Hoffmanns Way, Chelmsford, CM1 1GU. For any privacy query, contact info@excelfireltd.com.

### What we collect

- Your name, email address, phone number, and any information you submit through contact forms.
- Details of your enquiry, such as the property, service required and project timescales.
- Basic technical information, such as browser type and pages viewed.

### How we use your information

- To respond to enquiries and provide passive fire protection services.
- To manage quotations, project discussions, and customer support.
- To improve website performance and user experience.

### Lawful basis

We process enquiry data on the basis of legitimate interests and, where you become a client, the performance of a contract. Where consent is required (for example, non-essential cookies), we ask for it separately.

### Data sharing

We do not sell your personal data. We only share information with trusted providers where necessary to operate our business or comply with legal obligations.

### Data retention

We keep personal data only for as long as needed for operational, legal, and contractual purposes.

### Your rights

You may request access, correction, or deletion of your personal data by contacting us at info@excelfireltd.com. You also have the right to object to processing, request restriction, and lodge a complaint with the Information Commissioner's Office (ico.org.uk).
`,
  },
  {
    id: "cookie-policy",
    title: "Cookie Policy",
    lastUpdated: "11/04/2026",
    summary: "The cookies this website uses and how you can manage them.",
    markdown: `This site uses cookies to ensure the website functions correctly and to understand usage trends.

### What cookies are used

- Essential cookies required for core site functionality, including remembering your cookie preferences and theme choice.
- Analytics cookies that help us measure website usage and performance. These are only set with your consent.

### How we use cookies

- To maintain secure, reliable website operation.
- To review anonymised traffic data and improve content and services.

### Managing cookies

You can accept or decline non-essential cookies using the banner shown on your first visit. You can also manage or disable cookies through your browser settings at any time. Disabling some cookies may affect parts of the website functionality.

For questions about cookies or personal data, please contact info@excelfireltd.com.
`,
  },
  {
    id: "terms-and-conditions",
    title: "Terms & Conditions",
    lastUpdated: "11/04/2026",
    summary: "The terms that apply to your use of this website.",
    markdown: `These terms and conditions govern your use of the Excel Fire Ltd website at excelfireltd.com.

### Use of this website

The content of this website is provided for general information about Excel Fire Ltd and our services. It does not constitute professional advice for any specific building or project. You should always obtain a formal survey or assessment before relying on any information for compliance decisions.

### Accuracy of information

We take care to keep the information on this website accurate and up to date, but we make no warranties as to its completeness or accuracy. Regulations and standards referenced on this site may change; the current legislation always takes precedence.

### Intellectual property

All content on this website, including text, imagery and branding, is the property of Excel Fire Ltd or its licensors and may not be reproduced without permission.

### Quotations and services

Any services described on this website are subject to a formal written quotation and our standard terms of business, which are provided at the point of engagement.

### Liability

To the fullest extent permitted by law, Excel Fire Ltd accepts no liability for any loss or damage arising from reliance on the content of this website.

### Company information

Excel Fire Limited is registered in England and Wales, company number 11776179, VAT number 313466910. Registered office: Swift House, Ground Floor, 18 Hoffmanns Way, Chelmsford, CM1 1GU.

### Contact

For any questions about these terms, contact info@excelfireltd.com or call 0203 302 9558.
`,
  },
];

export function getPolicy(id: string): LegalPolicy | undefined {
  return legalPolicies.find((policy) => policy.id === id);
}
