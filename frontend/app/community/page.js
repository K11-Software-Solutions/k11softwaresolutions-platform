import React from "react";

const communityCards = [
    {
      title: "Open Source Projects",
      category: "Collaboration & Innovation",
      description:
        "Building and maintaining open source software for the benefit of the tech community. Contributions, feedback, and collaboration are always welcome!",
      details: [
        "Public repositories for tools and libraries",
        "Encouraging community contributions",
        "Transparent development and documentation",
        "Mentorship for new contributors",
      ],
      status: (
        <a
          href="https://github.com/K11-Software-Solutions"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:underline"
        >
          github.com/K11-Software-Solutions
        </a>
      ),
      icon: "🟩",
    },
  {
    title: "Knowledge Sharing & Technical Writing",
    category: "Community Contribution",
    description:
      "Long-form writing and structured explanations aimed at making complex technical, leadership, philosophical and ethical ideas accessible to a wider audience.",
    details: [
      "Research synthesis and contextual interpretation",
      "Clear, structured communication",
      "Educational content design",
    ],
    status: (
      <>
        {/* GitHub company link removed as requested */}
        <a
          href="https://github.com/K11-Software-Solutions/Whitepapers"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:underline block mt-1"
        >
          Read Whitepapers
        </a>
        <a
          href="https://www.softwaretestautomation.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:underline block mt-1"
        >
          Technical Blog
        </a>
      </>
    ),
    icon: "🟦",
  },
  {
    title: "Diversity & Inclusion Initiatives",
    category: "Community Empowerment",
    description:
      "Supporting underrepresented groups in tech through advocacy, mentorship, and accessible learning opportunities.",
    details: [
      "Mentoring women and minorities in tech",
      "Promoting accessibility and inclusive design",
      "Organizing or supporting diversity-focused events",
      "Sharing resources for equitable tech education",
    ],
    status: "Voluntary • Advocacy",
    icon: "🟪",
  },
  {
    title: "K11-Tech-University (YouTube Channel)",
    category: "Tech Education & Community Outreach",
    description:
      "A free, open-access YouTube channel dedicated to sharing practical technology education, tutorials, and career guidance for learners and professionals at all levels.",
    details: [
      "Video tutorials and hands-on demos",
      "Career and learning guidance",
      "Community Q&A and support",
    ],
    status: (
      <a
        href="https://www.youtube.com/@K11-Tech-University"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 hover:underline"
      >
        youtube.com/@K11-Tech-University
      </a>
    ),
    icon: "🟦",
  },
  {
    title: "Decode Gita Wisdom",
    category: "Voluntary Educational Initiative",
    description:
      "An independent, non-monetized initiative focused on exploring the Bhagavad Gita as a framework for clarity, responsibility, and conscious decision-making in modern life.",
    details: [
      "Creating educational content and reflections",
      "Translating classical ideas into practical insights",
      "Encouraging ethical reasoning and discernment",
    ],
    status: (
      <a
        href="https://www.youtube.com/@DecodedGitaWisdom"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 hover:underline"
      >
        youtube.com/@DecodedGitaWisdom
      </a>
    ),
    icon: "🟦",
  },
];

export default function CommunityPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">Community & Voluntary Work</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {communityCards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md border border-blue-100 p-6 flex flex-col gap-3"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{card.icon}</span>
              <span className="text-lg font-semibold text-blue-700">{card.title}</span>
            </div>
            <div className="text-xs font-medium text-blue-600 mb-1">{card.category}</div>
            <div className="text-slate-700 text-sm mb-2">{card.description}</div>
            <ul className="list-disc list-inside text-slate-600 text-sm mb-2">
              {card.details.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <span className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full self-start">{card.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
