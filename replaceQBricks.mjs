import fs from 'fs';

const files = [
  "src/app/about/page.tsx",
  "src/app/product/page.tsx",
  "src/app/why-qbricks/page.tsx",
  "src/components/interactive/Agentic.tsx",
  "src/components/interactive/ArchitectureMap.tsx",
  "src/components/interactive/DeveloperExperience.tsx",
  "src/components/interactive/FeaturesBento.tsx",
  "src/components/interactive/Hero.tsx",
  "src/components/interactive/Pipeline.tsx",
  "src/components/interactive/SchemaDrift.tsx",
  "src/components/interactive/UseCases.tsx",
  "src/app/resources/page.tsx"
];

const importStmt = `import { QBricksText } from "@/components/ui/QBricksText";\n`;

for (let file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;
  
  // Safe JSX text replacements
  const replacements = {
    '>QBricks & Infinium<': '><QBricksText /> & Infinium<',
    '>QBricks is an AI-enabled': '><QBricksText /> is an AI-enabled',
    'QBricks builds and deploys': '<QBricksText /> builds and deploys',
    'QBricks sits underneath': '<QBricksText /> sits underneath',
    '>The QBricks differentiators<': '>The <QBricksText /> differentiators<',
    'QBricks automates much': '<QBricksText /> automates much',
    'QBricks sits across': '<QBricksText /> sits across',
    '>QBricks metadata foundation<': '><QBricksText /> metadata foundation<',
    '"QBricks metadata foundation"': '<><QBricksText /> metadata foundation</>',
    'QBricks replaces fragile': '<QBricksText /> replaces fragile',
    'text: "QBricks simplifies Databricks and Microsoft Fabric management while remaining cloud-agnostic across the enterprise stack.",': 'text: <><QBricksText /> simplifies Databricks and Microsoft Fabric management while remaining cloud-agnostic across the enterprise stack.</>,',
    '>What QBricks is<': '>What <QBricksText /> is<',
    'QBricks develops and deploys': '<QBricksText /> develops and deploys',
    '>The QBricks Transformation<': '>The <QBricksText /> Transformation<',
    'QBricks turns ungoverned': '<QBricksText /> turns ungoverned',
    '>The QBricks Pipeline<': '>The <QBricksText /> Pipeline<',
    'QBricks uses its': '<QBricksText /> uses its',
    '>The QBricks Way<': '>The <QBricksText /> Way<',
    'QBricks speaks directly': '<QBricksText /> speaks directly',
    'label="How QBricks helps"': 'label={<>How <QBricksText /> helps</>}',
    '["What exactly is QBricks?", "An AI-enabled metadata management platform that builds and deploys data quality and ETL workflows through Data Contracts and Data Products."]': '[<>What exactly is <QBricksText />?</>, <>An AI-enabled metadata management platform that builds and deploys data quality and ETL workflows through Data Contracts and Data Products.</>]',
    '["Which platforms does it work with?", "Databricks, Microsoft Fabric, Snowflake and Quantexa. QBricks is cloud-agnostic."]': '[<>Which platforms does it work with?</>, <>Databricks, Microsoft Fabric, Snowflake and Quantexa. <QBricksText /> is cloud-agnostic.</>]'
  };

  for (const [key, value] of Object.entries(replacements)) {
    if (content.includes(key)) {
      content = content.replace(key, value);
    }
  }

  // Update prop types if we injected JSX into a string prop
  if (file.includes('FeaturesBento.tsx') && content.includes('<><QBricksText />')) {
    content = content.replace('text: string', 'text: React.ReactNode');
  }
  if (file.includes('UseCases.tsx') && content.includes('<><QBricksText />')) {
    content = content.replace('label: string', 'label: React.ReactNode');
  }

  if (content !== original) {
    let lines = content.split('\\n');
    let lastImportIdx = -1;
    for (let i=0; i<lines.length; i++) {
      if (lines[i].startsWith('import ')) lastImportIdx = i;
    }
    lines.splice(lastImportIdx + 1, 0, importStmt);
    
    // Add React import if missing but needed
    if (content.includes('ReactNode') && !content.includes('import React')) {
      lines.unshift("import React from 'react';");
    }

    fs.writeFileSync(file, lines.join('\\n'));
  }
}
