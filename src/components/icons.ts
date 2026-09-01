/**
 * Inline-SVG-Pfade im Lucide-Stil: einheitliche Strichstärke 1.5, 24er-Raster,
 * runde Enden. Bewusst als Datei statt als Paket: es sind acht Icons, und so
 * landet kein Byte im Bundle, das nicht gebraucht wird.
 */
export const iconPaths = {
  'arrow-up-right': '<path d="M7 17 17 7"/><path d="M8 7h9v9"/>',
  'arrow-down': '<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>',
  'arrow-left': '<path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>',
  'arrow-right': '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',
  moon: '<path d="M12 3a6.36 6.36 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
  copy: '<rect width="13" height="13" x="9" y="9" rx="2"/><path d="M5 15a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  close: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  menu: '<path d="M3 8h18"/><path d="M3 16h18"/>',
} as const;

export type IconName = keyof typeof iconPaths;
