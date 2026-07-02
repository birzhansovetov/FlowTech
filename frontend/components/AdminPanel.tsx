"use client";

import { useState } from "react";
import { Dictionary } from "@/lib/i18n";

export default function AdminPanel({ dict, apiUrl }: { dict: Dictionary; apiUrl: string }) {
  const [apiKey, setApiKey] = useState("");
  const [leads, setLeads] = useState<any[]>([]);
  const [error, setError] = useState("");

  async function loadLeads() {
    setError("");

    try {
      const response = await fetch(`${apiUrl}/api/admin/leads`, {
        headers: {
          "x-admin-api-key": apiKey
        }
      });

      if (!response.ok) {
        throw new Error("Unauthorized");
      }

      setLeads(await response.json());
    } catch {
      setError(dict.admin.loadError);
    }
  }

  return (
    <>
      <div className="mt-8 flex gap-3">
        <input
          type="password"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          className="flex-1 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 outline-none"
          placeholder={dict.admin.apiKeyPlaceholder}
        />
        <button onClick={loadLeads} className="rounded-2xl bg-white px-6 py-4 font-semibold text-ink">
          {dict.admin.loadButton}
        </button>
      </div>

      {error ? <p className="mt-4 text-red-300">{error}</p> : null}

      <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/10">
        <table className="w-full min-w-[900px] border-collapse text-left text-sm">
          <thead className="bg-white/10 text-slate-200">
            <tr>
              <th className="p-4">{dict.admin.table.date}</th>
              <th className="p-4">{dict.admin.table.name}</th>
              <th className="p-4">{dict.admin.table.contact}</th>
              <th className="p-4">{dict.admin.table.project}</th>
              <th className="p-4">{dict.admin.table.budget}</th>
              <th className="p-4">{dict.admin.table.message}</th>
              <th className="p-4">{dict.admin.table.status}</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} className="border-t border-white/10 align-top">
                <td className="p-4 text-slate-400">{new Date(lead.created_at).toLocaleString()}</td>
                <td className="p-4">{lead.name}</td>
                <td className="p-4">{lead.contact}</td>
                <td className="p-4">{lead.project_type}</td>
                <td className="p-4">{lead.budget || "—"}</td>
                <td className="p-4 text-slate-300">{lead.message}</td>
                <td className="p-4">{lead.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
