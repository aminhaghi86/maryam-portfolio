import React, { lazy, Suspense } from "react";
import { Tab } from "@headlessui/react";

// Lazy-loaded components
const HandyCrafts = lazy(() => import("../HandyCrafts"));
const Painting = lazy(() => import("../Painting"));
const Graphic = lazy(() => import("../Graphic"));
const Design = lazy(() => import("../Design"));
const Illustration = lazy(() => import("../Illustration"));

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const TabHeader = () => {
  const categories = {
    Graphic: {
      component: <Graphic />,
    },
    Painting: {
      component: <Painting />,
    },
    Illustrations: {
      component: <Illustration />,
    },
    Design: {
      component: <Design />,
    },
    HandyCrafts: {
      component: <HandyCrafts />,
    },
  };

  return (
    <div className="w-full px-2 py-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black-900",
                  "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none",
                  selected
                    ? "bg-white shadow"
                    : "text-white hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.entries(categories).map(([, { component }], idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl  p-2",
                "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <Suspense fallback={<div>Loading...</div>}>{component}</Suspense>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default TabHeader;
