export const loadCourseData = async (subject: string): Promise<any[]> => {
  const response = await fetch(`/data/${subject}.json`);
  if (!response.ok) {
    throw new Error(`Failed to load data for subject: ${subject}`);
  }
  return response.json();
};
