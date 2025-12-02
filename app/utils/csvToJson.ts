function parseCsvLine(line: string) {
    return line.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g)
        ?.map(v => v.replace(/^"|"$/g, "")) || [];
}

export function csvToJson(csv: string) {
    const lines = csv.trim().split("\n");
    const headers = parseCsvLine(lines[0]);

    return lines.slice(1).map(line => {
        const values = parseCsvLine(line);
        const obj: any = {};
        headers.forEach((header, i) => obj[header] = values[i] ?? "");
        return obj;
    });
}