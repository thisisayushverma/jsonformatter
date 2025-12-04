import LZString from "lz-string";

export function createShareLink(json: string) {
    const compressed = LZString.compressToEncodedURIComponent(json);
    return `${window.location.origin}/share#${compressed}`;
}


export function loadSharedJson() {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return null;
    const decompressed = LZString.decompressFromEncodedURIComponent(hash);
    return decompressed;
}