export function findSample(collection, sampleId) {
  const sample = collection.find((candidate) => candidate.id == sampleId);

  if (!sample) {
    throw new Error(`Unknown sample: ${sampleId}`);
  }

  return sample;
}
