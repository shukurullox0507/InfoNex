import http from "services/http";
import { objectToFormData } from "utils";

import { IApi } from "./types";

export const Course = {
   List: () => http.get<IApi.Course.List.Response>("/course_new"),

   Single: (id: string) => http.get<IApi.Course.Single.Response>(`/course_detail/${id}`),

   Speaker: (id: string) => http.get<IApi.Course.Speaker.Response>(`/speaker_profile/${id}`)
};

export const CreateCourse = (formData: IApi.Course.Create.Request) =>
   http.post<IApi.Course.Create.Response>("/course_create/", objectToFormData(formData));
