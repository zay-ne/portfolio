/**
 * Lebenslaufdaten, zweisprachig.
 *
 * Übernommen aus den fünf Bewerbungsfassungen (Sales, QM, Projektmanagement,
 * Engineering, IT) und auf eine gemeinsame, für ein öffentliches Portfolio
 * passende Fassung zusammengeführt.
 *
 * Bewusst nicht übernommen, weil öffentlich einsehbar: Privatanschrift,
 * Telefonnummer und Geburtsdatum. Die gehören ins Bewerbungs-PDF und, soweit
 * gesetzlich nötig, ins Impressum, nicht auf die Startseite.
 */

export interface CvEntry {
  period: string;
  role: string;
  org: string;
  location?: string;
  description?: string;
  bullets?: string[];
}

export interface SkillGroup {
  group: string;
  items: string[];
}

export interface LanguageSkill {
  name: string;
  level: string;
}

export interface CvContent {
  experience: CvEntry[];
  education: CvEntry[];
  certifications: CvEntry[];
  engagement: CvEntry[];
  skills: SkillGroup[];
  languages: LanguageSkill[];
}

/** TODO: bei inhaltlichen Änderungen mitziehen. */
export const CV_UPDATED = '2026-08-01';

/**
 * Steht auf null, solange keine Datei existiert. Dann erscheint der
 * Download-Knopf gar nicht erst, statt ins Leere zu führen.
 *
 * TODO zum Aktivieren: PDF unter public/lebenslauf.pdf bzw. public/cv.pdf
 * ablegen und die Pfade hier eintragen:
 *   de: '/lebenslauf.pdf',
 *   en: '/cv.pdf',
 */
export const CV_PDF: Record<'de' | 'en', string | null> = {
  de: null,
  en: null,
};

export const cv: Record<'de' | 'en', CvContent> = {
  de: {
    experience: [
      {
        period: '01/2025 – heute',
        role: 'Head of Design, Marketing',
        org: 'Entrepreneurs Club Mainz',
        location: 'Mainz',
        description:
          'Verantwortung für das Erscheinungsbild des Clubs und die gestalterische Seite der Marketingarbeit.',
        bullets: [
          'Konzeption und Steuerung digitaler Kampagnen von der Idee bis zur Ausspielung',
          'Aufbau wiederverwendbarer Design- und Content-Prozesse im Team',
          'Kundenkommunikation und Social-Media-Design',
        ],
      },
      {
        period: '03/2025 – heute',
        role: 'Co-Founder, Produkt und Geschäftsmodell',
        org: 'meedup GbR',
        description:
          'Aufbau eines digitalen Produkts von der Geschäftsmodellidee bis zur Marktvalidierung.',
        bullets: [
          'Entwicklung und Validierung des digitalen Geschäftsmodells am Markt',
          'Ableitung, Bewertung und Priorisierung der Produktanforderungen',
          'Aufbau eines Advisory Boards und Steuerung der Zusammenarbeit mit externen Stakeholdern',
        ],
      },
      {
        period: '02/2022 – heute',
        role: 'Founder, digitale Kundenprojekte und Umsetzung',
        org: 'zayne',
        description:
          'Eigenes Studio für digitale Kundenprojekte: Web- und Content-Lösungen, SEO, Markenidentität und Gestaltung, mit voller Umsatzverantwortung.',
        bullets: [
          'Über 120 Kundenprojekte eigenverantwortlich gesteuert, von der Anforderungsaufnahme über Konzeption und Umsetzung bis zum Livegang',
          'Business-Analyse im direkten Kundengespräch: Anforderungen der Fachseite erheben, bewerten und in funktionale Anforderungen übersetzen',
          'Schnittstelle zwischen Technik und Fachseite: Moderation zwischen Kunden, Entwicklern und Dienstleistern sowie Klärung widersprüchlicher Anforderungen',
          'Entwicklungs-Roadmaps, Termin- und Budgetsteuerung über parallel laufende Projekte hinweg',
          'Qualitätssicherung und Abnahme gemeinsam mit dem Kunden: funktionale Tests, Korrekturschleifen, finale Freigabe',
        ],
      },
      {
        period: '09/2023 – heute',
        role: 'Studentische Hilfskraft & Studienleitung',
        org: 'Universitätsmedizin Göttingen',
        location: 'Göttingen',
        description:
          'Eigenverantwortliche Leitung einer Validierungsstudie zum 3D-System Vectra-H2 in der Ophthalmologie.',
        bullets: [
          'Studiendesign, Versuchsplanung, Durchführung der Messreihen und statistische Auswertung von Genauigkeit und Reproduzierbarkeit',
          'Datenerhebung und -auswertung mit Python und Excel, Datenvalidierung, Aufbereitung als Entscheidungsgrundlage',
          'Systematische Fehlerursachenanalyse an Mess- und Prüfprozessen mit Ishikawa und 5-Why sowie Ableitung von Korrekturmaßnahmen',
          'Abstimmung mit Ärztinnen, Ärzten und medizinischem Fachpersonal sowie Übersetzung fachlicher Bedarfe in technische Anforderungen',
        ],
      },
      {
        period: '03/2024 – 01/2025',
        role: 'Verkäufer (Minijob)',
        org: 'engbers GmbH & Co. KG',
        location: 'Göttingen',
        description: 'Bedarfsorientierte Kundenberatung und Kundenbindung im direkten Kontakt.',
      },
      {
        period: '02/2022 – 04/2022',
        role: 'Praktikant in der Orthetik',
        org: 'Sanitätshaus Seidel',
        location: 'Warburg',
        description:
          'Orthopädietechnische Anfertigung und Anpassung: Materialauswahl, Fertigungsschritte, Prüfung der Passgenauigkeit.',
      },
    ],

    education: [
      {
        period: '04/2025 – vorauss. 12/2026',
        role: 'M. Eng. Medizintechnik',
        org: 'HAWK Göttingen',
        location: 'Göttingen',
        description:
          'Studienschwerpunkte: Projektingenieurwesen, Product Development, Digital Health, Entrepreneurship und Vertrieb sowie Regulatory Affairs und Qualitätsmanagement (MDR, ISO 13485).',
      },
      {
        period: '09/2019 – 12/2024',
        role: 'B. Eng. Medizintechnik',
        org: 'HAWK Göttingen',
        location: 'Göttingen',
        description:
          'Abschlussnote 2,2. Bachelorarbeit: Validierung des 3D-Systems Vectra-H2 für die periorbitale Volumetrie, inklusive Studiendesign, Messreihen und statistischer Auswertung.',
      },
      {
        period: '09/2011 – 06/2019',
        role: 'Allgemeine Hochschulreife',
        org: 'Hüffertgymnasium Warburg',
        location: 'Warburg',
        description: 'Note 2,1.',
      },
    ],

    certifications: [
      {
        period: '2025',
        role: 'Grundkurs Medizinprodukterecht, regulatorische Rahmenbedingungen nach MDR',
        org: 'TÜV SÜD',
      },
      {
        period: '2023 – 2028',
        role: 'Basiszertifikat im Projektmanagement',
        org: 'GPM Deutsche Gesellschaft für Projektmanagement',
      },
    ],

    engagement: [
      {
        period: '04/2025 – heute',
        role: 'Aktives Mitglied, Ethik- und Forschungsethikkommission',
        org: 'HAWK Göttingen',
        description:
          'Prüfung und Bewertung wissenschaftlicher Studienkonzepte auf ethische und datenschutzrechtliche Konformität nach DSGVO.',
      },
      {
        period: '31.05.2024',
        role: 'Referent, 73. Tagung der Vereinigung Norddeutscher Augenärzte',
        org: 'Hannover',
        description:
          'Fachvortrag zur periorbitalen 3D-Volumetrie und zur Validierung des Messsystems vor interdisziplinärem Fachpublikum.',
      },
    ],

    skills: [
      {
        group: 'Entwicklung & Software',
        items: ['Python', 'C++', 'C', 'C#', 'MATLAB/Simulink', 'LabVIEW', 'Git/GitHub', 'Cloudflare', 'LaTeX', 'Claude Code'],
      },
      {
        group: 'Gestaltung & Marke',
        items: ['Markenidentität', 'Figma', 'Design-Systeme', 'Kampagnen', 'Social-Media-Design', 'SEO'],
      },
      {
        group: 'Projekt & Prozess',
        items: ['Projektmanagement (GPM)', 'Requirements Engineering', 'Business-Analyse', 'Scrum & Kanban', 'Stakeholder-Management', 'Six Sigma', 'FMEA', 'KVP'],
      },
      {
        group: 'Medizintechnik & Regulatorik',
        items: ['MDR (EU) 2017/745', 'MPDG', 'ISO 13485', 'ISO 9001', 'ISO 14971', 'Messsystemanalyse', 'CAD (Creo)'],
      },
      {
        group: 'Forschung & Daten',
        items: ['Studiendesign', 'statistische Auswertung', 'Datenvalidierung', 'MeVisLab', '3D Slicer', 'ImageJ', 'DICOM/PACS'],
      },
    ],

    languages: [
      { name: 'Deutsch', level: 'Muttersprache' },
      { name: 'Englisch', level: 'verhandlungssicher' },
      { name: 'Arabisch', level: 'Grundkenntnisse' },
      { name: 'Französisch', level: 'Grundkenntnisse' },
    ],
  },

  en: {
    experience: [
      {
        period: '01/2025 – present',
        role: 'Head of Design, Marketing',
        org: 'Entrepreneurs Club Mainz',
        location: 'Mainz',
        description: "Responsible for the club's visual identity and the design side of its marketing work.",
        bullets: [
          'Concept and delivery of digital campaigns, from idea to publication',
          'Building reusable design and content processes across the team',
          'Client communication and social media design',
        ],
      },
      {
        period: '03/2025 – present',
        role: 'Co-founder, product and business model',
        org: 'meedup GbR',
        description: 'Building a digital product from business model to market validation.',
        bullets: [
          'Development and market validation of the digital business model',
          'Deriving, assessing and prioritising product requirements',
          'Setting up an advisory board and steering work with external stakeholders',
        ],
      },
      {
        period: '02/2022 – present',
        role: 'Founder, digital client projects and delivery',
        org: 'zayne',
        description:
          'My own studio for digital client work: web and content solutions, SEO, brand identity and design, with full revenue responsibility.',
        bullets: [
          'Over 120 client projects owned end to end, from requirements through concept and build to go-live',
          'Business analysis in direct client conversation: eliciting, assessing and translating needs into functional requirements',
          'The interface between engineering and the business side: facilitating between clients, developers and suppliers, resolving conflicting requirements',
          'Development roadmaps, schedule and budget control across parallel projects',
          'Quality assurance and sign-off with the client: functional testing, correction rounds, final release',
        ],
      },
      {
        period: '09/2023 – present',
        role: 'Research assistant & study lead',
        org: 'Göttingen University Medical Center',
        location: 'Göttingen',
        description:
          'Leading a validation study of the Vectra-H2 3D system in ophthalmology.',
        bullets: [
          'Study design, test planning, measurement series and statistical assessment of accuracy and reproducibility',
          'Data collection and analysis in Python and Excel, data validation, preparation as a basis for decisions',
          'Systematic root-cause analysis of measurement and inspection processes using Ishikawa and 5-Why, plus corrective actions',
          'Working with physicians and clinical staff, translating their needs into technical requirements',
        ],
      },
      {
        period: '03/2024 – 01/2025',
        role: 'Sales assistant (part-time)',
        org: 'engbers GmbH & Co. KG',
        location: 'Göttingen',
        description: 'Needs-based customer advice and retention in direct contact.',
      },
      {
        period: '02/2022 – 04/2022',
        role: 'Intern, orthotics',
        org: 'Sanitätshaus Seidel',
        location: 'Warburg',
        description:
          'Orthopaedic manufacture and fitting: material selection, production steps, checking fit accuracy.',
      },
    ],

    education: [
      {
        period: '04/2025 – expected 12/2026',
        role: 'M. Eng. Medical Engineering',
        org: 'HAWK Göttingen',
        location: 'Göttingen',
        description:
          'Focus: project engineering, product development, digital health, entrepreneurship and sales, plus regulatory affairs and quality management (MDR, ISO 13485).',
      },
      {
        period: '09/2019 – 12/2024',
        role: 'B. Eng. Medical Engineering',
        org: 'HAWK Göttingen',
        location: 'Göttingen',
        description:
          'Final grade 2.2 (German scale). Thesis: validation of the Vectra-H2 3D system for periorbital volumetry, including study design, measurement series and statistical analysis.',
      },
      {
        period: '09/2011 – 06/2019',
        role: 'Abitur (university entrance qualification)',
        org: 'Hüffertgymnasium Warburg',
        location: 'Warburg',
        description: 'Grade 2.1 (German scale).',
      },
    ],

    certifications: [
      {
        period: '2025',
        role: 'Medical device law and MDR regulatory framework, foundation course',
        org: 'TÜV SÜD',
      },
      {
        period: '2023 – 2028',
        role: 'Basic certificate in project management',
        org: 'GPM German Association for Project Management',
      },
    ],

    engagement: [
      {
        period: '04/2025 – present',
        role: 'Member, ethics and research ethics committee',
        org: 'HAWK Göttingen',
        description:
          'Reviewing scientific study designs for ethical and GDPR compliance.',
      },
      {
        period: '31 May 2024',
        role: 'Speaker, 73rd meeting of the North German Ophthalmological Society',
        org: 'Hanover',
        description:
          'Talk on periorbital 3D volumetry and the validation of the measurement system, to an interdisciplinary audience.',
      },
    ],

    skills: [
      {
        group: 'Engineering & software',
        items: ['Python', 'C++', 'C', 'C#', 'MATLAB/Simulink', 'LabVIEW', 'Git/GitHub', 'Cloudflare', 'LaTeX', 'Claude Code'],
      },
      {
        group: 'Design & brand',
        items: ['Brand identity', 'Figma', 'design systems', 'campaigns', 'social media design', 'SEO'],
      },
      {
        group: 'Project & process',
        items: ['Project management (GPM)', 'requirements engineering', 'business analysis', 'Scrum & Kanban', 'stakeholder management', 'Six Sigma', 'FMEA', 'continuous improvement'],
      },
      {
        group: 'Medical technology & regulatory',
        items: ['MDR (EU) 2017/745', 'MPDG', 'ISO 13485', 'ISO 9001', 'ISO 14971', 'measurement system analysis', 'CAD (Creo)'],
      },
      {
        group: 'Research & data',
        items: ['Study design', 'statistical analysis', 'data validation', 'MeVisLab', '3D Slicer', 'ImageJ', 'DICOM/PACS'],
      },
    ],

    languages: [
      { name: 'German', level: 'native' },
      { name: 'English', level: 'full professional' },
      { name: 'Arabic', level: 'basic' },
      { name: 'French', level: 'basic' },
    ],
  },
};
