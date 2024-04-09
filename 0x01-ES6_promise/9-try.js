export default function guardrail(mathFunction) {
  const container = [];
  try {
    const result = mathFunction();
    container.push(result);
  } catch (error) {
    container.push(`Error: ${error.message}`);
  } finally {
    container.push('Guardrail was processed');
  }
  return container;
}

