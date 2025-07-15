import React from "react";

export default function Leadership() {
  const leaders = [
    {
      name: "Vasantha Madasu",
      title: "Chief Executive Officer",
      image: "src/AboutUs/assets/leader1.jpg",
      bio: "With over 30 years of versatile experience, Vasantha brings a wealth of strategic leadership and industry knowledge to QvalFocus. Her vision and commitment to excellence continue to drive the company’s innovation and growth.",
      linkedin: "https://www.linkedin.com/in/vasanthamadasu/"
    },
    {
      name: "Anil Nalluri",
      title: "Director of Quality & Client Success",
      image: "src/AboutUs/assets/leader2.jpg",
      bio: "Anil leads our client engagement and quality initiatives with a deep focus on customer satisfaction, operational excellence, and long-term partnerships. His extensive background in validation and client delivery makes him a vital part of our success.",
      linkedin: "https://www.linkedin.com/in/anil-nalluri-567693135"
    },
    {
      name: "Brahmayya Pusuluri",
      title: "Director of IT & Technology",
      image: "src/AboutUs/assets/leader3.jpg",
      bio: "Brahma brings strong technical acumen and leadership in IT strategy, infrastructure, and development. He ensures that our technology-driven solutions align with evolving client needs and industry trends.",
      linkedin: "https://www.linkedin.com/in/brahmapusuluri/"
    },
  ];

  return (
    <section className="bg-[#2d3c53] text-black py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12 text-white">Our Leadership</h2>
        <div className="grid gap-10 md:grid-cols-3">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center transition transform hover:scale-105"
              onClick={() => window.open(leader.linkedin, '_blank')}
              style={{ cursor: "pointer" }}
            >
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full h-72 object-cover"
              />
              <div className="p-6 text-center relative group">
                <h3 className="text-2xl font-bold mb-2 relative inline-block after:block after:h-[2px] after:bg-blue-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-500 group-hover:after:scale-x-100">
                  {leader.name}
                </h3>
                <p className="text-sm font-semibold mb-2">{leader.title}</p>
                <p className="text-sm">{leader.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
