import { xml2js } from "xml-js";

export function xmlToJson(xmlString: string) {
  try {
    const obj = xml2js(xmlString, { compact: true });
    return JSON.stringify(obj, null, 2);
  } catch {
    throw new Error("Invalid XML");
  }
}
