import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import maleDeveloperIcon from '../assets/student.png';
import femaleDeveloperIcon from '../assets/actress.png';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const team: TeamMember[] = [
  {
    id: 1,
    name: "Manav Parekh",
    role: "Software Developer",
    image: maleDeveloperIcon,
    bio: "With years of experience in software development, Manav builds scalable and robust applications.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "manav11parekh05@gmail.com"
    }
  },
  {
    id: 2,
    name: "Krishna Vora",
    role: "Software Designer",
    image: maleDeveloperIcon,
    bio: "Krishna specializes in creating intuitive UI/UX designs for modern applications.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "kpvora@gmail.com"
    }
  },
  {
    id: 3,
    name: "Yati",
    role: "Sustainability Director",
    image: femaleDeveloperIcon,
    bio: "Yati ensures projects meet sustainability goals while maintaining high efficiency.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "yati@gmail.com"
    }
  }
];

const Team: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="team" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Meet Our Team</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate professionals committed to building innovative solutions.
          </p>
        </motion.div>

        {/* Desktop Grid Layout */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-md p-4"
            >
              <div className="relative flex items-center justify-center rounded-xl w-full h-72 mb-4">
                <img src={member.image} alt={member.name} className="w-32 h-32 object-contain" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{member.bio}</p>
                <div className="mt-3 flex justify-center space-x-3">
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="text-gray-600 dark:text-gray-300 hover:text-emerald-400">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} className="text-gray-600 dark:text-gray-300 hover:text-emerald-400">
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.email && (
                    <a href={`mailto:${member.social.email}`} className="text-gray-600 dark:text-gray-300 hover:text-emerald-400">
                      <Mail className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="sm:hidden flex space-x-4 overflow-x-auto pb-4 snap-x snap-mandatory">
          {team.map((member) => (
            <motion.div key={member.id} className="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg snap-center min-w-[280px] max-w-[280px] flex-shrink-0">
              <div className="relative flex items-center justify-center rounded-xl w-full h-72 mb-4">
                <img src={member.image} alt={member.name} className="w-32 h-32 object-contain" />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
