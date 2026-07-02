"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Dictionary } from "@/lib/i18n";

export function ContactForm({ dict }: { dict: Dictionary }) {
  const schema = z.object({
    name: z.string().min(2, dict.forms.errors.name),
    contact: z.string().min(5, dict.forms.errors.contact),
    project_type: z.string().min(2, dict.forms.errors.projectType),
    budget: z.string().optional(),
    message: z.string().min(10, dict.forms.errors.message)
  });

  type FormValues = z.infer<typeof schema>;

  const projectTypes = dict.forms.projectTypes;
  const budgets = dict.forms.budgets;
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorText, setErrorText] = useState("");

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: zodResolver(schema)
  });

  async function onSubmit(values: FormValues) {
    setStatus("loading");
    setErrorText("");

    try {
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
      setErrorText(dict.forms.error);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="glass-card rounded-[2rem] p-6 md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm text-slate-300">{dict.forms.name}</span>
          <input
            {...register("name")}
            className="w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 outline-none transition placeholder:text-slate-500 focus:border-accent"
            placeholder={dict.forms.placeholders.name}
          />
          {errors.name ? <span className="mt-2 block text-sm text-red-300">{errors.name.message}</span> : null}
        </label>

        <label className="block">
          <span className="mb-2 block text-sm text-slate-300">{dict.forms.contact}</span>
          <input
            {...register("contact")}
            className="w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 outline-none transition placeholder:text-slate-500 focus:border-accent"
            placeholder={dict.forms.placeholders.contact}
          />
          {errors.contact ? <span className="mt-2 block text-sm text-red-300">{errors.contact.message}</span> : null}
        </label>
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm text-slate-300">{dict.forms.projectType}</span>
          <select
            {...register("project_type")}
            className="w-full rounded-2xl border border-white/10 bg-[#101827] px-4 py-4 outline-none transition focus:border-accent"
          >
            <option value="">{dict.forms.projectType}</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          {errors.project_type ? <span className="mt-2 block text-sm text-red-300">{errors.project_type.message}</span> : null}
        </label>

        <label className="block">
          <span className="mb-2 block text-sm text-slate-300">{dict.forms.budget}</span>
          <select
            {...register("budget")}
            className="w-full rounded-2xl border border-white/10 bg-[#101827] px-4 py-4 outline-none transition focus:border-accent"
          >
            {budgets.map((budget) => (
              <option key={budget} value={budget}>{budget}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-5 block">
        <span className="mb-2 block text-sm text-slate-300">{dict.forms.message}</span>
        <textarea
          {...register("message")}
          rows={5}
          className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 outline-none transition placeholder:text-slate-500 focus:border-accent"
          placeholder={dict.forms.placeholders.message}
        />
        {errors.message ? <span className="mt-2 block text-sm text-red-300">{errors.message.message}</span> : null}
      </label>

      <button
        disabled={status === "loading"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-ink transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-70 md:w-auto"
      >
        <Send size={18} />
        {status === "loading" ? dict.forms.submitLoading : dict.forms.submit}
      </button>

      {status === "success" ? (
        <p className="mt-4 text-emerald-300">{dict.forms.success}</p>
      ) : null}

      {status === "error" ? (
        <p className="mt-4 text-red-300">{errorText}</p>
      ) : null}
    </form>
  );
}
