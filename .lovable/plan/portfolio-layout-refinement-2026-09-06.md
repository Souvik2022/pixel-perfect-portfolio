# Portfolio layout refinement

## Changes
- Rework the project archive into a consistent three-column desktop grid, two-column tablet grid, and single-column phone layout.
- Reduce headline, body, project, and navigation text sizing for a quieter editorial feel and fix cramped navigation spacing.
- Add a clear downloadable CV link using the existing portfolio details.
- Keep only Behance and LinkedIn in the profile links and footer.
- Preserve the current visual identity, imagery, editable data structure, and GSAP loading/reveal motion.

## Technical details
- Update responsive Tailwind classes in the portfolio page and simplify project layout metadata that is no longer needed.
- Generate a lightweight PDF CV in the public assets so the download works immediately; its content will use the current placeholder portfolio information.
- Verify the page at desktop, tablet, and phone widths and confirm the download target is reachable.
