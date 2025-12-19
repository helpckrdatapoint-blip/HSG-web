"use client";

import Link from "next/link";
import { ShieldCheck, Users, CheckCircle, AlertCircle, ArrowRight } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-bold text-zinc-900">Admin Dashboard</h1>
            <p className="text-zinc-500 mt-1">Approve student logins and manage unit data.</p>
          </div>
          <Link href="/login" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 hover:bg-zinc-50 text-sm font-semibold">
            Back to Login
            <ArrowRight size={16} className="opacity-60" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="rounded-2xl border border-zinc-200 p-6">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
              <ShieldCheck size={22} />
            </div>
            <h2 className="text-lg font-bold text-zinc-900 mb-2">Admin Identity</h2>
            <p className="text-zinc-600">Single administrator access with email and password.</p>
          </div>

          <div className="rounded-2xl border border-zinc-200 p-6">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center mb-4">
              <Users size={22} />
            </div>
            <h2 className="text-lg font-bold text-zinc-900 mb-2">Active Students</h2>
            <p className="text-zinc-600">Activated users with full portal access.</p>
          </div>

          <div className="rounded-2xl border border-zinc-200 p-6">
            <div className="w-12 h-12 rounded-xl bg-green-50 text-green-700 flex items-center justify-center mb-4">
              <CheckCircle size={22} />
            </div>
            <h2 className="text-lg font-bold text-zinc-900 mb-2">Approvals</h2>
            <p className="text-zinc-600">Review pending requests and grant acceptance.</p>
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle size={18} className="text-orange-600" />
            <h3 className="text-zinc-900 font-bold">Pending Requests</h3>
          </div>
          <p className="text-zinc-600">No requests yet. Students will appear here for approval.</p>
        </div>
      </div>
    </div>
  );
}
