"use client";

import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    features: [
      "1,000 API calls/month",
      "Basic satellite imagery",
      "Community support",
      "10GB data storage",
      "Basic analytics",
    ],
  },
  {
    name: "Pro",
    price: "$99",
    period: "/month",
    popular: true,
    features: [
      "100,000 API calls/month",
      "All satellite sources",
      "Priority email support",
      "1TB data storage",
      "Advanced analytics",
      "Custom processing pipelines",
      "SLA 99.9%",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: [
      "Unlimited API calls",
      "Dedicated infrastructure",
      "24/7 phone support",
      "Unlimited storage",
      "White-label options",
      "Custom integrations",
      "SLA 99.99%",
      "Dedicated account manager",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-24 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Choose the plan that fits your needs. Scale as you grow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl ${
                plan.popular
                  ? "bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-2xl scale-105"
                  : "bg-white border-2 border-slate-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                  MOST POPULAR
                </div>
              )}

              <h3
                className={`text-2xl font-bold mb-2 ${
                  plan.popular ? "text-white" : "text-slate-900"
                }`}
              >
                {plan.name}
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span
                  className={plan.popular ? "text-cyan-100" : "text-gray-600"}
                >
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check
                      className={`flex-shrink-0 ${
                        plan.popular ? "text-cyan-200" : "text-cyan-500"
                      }`}
                    />
                    <span
                      className={
                        plan.popular ? "text-cyan-50" : "text-gray-600"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-full font-semibold transition ${
                  plan.popular
                    ? "bg-white text-cyan-600 hover:bg-gray-100"
                    : "bg-cyan-500 text-white hover:bg-cyan-600"
                }`}
              >
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
