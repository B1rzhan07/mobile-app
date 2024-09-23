export type LocaleKeys = "en" | "ru" | "kk" | "ko" | "ar";
export interface Translation {
  locale: LocaleKeys;
  name: string;
}

export interface Subject {
  id: number;
  program_id: number;
  image_url: string;
  icon_url: string;
  createdAt: Date;
  updatedAt: Date;
  translations: Translation[];
}

export interface getSubjectsResponseApiType {
  subjects: Subject[];
  total: number;
  limit: number;
  offset: number;
  isLastPage: boolean;
}

export interface ICommonResponseApiType<T> {
  success: boolean;
  message: string;
  data: T;
}
