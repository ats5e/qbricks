import fs from 'fs';
import path from 'path';

const files = [
  "src/app/resources/page.tsx",
  "src/app/about/page.tsx",
  "src/app/product/page.tsx",
  "src/app/why-qbricks/page.tsx",
  "src/components/interactive/UseCases.tsx",
  "src/components/interactive/Hero.tsx",
  "src/components/interactive/ArchitectureMap.tsx",
  "src/components/interactive/FeaturesBento.tsx",
  "src/components/interactive/DeveloperExperience.tsx",
  "src/components/interactive/Agentic.tsx",
  "src/components/interactive/Pipeline.tsx",
  "src/components/interactive/SchemaDrift.tsx"
];

for (let file of files) {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('"use client";')) {
    // Remove all occurrences of "use client"; and following newlines
    content = content.replace(/"use client";\n*/g, '');
    // Ensure it's at the very top
    content = '"use client";\n\n' + content.trimStart();
    fs.writeFileSync(file, content);
  }
}
