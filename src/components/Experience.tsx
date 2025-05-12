
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    company: 'University of Central Florida',
    position: 'Software Engineer',
    period: 'Feb 2024 - May 2025',
    responsibilities: [
      'Developed and maintained internal tools using Java and Spring Boot',
      'Implemented Docker containers for consistent deployment',
      'Assisted in debugging and performance optimization',
      'Collaborated with cross-functional teams for system improvements',
    ],
  },
  {
    company: 'Zoho',
    position: 'Backend Software Engineer',
    period: 'Dec 2021 - June 2023',
    responsibilities: [
      'Developed and maintained microservices using Spring Boot',
      'Implemented database synchronization and caching strategies',
      'Led the migration of legacy systems to microservice architecture',
      'Optimized system performance and reduced response times by 40%',
    ],
  },
  {
    company: 'Conevo Technologies',
    position: 'Software Engineer',
    period: 'Jan 2021 - Nov 2021',
    responsibilities: [
      'Developed and maintained internal tools using Java and Spring Boot',
      'Implemented Docker containers for consistent deployment',
      'Assisted in debugging and performance optimization',
      'Collaborated with cross-functional teams for system improvements',
    ],
  },
];

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <h2 className="section-title text-center">Experience</h2>
          <div className="space-y-12">
            {experiences.map((exp) => (
              <motion.div
                key={exp.company}
                variants={itemVariants}
                className="card"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-textPrimary">
                      {exp.position}
                    </h3>
                    <p className="text-secondary">{exp.company}</p>
                  </div>
                  <p className="text-textSecondary mt-2 md:mt-0">
                    {exp.period}
                  </p>
                </div>
                <ul className="list-disc list-inside space-y-2 text-textSecondary">
                  {exp.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 