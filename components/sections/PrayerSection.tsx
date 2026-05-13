"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeading from "@/components/ui/SectionHeading";

type FormData = {
  name?: string;
  email: string;
  request: string;
  subscribe: boolean;
};

export default function PrayerSection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();

  async function onSubmit(data: FormData) {
    setSubmitError(false);
    try {
      const res = await fetch("/api/prayer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Server error");
      setSubmitted(true);
    } catch {
      setSubmitError(true);
    }
  }

  const inputClass =
    "w-full font-body text-[#2D2416] bg-white border border-[#F5E6A3] rounded-sm px-4 py-3 text-sm placeholder:text-[#7A6E5A] focus:outline-none focus:border-[#D4A017] focus:ring-1 focus:ring-[#D4A017] transition-colors";

  return (
    <section id="prayer" className="py-24 px-6 relative overflow-hidden" style={{ background: "#FDF9F3" }}>
      {/* Radial gold glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center top, rgba(212,160,23,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-2xl mx-auto">
        <ScrollReveal className="text-center mb-10">
          <SectionHeading center>Bring Your Heart to Heaven</SectionHeading>
          <p className="font-body text-[#7A6E5A] leading-relaxed -mt-4">
            Imashi and the United With Heaven team will pray over every request submitted.
            Nothing is too large or too small for the One who opens doors.
          </p>
        </ScrollReveal>

        {submitted ? (
          <ScrollReveal>
            <div className="text-center py-16 px-8 bg-white border border-[#F5E6A3] rounded-sm">
              <div className="text-[#D4A017] text-5xl mb-4">✦</div>
              <p className="font-display italic text-3xl text-[#8B6914] mb-3">
                Your prayer is received. Heaven hears.
              </p>
              <p className="font-body text-[#7A6E5A] text-sm">
                We will stand with you in prayer. Thank you for trusting us with your heart.
              </p>
            </div>
          </ScrollReveal>
        ) : (
          <ScrollReveal delay={0.1}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 bg-white border border-[#F5E6A3] rounded-sm p-8 shadow-sm">
              <div>
                <label className="font-ui text-xs tracking-widest uppercase text-[#8B6914] block mb-1.5">
                  Name <span className="text-[#7A6E5A] text-xs font-body normal-case">(optional)</span>
                </label>
                <input {...register("name")} autoComplete="name" placeholder="Your name" className={inputClass} />
              </div>

              <div>
                <label className="font-ui text-xs tracking-widest uppercase text-[#8B6914] block mb-1.5">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  {...register("email", { required: "Email is required", pattern: { value: /\S+@\S+\.\S+/, message: "Enter a valid email" } })}
                  type="email"
                  autoComplete="email"
                  placeholder="your@email.com"
                  className={inputClass}
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label className="font-ui text-xs tracking-widest uppercase text-[#8B6914] block mb-1.5">
                  Your Prayer Request <span className="text-red-400">*</span>
                </label>
                <textarea
                  {...register("request", { required: "Please share your prayer request" })}
                  rows={5}
                  placeholder="Share your prayer request here. Every word will be received with care..."
                  className={`${inputClass} resize-none`}
                />
                {errors.request && <p className="text-red-400 text-xs mt-1">{errors.request.message}</p>}
              </div>

              <div className="flex items-start gap-3">
                <input
                  {...register("subscribe")}
                  type="checkbox"
                  id="subscribe"
                  className="mt-1 accent-[#D4A017] w-4 h-4 cursor-pointer"
                />
                <label htmlFor="subscribe" className="font-body text-sm text-[#7A6E5A] cursor-pointer leading-relaxed">
                  I&apos;d like to receive Imashi&apos;s weekly prophetic word and updates
                </label>
              </div>

              {/* H9: Network error recovery message */}
              {submitError && (
                <div role="alert" className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-sm px-4 py-3 font-body">
                  Something went wrong sending your request. Please try again, or email us directly.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full font-ui text-sm tracking-widest uppercase bg-[#D4A017] text-[#1C1209] py-4 rounded-sm hover:bg-[#B8860B] transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-[#1C1209]/40 border-t-[#1C1209] rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send My Request"
                )}
              </button>
            </form>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
