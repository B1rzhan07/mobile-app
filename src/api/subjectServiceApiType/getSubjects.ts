import {
  getSubjectsResponseApiType,
  ICommonResponseApiType,
} from "./types/GetSubjectResponseApiType";

export const fetchSubjects = async (): Promise<
  ICommonResponseApiType<getSubjectsResponseApiType>
> => {
  const response = await fetch(
    "http://10.25.1.50:8040/api/v1/subjects?limit=1000&program_id=1"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch subjects");
  }

  const data: ICommonResponseApiType<getSubjectsResponseApiType> =
    await response.json();
  return data;
};
