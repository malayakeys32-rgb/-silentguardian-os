import { z } from "zod";

export const AlertSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(5),
});

export const ReportSchema = z.object({
  title: z.string().min(2),
  description: z.string().min(5),
});

export const FentanylAlertSchema = z.object({
  location: z.string().min(2),
  description: z.string().min(5),
});
