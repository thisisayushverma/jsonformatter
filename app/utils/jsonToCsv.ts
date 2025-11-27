export function jsonToCsv(json: any[]): string {
    if (!json.length) return "";

    // Collect all keys from every object (important!)
    const headers = Array.from(new Set(json.flatMap(obj => Object.keys(obj))));

    const rows = json.map(obj =>
        headers
            .map(key => `"${String(obj[key] ?? "").replace(/"/g, '""')}"`) // empty if missing
            .join(",")
    );

    return [headers.join(","), ...rows].join("\n");
}
