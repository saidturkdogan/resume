import React from "react";
import ProfileSidebar from "./ProfileSidebar";
import NewsSection from "./NewsSection";
import PublicationsSection from "./PublicationsSection";
import SoftwareSection from "./SoftwareSection";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar */}
          <ProfileSidebar />

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-8">
              {/* Header */}
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">
                  Said Cemal Türkdoğan
                </h1>
                <div className="prose prose-lg text-gray-700">
                  <p className="mb-4">
                    Hi, I’m Said Cemal Türkdoğan — a software developer
                    passionate about building scalable and impactful
                    applications.
                  </p>
                  <p className="mb-4">
                    Currently, I’m completing my Software Development degree at
                    Yeditepe University, where I’ve gained solid experience in
                    backend systems, microservices, and full-stack development.
                    I’ve worked with technologies such as Go, Scala, React.js,
                    Spring Boot, PostgreSQL, and Docker, contributing to both
                    startup and enterprise-level projects. From developing
                    microservice-based platforms to integrating data analytics
                    with Apache Superset, I enjoy solving complex problems and
                    delivering efficient solutions.
                  </p>
                  <p className="mb-4">
                    My focus is on creating reliable backend architectures,
                    optimizing performance, and designing applications that
                    scale. Beyond technical expertise, I value collaboration,
                    continuous learning, and leveraging technology to drive
                    innovation.
                  </p>
                </div>
              </div>

              {/* News Section */}
              {/* <NewsSection /> */}

              {/* Publications Section */}
              {/* <PublicationsSection /> */}

              {/* Software Section */}
              <SoftwareSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
