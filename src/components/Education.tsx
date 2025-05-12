
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const education = [
  {
    degree: 'M.S. in Computer Science',
    school: 'University of Central Florida',
    period: '2018 - 2020',
    details: 'Focused on software engineering and system architecture',
  },
  
];

const Education = () => {
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
    <section id="education" className="py-20 bg-tertiary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <h2 className="section-title text-center">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu) => (
              <motion.div
                key={edu.degree}
                variants={itemVariants}
                className="card"
              >
                <h3 className="text-xl font-bold text-textPrimary mb-2">
                  {edu.degree}
                </h3>
                <p className="text-secondary mb-2">{edu.school}</p>
                <p className="text-textSecondary mb-2">{edu.period}</p>
                <p className="text-textSecondary">{edu.details}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 