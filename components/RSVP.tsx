"use client";

import { rsvp } from "@/data/data";
import { useState } from "react";

type Attending = "Այո" | "Ոչ" | null;

export default function AttendanceGuests() {
  const [attending, setAttending] = useState<Attending>(null);
  const [guestCount, setGuestCount] = useState<number | string>("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error" | "";
    text: string;
  }>({ type: "", text: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage({ type: "", text: "" });

    if (attending === null) {
      setMessage({
        type: "error",
        text: "Խնդրում ենք նշել՝ մասնակցում եք։",
      });
      return;
    }

    if (
      attending === "Այո" &&
      (!guestCount || Number(guestCount) <= 0)
    ) {
      setMessage({
        type: "error",
        text: "Խնդրում ենք նշել՝ քանի հոգով եք գալու։",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await fetch(rsvp, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          attending: attending || "",
          guestCount: attending === "Այո" ? String(guestCount) : "0",
        }).toString(),
      });

      setMessage({
        type: "success",
        text: "Շնորհակալություն ❤️",
      });

      setAttending(null);
      setGuestCount("");

      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setMessage({
        type: "error",
        text: "Տեղի է ունեցել սխալ։",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="FontMassis mx-auto w-full max-w-3xl p-6">
      <h1 className="text-2xl font-bold text-vrayi text-center mb-6">
        Հրավերի պատասխան
      </h1>

      {message.text && (
        <div
          className={`p-4 mb-4 rounded-lg ${
            message.type === "success"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {message.text}
        </div>
      )}
      <p className="text-center text-xl my-5">
        Խնդրում ենք նշել՝ մասնակցում եք։
      </p>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Attending */}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setAttending("Այո")}
            className={`flex-1 text-xl  p-3 rounded-lg border transition-all duration-200 ${
              attending === "Այո"
                ? "bg-[#2D2D2D] text-white border-[#2D2D2D]"
                : "bg-white text-black border-gray-300"
            }`}
          >
            Սիրով, այո
          </button>

          <button
            type="button"
            onClick={() => setAttending("Ոչ")}
            className={`flex-1 text-xl p-3 rounded-lg border transition-all duration-200 ${
              attending === "Ոչ"
                ? "bg-[#2D2D2D] text-white border-[#2D2D2D]"
                : "bg-white text-black border-gray-300"
            }`}
          >
            Ցավոք,Ոչ
          </button>
        </div>

        {/* Guest Count */}
        {attending === "Այո" && (
          <input
            type="number"
            value={guestCount}
            onChange={(e) =>
              setGuestCount(
                e.target.value === ""
                  ? ""
                  : Math.max(0, Number(e.target.value))
              )
            }
            placeholder="Քանի հոգով եք գալու"
            className="w-full p-3 border rounded-lg"
          />
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full p-3 bg-[#2D2D2D] text-white rounded-lg"
        >
          {isSubmitting ? "Ուղարկվում է..." : "Ուղարկել"}
        </button>
      </form>
    </div>
  );
}