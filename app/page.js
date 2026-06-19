"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function WeddingInvite() {
  const [rsvp, setRsvp] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-white flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl w-full bg-white rounded-2xl shadow-xl p-6 text-center"
      >
        <h1 className="text-3xl font-bold mb-2">You're Invited 💍</h1>
        <p className="text-lg">To celebrate the wedding of</p>

        <h2 className="text-2xl font-semibold mt-4">Aarav ❤ Meera</h2>

        <p className="mt-4">Saturday, 12 December 2026</p>
        <p>Vacoas-Phoenix, Mauritius</p>

        <div className="mt-6">
          <p className="mb-4 text-gray-600">
            We would love for you to join us on our special day.
          </p>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => setRsvp("yes")}
              className="bg-green-500 text-white px-4 py-2 rounded-lg"
            >
              Accept ✅
            </button>

            <button
              onClick={() => setRsvp("no")}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Decline ❌
            </button>
          </div>

          {rsvp && (
            <div className="mt-6">
              {rsvp === "yes" ? (
                <p className="text-green-600 font-medium">
                  🎉 Thank you! We can't wait to celebrate with you!
                </p>
              ) : (
                <p className="text-red-600 font-medium">
                  We'll miss you! ❤️ Thanks for letting us know.
                </p>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
