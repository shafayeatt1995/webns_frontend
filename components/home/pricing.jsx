import { Check } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

const plans = [
  {
    name: "Starter",
    tagline: "For Individuals and Small Teams",
    price: "$10 / per month",
    features: [
      "50 Page Unlock",
      "10 GB Storage",
      "6 Team Members",
      "Unlimited Book Mark",
      "Unlimited basic feature",
    ],
    badge: "",
  },
  {
    name: "Professional",
    tagline: "For Individuals and Largest Teams",
    price: "$20 / per month",
    features: [
      "100 Page Unlock",
      "20 GB Storage",
      "8 Team Members",
      "Unlimited Book Mark",
      "Unlimited basic feature",
    ],
    badge: "Best Deal",
  },
  {
    name: "Business",
    tagline: "For Multiples and Largest Teams",
    price: "$100 / per month",
    features: [
      "300 Page Unlock",
      "100 GB Storage",
      "100 Team Members",
      "Unlimited Book Mark",
      "Unlimited basic feature",
    ],
    badge: "",
  },
];

export default function Pricing() {
  return (
    <div className="p-4" id="pricing">
      <div className="max-w-6xl max-lg:max-w-3xl mx-auto">
        <div className="text-center">
          <h2 className="text-slate-900 text-3xl font-bold mb-4">
            Choose the right plan for you
          </h2>
          <p className="text-[15px] text-slate-600">
            Flexible plans designed for individuals, teams, and growing
            businesses.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6 mt-12 max-sm:max-w-sm max-sm:mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`border shadow-sm rounded-md p-6 ${
                plan.badge ? "border-primary" : "border-gray-300"
              }`}
            >
              <h3 className="text-slate-900 text-xl font-semibold mb-3 flex items-center">
                {plan.name}
                {plan.badge && (
                  <span className="px-2 py-1 text-xs font-semibold  bg-primary text-primary-foreground rounded-md ml-3">
                    {plan.badge}
                  </span>
                )}
              </h3>
              <p className="text-[15px] text-slate-600">{plan.tagline}</p>

              <div className="mt-8">
                <h3 className="text-slate-900 text-3xl font-semibold">
                  {plan.price.split(" /")[0]}
                  <sub className="text-slate-600 text-[15px] font-normal">
                    {plan.price.split(" /")[1] &&
                      " /" + plan.price.split(" /")[1]}
                  </sub>
                </h3>
              </div>

              <div className="mt-6">
                <h4 className="text-slate-900 text-lg font-semibold mb-3">
                  Include
                </h4>
                <p className="text-[15px] text-slate-600">
                  Everything you get in this plan
                </p>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-[15px] text-slate-600 font-medium"
                    >
                      <Check className="mr-3 text-green-600 w-5 h-5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button type="button" className="w-full mt-8 font-semibold">
                  Buy Plan
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
