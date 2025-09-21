import { Book, Star, GitFork } from "lucide-react";

const RepositoryItem = ({
  name,
  description,
  language,
  languageColor,
  stars,
  forks,
  type = "Framework",
  link,
}: {
  name: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
  type?: string;
  link: string;
}) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-2">
          <Book className="w-4 h-4 text-gray-400" />
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-bold"
          >
            {name}
          </a>
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
            {type}
          </span>
        </div>
      </div>
      <p className="text-sm text-gray-600 mb-3">{description}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 text-xs text-gray-500">
          <div className="flex items-center space-x-1">
            <div className={`w-3 h-3 ${languageColor} rounded-full`}></div>
            <span>{language}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-3 h-3" />
            <span>{stars}</span>
          </div>
          <div className="flex items-center space-x-1">
            <GitFork className="w-3 h-3" />
            <span>{forks}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const SoftwareSection = () => {
  const repositories = [
    {
      name: "air-watch",
      description:
        "AirWatch is a microservice-based system designed to collect, analyze, and detect anomalies in air quality data. This system monitors air quality data from various locations, detects anomalies, and sends notifications when necessary.",
      language: "Java",
      languageColor: "bg-orange-600",
      stars: Math.floor(Math.random() * 100) + 1,
      forks: Math.floor(Math.random() * 100) + 1,
      type: "Software",
      link: "https://github.com/saidturkdogan/air-watch",
    },
    {
      name: "league-simulator",
      description:
        "A Go-based REST API for simulating a football league with 4 teams. This simulator provides realistic match results based on team strengths and maintains comprehensive league standings.",
      language: "Go",
      languageColor: "bg-blue-500",
      stars: Math.floor(Math.random() * 100) + 1,
      forks: Math.floor(Math.random() * 100) + 1,
      type: "Software",
      link: "https://github.com/saidturkdogan/league-simulator",
    },
    {
      name: "gender-age-detection",
      description:
        "Gender and age detection in Python using OpenCV and a Caffe model (deploy.prototxt + .caffemodel). Supports images and video.",
      language: "Python",
      languageColor: "bg-green-500",
      stars: Math.floor(Math.random() * 100) + 1,
      forks: Math.floor(Math.random() * 100) + 1,
      type: "Software",
      link: "https://github.com/saidturkdogan/Gender_Age_Detection",
    },
    {
      name: "e-commerce-microservice-backend",
      description:
        "A Scala-based e-commerce microservice backend using Akka and PostgreSQL. This backend provides a REST API for an e-commerce platform.",
      language: "Scala",
      languageColor: "bg-red-600",
      stars: Math.floor(Math.random() * 100) + 1,
      forks: Math.floor(Math.random() * 100) + 1,
      type: "Software",
      link: "https://github.com/saidturkdogan/ecommerce-microservices",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Software Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {repositories.map((repo, index) => (
          <RepositoryItem
            key={index}
            name={repo.name}
            description={repo.description}
            language={repo.language}
            languageColor={repo.languageColor}
            stars={repo.stars}
            forks={repo.forks}
            type={repo.type}
            link={repo.link}
          />
        ))}
      </div>
    </div>
  );
};

export default SoftwareSection;
