import Ajv from "ajv";
import addFormats from "ajv-formats";

export function validateJson(schema: any, data: any) {
  const ajv = new Ajv({ allErrors: true });
  addFormats(ajv);

  const validate = ajv.compile(schema);
  const valid = validate(data);

  if (valid) return { valid: true, errors: [] };

  return {
    valid: false,
    errors: validate.errors || []
  };
}
