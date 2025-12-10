export default function sitemap() {
    const base = "https://json.ayushverma.dev";
    const now = new Date().toISOString();
  
    return [
      {
        url: `${base}/`,
        lastModified: now,
        changeFrequency: "daily",
        priority: 1.0,
      },
      {
        url: `${base}/json-validator`,
        lastModified: now,
        changeFrequency: "daily",
        priority: 0.9,
      },
      {
        url: `${base}/json-beautifier`,
        lastModified: now,
        changeFrequency: "daily",
        priority: 0.9,
      },
      {
        url: `${base}/json-minifier`,
        lastModified: now,
        changeFrequency: "daily",
        priority: 0.9,
      },
      {
        url: `${base}/csv-json`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.8,
      },
      {
        url: `${base}/xml-json`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.8,
      },
      {
        url: `${base}/yaml-json`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.8,
      },
      {
        url: `${base}/json-to-csv`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.8,
      },
      {
        url: `${base}/json-to-xml`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.8,
      },
      {
        url: `${base}/json-zod`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.85,
      },
      {
        url: `${base}/json-ts-types`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.85,
      },
      {
        url: `${base}/json-schema-validator`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.85,
      },
      {
        url: `${base}/share`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.6,
      },
    ];
  }
  