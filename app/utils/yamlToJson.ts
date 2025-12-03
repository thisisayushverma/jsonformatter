import yaml from "js-yaml"

export function yamlToJson(yamlString: string) {
  try {
    const obj = yaml.load(yamlString);
    return JSON.stringify(obj, null, 2);
  } catch (error) {
    
    throw new Error("Invalid YAML"+error);
  }
}
