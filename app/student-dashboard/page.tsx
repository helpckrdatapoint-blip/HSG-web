"use client";

import Link from "next/link";
import { User, Calendar, Award, Heart, ArrowRight } from "lucide-react";

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-bold text-zinc-900">Student Dashboard</h1>
            <p className="text-zinc-500 mt-1">Access camp registrations, activity logs, and certifications.</p>
          </div>
          <Link href="/login" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 hover:bg-zinc-50 text-sm font-semibold">
            Back to Login
            <ArrowRight size={16} className="opacity-60" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-zinc-200 p-6">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
              <User size={22} />
            </div>
            <h2 className="text-lg font-bold text-zinc-900 mb-2">Profile Status</h2>
            <p className="text-zinc-600">Awaiting admin acceptance to activate full access.</p>
          </div>

          <div className="rounded-2xl border border-zinc-200 p-6">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center mb-4">
              <Calendar size={22} />
            </div>
            <h2 className="text-lg font-bold text-zinc-900 mb-2">Upcoming Camps</h2>
            <p className="text-zinc-600">View events and register when approved.</p>
            <Link href="/#events" className="inline-flex items-center gap-2 text-indigo-700 font-semibold mt-3">
              Explore Events
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="rounded-2xl border border-zinc-200 p-6">
            <div className="w-12 h-12 rounded-xl bg-green-50 text-green-700 flex items-center justify-center mb-4">
              <Award size={22} />
            </div>
            <h2 className="text-lg font-bold text-zinc-900 mb-2">Certifications</h2>
            <p className="text-zinc-600">Track badges and achievements after activation.</p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-red-200 bg-red-50 p-6 flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-white text-red-700 flex items-center justify-center">
            <Heart size={18} />
          </div>
          <div>
            <h3 className="text-zinc-900 font-bold">Blood Donor Wing</h3>
            <p className="text-zinc-600">Register as a donor and check availability.</p>
            <div className="mt-3 flex gap-3">
              <Link href="/blood-donor" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 text-white text-sm font-bold hover:bg-blue-700 transition-colors">
                Register
                <ArrowRight size={16} />
              </Link>
              <Link href="/blood-availability" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 text-sm font-semibold hover:bg-zinc-50">
                Check Availability
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
