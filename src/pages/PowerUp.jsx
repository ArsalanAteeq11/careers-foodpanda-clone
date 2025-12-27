import React, { useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import Hero from "../components/Locations/Hero";

const faqs = [
  "What will be a program's content?",
  "What are the modes of recruitment?",
  "What time will the sessions be?",
  "How will I benefit to be eligible for the program?",
  "Will we receive a certificate after the program?",
  "Who can apply? Is it open for everyone?",
  "Will I receive any job-related opportunities after the training?",
  "Will the training be in-person? Is the training be paid, and do I get a job?",
  "How long is the training program? When will the cohort be completed?",
  "Are there any internship opportunities after completing the program? Or any further career development opportunities?",
];

const timeline = [
  {
    icon: "🔍",
    title: "Open for Applications",
    description: "Apply online via the foodpanda careers page",
  },
  {
    icon: "✍️",
    title: "Online Assessment",
    description: "Complete technical and aptitude tests",
  },
  {
    icon: "🎯",
    title: "Interviews",
    description: "HR and technical interview rounds",
  },
  {
    icon: "🏆",
    title: "Selection",
    description: "Successful candidates begin the program",
  },
];

const testimonials = [
  {
    name: "Graduate 1",
    quote:
      "I'm pleased to working in foodpanda. I was given an opportunity to learn how to do problem solving. I enjoy working here, the community is very friendly and supportive which makes me feel I am part of something that creates a significant positive impact in our society as a whole.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
  },
  {
    name: "Graduate 2",
    quote:
      "The PowerUp program gave me hands-on experience with real projects. The mentorship and guidance helped me transition smoothly into a tech career.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
  },
];

export default function PowerUp() {
  const [openFaq, setOpenFaq] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <Hero title="PowerUp! SG Tech Traineeship" />
      {/* Hero Section */}
      <div>
        <img src="./images/9.png" alt="" />
        <div className="text-center font-bold text-white bg-[#ff2b85] text-3xl py-4">
          Commencing 29 Sep 2025
        </div>
      </div>

      {/* Group Photo Section */}
      <div className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop"
            alt="PowerUp Team"
            className="rounded-2xl shadow-lg w-full"
          />
        </div>
      </div>

      {/* What is PowerUp Section */}
      <div className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[#ff2b85] text-2xl md:text-3xl font-bold mb-6">
            What is PowerUp & what makes it unique?
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
            PowerUp! is a comprehensive tech traineeship program designed to
            equip fresh graduates and career switchers with industry-relevant
            skills in software development, data analytics, and digital product
            management.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
            Through hands-on projects, mentorship from industry experts, and
            real-world experience, participants will develop the technical and
            soft skills needed to thrive in the tech industry.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#ff2b85] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#ff2b85] transition-colors duration-300 uppercase tracking-wide text-sm">
              Apply Now
            </button>
            <button className="border-2 border-[#ff2b85] text-[#ff2b85] font-semibold px-8 py-3 rounded-full hover:bg-[#ff2b85] hover:text-white transition-colors duration-300 uppercase tracking-wide text-sm">
              Find out more
            </button>
          </div>
        </div>
      </div>

      {/* Program Highlights */}
      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[#ff2b85] text-2xl md:text-3xl font-bold text-center mb-12">
            Program Highlights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                👥
              </div>
              <h3 className="text-gray-900 font-bold text-xl mb-4">
                Hands-on Training
              </h3>
              <p className="text-gray-600">
                Work on real projects with guidance from experienced tech
                professionals. Learn by doing with practical assignments and
                live coding sessions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                💼
              </div>
              <h3 className="text-gray-900 font-bold text-xl mb-4">
                Benefits support & job
              </h3>
              <p className="text-gray-600">
                Receive stipend support during training. High-performing
                graduates may receive job offers to join our tech team
                full-time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Who We're Looking For */}
      <div className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[#ff2b85] text-2xl md:text-3xl font-bold text-center mb-8">
            Who are we looking for?
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-[#ff2b85] mr-3 mt-1 font-bold text-xl">
                  •
                </span>
                <span className="text-gray-700">
                  Fresh graduates or individuals looking to switch careers into
                  tech
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff2b85] mr-3 mt-1 font-bold text-xl">
                  •
                </span>
                <span className="text-gray-700">
                  Strong problem-solving skills and analytical thinking
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff2b85] mr-3 mt-1 font-bold text-xl">
                  •
                </span>
                <span className="text-gray-700">
                  Passion for technology and continuous learning
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff2b85] mr-3 mt-1 font-bold text-xl">
                  •
                </span>
                <span className="text-gray-700">
                  Good communication and teamwork abilities
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff2b85] mr-3 mt-1 font-bold text-xl">
                  •
                </span>
                <span className="text-gray-700">
                  Basic understanding of programming concepts (preferred but not
                  required)
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Application Timeline */}
      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[#ff2b85] text-2xl md:text-3xl font-bold text-center mb-12">
            Application Timeline
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((step, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 text-center relative"
              >
                <div className="text-5xl mb-4">{step.icon}</div>
                <h3 className="text-gray-900 font-bold text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
                {index < timeline.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-[#ff2b85]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-12 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[#ff2b85] text-2xl md:text-3xl font-bold text-center mb-12">
            Hear from our PowerUp! Graduates
          </h2>

          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/3">
              <div className="relative">
                <div className="absolute -inset-4 bg-[#ff2b85] rounded-2xl transform rotate-3"></div>
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="relative rounded-2xl w-full h-64 object-cover shadow-xl"
                />
              </div>
            </div>

            <div className="lg:w-2/3">
              <div className="bg-white rounded-2xl p-8 shadow-md">
                <p className="text-gray-700 text-base leading-relaxed mb-6 italic">
                  "{testimonials[currentTestimonial].quote}"
                </p>
                <p className="text-[#ff2b85] font-bold">
                  - {testimonials[currentTestimonial].name}
                </p>
              </div>

              <div className="flex justify-center items-center gap-4 mt-6">
                <button
                  onClick={() =>
                    setCurrentTestimonial(
                      (prev) =>
                        (prev - 1 + testimonials.length) % testimonials.length
                    )
                  }
                  className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-[#ff2b85] hover:bg-[#ff2b85] hover:text-white transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentTestimonial(idx)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        idx === currentTestimonial
                          ? "bg-[#ff2b85] w-8"
                          : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() =>
                    setCurrentTestimonial(
                      (prev) => (prev + 1) % testimonials.length
                    )
                  }
                  className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-[#ff2b85] hover:bg-[#ff2b85] hover:text-white transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[#ff2b85] text-2xl md:text-3xl font-bold text-center mb-8">
            FAQs
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <button
                key={index}
                onClick={() => toggleFaq(index)}
                className="w-full bg-[#ff2b85] text-white px-6 py-4 rounded-lg text-left font-semibold hover:bg-[#ff2b85] transition-colors duration-300 flex justify-between items-center"
              >
                {faq}
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-12 px-4 bg-gradient-to-r from-[#ff2b85] to-[#ff2b85]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
            Ready to PowerUp your career?
          </h3>
          <p className="text-white text-lg mb-8">
            Join our next cohort and kickstart your tech journey!
          </p>
          <button className="bg-white text-[#ff2b85] font-semibold px-10 py-4 rounded-full hover:bg-gray-100 transition-colors duration-300 uppercase tracking-wide text-sm shadow-lg">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}
