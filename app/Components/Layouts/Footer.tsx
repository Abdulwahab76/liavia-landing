import React from "react";

type FooterSection = {
  title?: string;
  items: string[];
};

const footerData: FooterSection[] = [
  {
    title: "Menu",
    items: ["What we do", "Who we are", "Career", "Group Company Board"],
  },
  {
    title: "Contact",
    items: [
      "Copenhagen Merchants Group",
      "Pakhus 48, Klubiensvej 22",
      "DK-2150 Nordhavn / Copenhagen",
      "Denmark",
      "Tel: +45 3996 6300",
    ],
  },
  {
    title: "Brokerage",
    items: ["CM Copenhagen", "CM Kaunas", "CM Barcelona", "CM Sao Paolo"],
  },
  {
    title: "In the group",
    items: ["Navi Merchants", "CM Batteries", "Schultz Group"],
  },
];

const extraColumns = [
  ["CM Hamburg", "CM Geneva", "CM Dubai"],
  ["CM Navigator", "Aarhus Protein"],
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary relative z-50  border-[#cfc8b8] border-t text-gray-800 px-6 md:px-16 lg:px-24 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-12 gap-x-16">
        {/* Main Sections */}
        {footerData.map((section, idx) => (
          <div key={idx}>
            {section.title && (
              <h4 className="text-xs font-semibold mb-4 tracking-wide">
                {section.title}
              </h4>
            )}

            <ul className="space-y-2">
              {section.items.map((item, i) => (
                <li
                  key={i}
                  className="text-sm leading-relaxed hover:opacity-70 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Right Side Extra Columns */}
        <div className="space-y-10">
          <ul className="space-y-2 mt-6">
            {extraColumns[0].map((item, i) => (
              <li key={i} className="text-sm hover:opacity-70 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>

          <ul className="space-y-2">
            {extraColumns[1].map((item, i) => (
              <li key={i} className="text-sm hover:opacity-70 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-16 flex flex-col sm:flex-row gap-6 text-xs text-gray-600">
        <span className="cursor-pointer hover:underline">Privacy Policy</span>
        <span className="cursor-pointer hover:underline">
          Cookie Declaration
        </span>
      </div>
    </footer>
  );
};

export default Footer;
