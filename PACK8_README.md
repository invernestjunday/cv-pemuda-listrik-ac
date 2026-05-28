# Pack 8 Overlay — Interaction, Accessibility & Tracking

Files in this overlay add global scripts for mobile menu, dropdown, FAQ accordion, and WhatsApp CTA tracking.

After copying the overlay into the project, run:

```bash
npm run validate:content
npm run build
npm run preview
```

Manual QA:

- Mobile menu opens/closes.
- Dropdown opens/closes.
- FAQ accordion opens/closes.
- WhatsApp CTA still opens WhatsApp.
- `window.dataLayer` receives `whatsapp_click` after a WhatsApp CTA click.
