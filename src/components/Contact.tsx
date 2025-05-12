
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// const Contact = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };

//   return (
// //     <section id="contact" className="py-20">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //       <motion.div
// //   ref={ref}
// //   initial="hidden"
// //   animate={inView ? "visible" : "hidden"}
// //   variants={containerVariants}
// //   className="text-center max-w-2xl mx-auto"
// // >
// //   <h2 className="section-title">Let’s Connect</h2>
// //   <p className="text-textSecondary text-lg mb-8">
// //     Interested in collaborating or have a project idea? Feel free to reach out through any of the platforms below.
// //   </p>

// //   <motion.div
// //     variants={itemVariants}
// //     className="grid grid-cols-1 sm:grid-cols-3 gap-4"
// //   >
// //     <a
// //       href="https://github.com/yourusername"
// //       target="_blank"
// //       rel="noopener noreferrer"
// //       className="bg-tertiary/60 backdrop-blur-lg p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 hover:scale-105"
// //     >
// //       <span className="text-xl font-semibold">GitHub</span>
// //     </a>
// //     <a
// //       href="https://linkedin.com/in/yourusername"
// //       target="_blank"
// //       rel="noopener noreferrer"
// //       className="bg-tertiary/60 backdrop-blur-lg p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 hover:scale-105"
// //     >
// //       <span className="text-xl font-semibold">LinkedIn</span>
// //     </a>
// //     <a
// //       href="/resume.pdf"
// //       download
// //       className="bg-secondary text-primary p-6 rounded-lg font-semibold shadow-md hover:shadow-xl transition duration-300 hover:scale-105"
// //     >
// //       Download Resume
// //     </a>
// //   </motion.div>
// // </motion.div>

// //       </div>
// //     </section>
// <section id="contact" className="py-20 bg-gray-100 text-gray-800">
//   <div className="max-w-xl mx-auto text-center px-4">
//   <motion.div
//   ref={ref}
//   initial="hidden"
//   animate={inView ? "visible" : "hidden"}
//   variants={containerVariants}
//   className="text-center max-w-2xl mx-auto"
// >
//     <h2 className="text-4xl font-semibold mb-4">Contact</h2>
//     <p className="text-gray-600 mb-10">
//       Feel free to contact me by submitting the form below and I will get back to you as soon as possible.
//     </p>
//     <form className="bg-white p-8 rounded-xl shadow-xl space-y-6 text-left">
//       <div>
//         <label className="block mb-1 font-semibold">Name</label>
//         <input
//           type="text"
//           placeholder="Enter your name"
//           className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
//         />
//       </div>
//       <div>
//         <label className="block mb-1 font-semibold">Email</label>
//         <input
//           type="email"
//           placeholder="Enter your email"
//           className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
//         />
//       </div>
//       <div>
//         <label className="block mb-1 font-semibold">Message</label>
//         <textarea
//           placeholder="Enter your message"
//           rows={5}
//           className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
//         />
//       </div>
//       <div className="text-right">
//         <button
//           type="submit"
//           className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition"
//         >
//           Submit
//         </button>
//       </div>
//     </form>
//   </div>
// </section>

//   );
// };

// export default Contact; 

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
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
    <>
      <section id="contact" className="py-20 bg-gray-100 text-gray-800">
        <div className="max-w-xl mx-auto text-center px-4">
        <motion.div
  ref={ref}
  initial="hidden"
  animate={inView ? "visible" : "hidden"}
  variants={containerVariants}
  className="text-center max-w-2xl mx-auto"
>
          <h2 className="text-4xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-600 mb-10">
            Feel free to contact me by submitting the form below and I will get back to you as soon as possible.
          </p>
          <form className="bg-white p-8 rounded-xl shadow-xl space-y-6 text-left">
            <div>
              <label className="block mb-1 font-semibold">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Message</label>
              <textarea
                placeholder="Enter your message"
                rows={5}
                className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition"
              >
                Submit
              </button>
            </div>
          </form>
          </motion.div>
        </div>
      </section>

      <footer className="bg-black text-white py-12 px-6 mt-20">
      <motion.div
  ref={ref}
  initial="hidden"
  animate={inView ? "visible" : "hidden"}
  variants={containerVariants}
  className="text-center max-w-2xl mx-auto"
>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-2">AKHIL KOYA</h3>
            <p className="text-gray-400 max-w-sm">
              A backend-focused software engineer passionate about building secure,
              scalable systems and solving real-world performance challenges.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">SOCIAL</h4>
            <div className="flex space-x-4 text-xl">
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://yourportfolio.com/blog" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-blog"></i>
              </a>
              <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4">
          © Copyright 2025 · Made by <span className="font-semibold text-white">Akhil Koya</span>
        </div>
        </motion.div>
      </footer>
    </>
  );
};

export default Contact;
