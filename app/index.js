export default function TeamSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
      <div className="text-center pb-12">
        <h2 className="text-base font-bold text-indigo-600">
          We have the best styling in the market
        </h2>
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
          Check our awesome team members!
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* First team member */}
        <TeamMate
          name="Evan Bacon"
          role="Software Engineer"
          img="https://github.com/evanbacon.png"
        />
        <TeamMate
          name="Lydia Hallie"
          role="Technical Writer"
          img="https://github.com/lydiahallie.png"
        />
      </div>
      {/* GitHub Link */}
      <div className="text-center pt-12">
        <a
          className="text-base font-bold text-indigo-600"
          href="https://github.com/evanbacon/expo-router-tailwind-demo"
        >
          View on GitHub
        </a>
      </div>
    </section>
  );
}

function TeamMate({ img, name, role }) {
  return (
    <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
      <div className="w-full md:w-2/5 h-80">
        <img
          className="object-center object-cover w-full h-full"
          src={img}
          alt="photo"
        />
      </div>
      <div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
        <p className="text-xl text-gray-700 font-bold">{name}</p>
        <p className="text-base text-gray-400 font-normal">{role}</p>
        <p className="text-base leading-relaxed text-gray-500 font-normal">
          Lor ipsumtamet, consectetur adipiscing elit, sed do eiusmod te
        </p>
        <div className="flex justify-start space-x-2">
          {/* Social media icons */}
          {/* ... */}
        </div>
      </div>
    </div>
  );
}
