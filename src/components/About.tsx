import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-tertiary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title text-center">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-textSecondary text-lg leading-relaxed mb-6">
              I am a passionate Backend Software Engineer with extensive experience in building
              robust and scalable systems. My expertise lies in Java and Spring Boot development,
              with a strong focus on creating secure and efficient applications.
            </p>
            <p className="text-textSecondary text-lg leading-relaxed mb-6">
              Throughout my career, I have worked on various projects involving Azure deployment,
              system optimization, and microservice architecture. I am particularly skilled in
              database management, API design, and implementing best practices for security and
              performance.
            </p>
            <p className="text-textSecondary text-lg leading-relaxed">
              I am constantly learning and adapting to new technologies while maintaining a strong
              foundation in core software engineering principles. My goal is to create solutions
              that are not only technically sound but also provide real value to users and
              businesses.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 