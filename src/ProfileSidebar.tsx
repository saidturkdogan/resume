import React from "react";
import {
  Github,
  ExternalLink,
  Twitter,
  Mail,
  MapPin,
  Calendar,
  Linkedin,
} from "lucide-react";

const ProfileSidebar = () => {
  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
        {/* Profile Image */}
        <div className="mb-6">
          <img
            src="https://r.resimlink.com/fwbDe.jpg"
            alt="Said Cemal Türkdoğan"
            className="w-full rounded-lg object-cover aspect-square"
          />
        </div>

        {/* Name and Title */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Said Cemal Türkdoğan
          </h1>
          <p className="text-gray-600 text-sm">Sofware Developer</p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-3 mb-6">
          <a
            href="https://github.com/saidturkdogan"
            className="text-gray-600 hover:text-gray-900 transition-colors"
            target="_blank"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/saidturkdogan/"
            className="text-gray-600 hover:text-gray-900 transition-colors"
            target="_blank"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://x.com/saidturkdogan"
            className="text-gray-600 hover:text-gray-900 transition-colors"
            target="_blank"
          >
            <Twitter size={20} />
          </a>
        </div>

        {/* Contact Info */}
        <div className="space-y-3 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <Mail size={16} />
            <span>saidcemalturkdogan@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin size={16} />
            <span>Istanbul, Turkey</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar size={16} />
            <span>
              <a
                className="underline underline-offset-2 decoration-2 text-blue-600 hover:text-blue-800 font-medium"
                href="https://drive.google.com/file/d/1QLuG9tmfHbeKPa4BGHzxNSieYXgwZVXI/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                CV
              </a>{" "}
              (as of early 2025)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
