"use client"
import { useState } from "react"
import { Download } from "lucide-react"

export default function LeapScholarPage() {
  const [showPopup, setShowPopup] = useState(false)
  const [currentView, setCurrentView] = useState("home")
  const [formData, setFormData] = useState({
    userType: "Student",
    reason: "",
    grade: "",
    examTiming: "",
    name: "",
    email: "",
    phone: ""
  })
  const [formStep, setFormStep] = useState(1)

  const successStories = [
    {
      name: "Vedika",
      university: "Studying in Harvard University, USA 🇺🇸",
      testimonial:
        "LeapScholar transformed my SAT prep entirely! Their personalized 1:1 live classes and round-the-clock doubt-clearing support helped me significantly improve—not just my score, but also my confidence. The tutor feedback was insightful and made every concept crystal-clear.",
      beforeScore: 1260,
      afterScore: 1510,
      jump: 250,
    },
    {
      name: "Atharv",
      university: "Studying in Cornell University, USA 🇺🇸",
      testimonial:
        "Thanks to LeapScholar's tailored strategies and expert guidance, I jumped from a 1270 to a 1500+ SAT score in just a few weeks. The 1:1 sessions and detailed performance feedback made all the difference.",
      beforeScore: 1270,
      afterScore: 1530,
      jump: 260,
    },
    {
      name: "Aadya",
      university: "Studying in Columbia University, USA 🇺🇸",
      testimonial:
        "I couldn't have achieved a 15+ score jump without LeapScholar's strategic study plan. Their practice tests were so realistic, and the tutor's feedback helped me target my weak areas effectively.",
      beforeScore: 1120,
      afterScore: 1270,
      jump: 150,
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setShowPopup(false)
    setFormStep(1)
  }

  const handleNext = () => {
    if (formStep === 1 && formData.userType && formData.reason && formData.grade && formData.examTiming) {
      setFormStep(2)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button onClick={() => setCurrentView("home")} className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white rounded transform rotate-45"></div>
              </div>
              <span className="text-xl font-bold">
                <span className="text-indigo-600">LEAP</span>
                <span className="text-orange-500">SCHOLAR</span>
              </span>
            </button>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => setCurrentView("success-stories")}
                className="text-gray-700 hover:text-indigo-600 transition"
              >
                Success Stories
              </button>
              <a href="#features" className="text-gray-700 hover:text-indigo-600 transition">
                Course Features
              </a>
              <a href="#trust" className="text-gray-700 hover:text-indigo-600 transition">
                Why Trust Leap?
              </a>
              <a href="#faqs" className="text-gray-700 hover:text-indigo-600 transition">
                FAQs
              </a>
              <button
                onClick={() => setShowPopup(true)}
                className="flex items-center gap-2 px-4 py-2 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition font-medium"
              >
                <Download className="w-4 h-4" />
                SAT Brochure
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      {currentView === "home" ? (
        <>
          {/* Hero Section */}
       <section className="relative bg-gradient-to-b from-white to-indigo-100 py-20 px-6 overflow-hidden rounded-b-[80px]">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
    {/* Left Content */}
    <div>
      <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
        <span className="text-indigo-600">Highest-Rated</span>{" "}
        <span className="text-gray-900">SAT Course</span>
        <br />
        <span className="text-gray-900">to reach </span>
        <span className="text-indigo-600">1500+ score</span>
      </h1>

      {/* Trustpilot Rating */}
      <div className="flex items-center gap-3 mb-8">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-6 h-6 fill-green-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>
        <span className="text-gray-700 font-semibold">
          Rated 4.7 on TrustPilot
        </span>
      </div>

      {/* Button */}
      <button className="w-full md:w-auto px-12 py-4 bg-indigo-600 text-white rounded-xl text-lg font-semibold hover:bg-indigo-700 transition shadow-lg">
        Book Free SAT Demo
      </button>
    </div>

    {/* Right Content */}
    <div className="relative flex justify-center md:justify-end">
      <div className="relative bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[40px] w-80 h-80 flex items-center justify-center">
        <img
          src="https://ik.imagekit.io/onsnhxjshmp/SEO_project/Ielts-landing-page/sat-lp/khitijnew%20(1)_Kc7OQyPoY.webp"
          alt="Student"
          className="h-[90%] w-auto object-contain relative z-10"
        />

        {/* Info Card */}
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl p-4 shadow-xl w-72 z-20">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold text-gray-900">Kshitij Kant</h3>
            <span className="px-3 py-1 bg-indigo-600 text-white rounded-lg text-xs font-semibold">
              SAT SCORE: 1540
            </span>
          </div>
          <div>
            <p className="font-semibold text-gray-900">Stanford University</p>
            <p className="text-sm text-gray-600">California, USA</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


          {/* Guaranteed SAT Score Section */}
          <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              {/* Heading */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Guaranteed SAT Score</h2>
                <p className="text-2xl md:text-3xl font-semibold text-indigo-600 italic">Jump of 200+ points</p>
              </div>

              {/* Horizontal Scrolling Testimonials */}
              <div className="relative overflow-x-auto scrollbar-hide pb-4 mb-8">
                <div className="flex gap-6 w-max mx-auto">
                  {successStories.map((story, index) => (
                    <div key={index} className="w-[380px] bg-white rounded-2xl shadow-md p-6 border border-gray-100 flex-shrink-0">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-indigo-100">
                          <img
                            src={`https://i.pravatar.cc/150?img=${index + 10}`}
                            alt={story.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-800 text-lg">{story.name}</h3>
                          <p className="text-sm text-gray-500 italic">{story.university}</p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <svg className="w-8 h-8 text-indigo-200 mb-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                        <p className="text-sm text-gray-600 leading-relaxed">{story.testimonial}</p>
                      </div>

                      <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-100">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium text-indigo-600">SAT Score Jump</span>
                          <span className="px-3 py-1 bg-indigo-600 text-white rounded-full text-sm font-semibold">
                            ↑ +{story.jump}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs text-gray-500 mb-1 uppercase">Before</p>
                            <p className="text-3xl font-bold text-gray-800">{story.beforeScore}</p>
                          </div>
                          <div className="text-gray-400 text-2xl">→</div>
                          <div>
                            <p className="text-xs text-gray-500 mb-1 uppercase">After</p>
                            <p className="text-3xl font-bold text-indigo-600">{story.afterScore}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pagination Dots */}
              <div className="flex justify-center gap-2">
                <div className="w-12 h-1 bg-gray-800 rounded-full"></div>
                <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </section>

          {/* Our Students Shine Section */}
       <section className="relative bg-gradient-to-b from-orange-50 to-white py-16 px-6 overflow-hidden rounded-b-[80px]">
  <div className="max-w-7xl mx-auto">
    {/* Heading with decorative images */}
    <div className="flex justify-center items-center gap-6 md:gap-8 mb-12">
      {/* Left decorative image */}
      <img
        src="https://ik.imagekit.io/onsnhxjshmp/SEO_project/Ielts-landing-page/sat-lp/Vector_Kq0R8SHa6.svg"
        alt="stars"
        className="w-5 h-9 md:w-10 md:h-[72px]"
      />

      {/* Heading */}
      <div className="text-center">
        <h2 className="text-xl text-black md:text-[32px] font-bold leading-6 md:leading-[42px]">
          Our Students Shine at
        </h2>
        <h2 className="text-xl text-black md:text-[32px] font-bold leading-6 md:leading-[42px]">
          Ivy League Colleges
        </h2>
      </div>

      {/* Right decorative image (rotated) */}
      <img
        src="https://ik.imagekit.io/onsnhxjshmp/SEO_project/Ielts-landing-page/sat-lp/Vector%20(1)_rI5N7OWyN.svg"
        alt="stars"
        className="w-5 h-9 md:w-10 md:h-[72px]"
      />
    </div>

    {/* Scrolling Universities Container */}
    <div className="w-full max-w-[1152px] mx-auto overflow-hidden">
      <div
        id="universities-container"
        className="flex gap-10 animate-scroll items-center"
      >
        {/* First set */}
        <div className="flex gap-10 shrink-0">
          {[
            {
              name: "Princeton University",
              src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Princeton_seal.svg/1200px-Princeton_seal.svg.png",
            },
            {
              name: "Yale University",
              src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Yale_University_Shield_1.svg/1200px-Yale_University_Shield_1.svg.png",
            },
            {
              name: "University of Pennsylvania",
              src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UPenn_shield_with_banner.svg/1200px-UPenn_shield_with_banner.svg.png",
            },
            {
              name: "Cornell University",
              src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Cornell_University_seal.svg/1200px-Cornell_University_seal.svg.png",
            },
            {
              name: "Columbia University",
              src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Columbia_University_seal.svg/1200px-Columbia_University_seal.svg.png",
            },
          ].map((uni, i) => (
            <div
              key={i}
              className="w-[160px] h-[90px] bg-[#FFF9EC] rounded-xl border border-[#F2DFA0] flex items-center justify-center shadow-[0_2px_6px_rgba(0,0,0,0.05)]"
            >
              <img
                src={uni.src}
                alt={uni.name}
                className="w-[70%] h-[70%] object-contain"
              />
            </div>
          ))}
        </div>

        {/* Duplicate set for seamless scroll */}
        <div className="flex gap-10 shrink-0">
          {[
            {
              name: "Princeton University",
              src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Princeton_seal.svg/1200px-Princeton_seal.svg.png",
            },
            {
              name: "Yale University",
              src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Yale_University_Shield_1.svg/1200px-Yale_University_Shield_1.svg.png",
            },
            {
              name: "University of Pennsylvania",
              src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UPenn_shield_with_banner.svg/1200px-UPenn_shield_with_banner.svg.png",
            },
            {
              name: "Cornell University",
              src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Cornell_University_seal.svg/1200px-Cornell_University_seal.svg.png",
            },
            {
              name: "Columbia University",
              src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Columbia_University_seal.svg/1200px-Columbia_University_seal.svg.png",
            },
          ].map((uni, i) => (
            <div
              key={`dup-${i}`}
              className="w-[160px] h-[90px] bg-[#FFF9EC] rounded-xl border border-[#F2DFA0] flex items-center justify-center shadow-[0_2px_6px_rgba(0,0,0,0.05)]"
            >
              <img
                src={uni.src}
                alt={uni.name}
                className="w-[70%] h-[70%] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Book Demo Button */}
    <div className="text-center mt-12">
      <button className="w-full hidden md:block max-w-[480px] bg-[#4A47FF] rounded-xl shadow-[0_3px_10px_-2px_rgba(28,34,51,0.12)] text-white text-xl font-bold py-4 px-8 hover:bg-indigo-700 transition mx-auto">
        Book Free SAT Demo
      </button>
    </div>
  </div>
</section>

        </>
      ) : (
        <>
          {/* Success Stories Page */}
        </>
      )}

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#4a2dbf] to-[#6039d1] text-white py-16">
      {/* Top Section */}
      <div className="text-center mb-12">
        <div className="flex justify-center items-center mb-6">
          <div className="w-10 h-10 border-2 border-white rounded-md flex items-center justify-center transform rotate-45">
            <div className="w-4 h-4 bg-white rounded-sm -rotate-45"></div>
          </div>
        </div>
        <h2 className="text-3xl font-semibold mb-6">Start your SAT Journey Now!</h2>
        <button className="bg-white text-[#4a2dbf] font-semibold px-8 py-3 rounded-xl hover:bg-gray-100 transition">
          Book Free SAT Demo
        </button>
      </div>

      <div className="border-t border-white/30 my-10 mx-auto w-4/5"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm px-6">
        {/* Logo + Address */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 border-2 border-white rounded-md flex items-center justify-center transform rotate-45">
              <div className="w-3 h-3 bg-white rounded-sm -rotate-45"></div>
            </div>
            <h3 className="text-lg font-bold">LEAPSCHOLAR</h3>
          </div>
          <p>49, 12th Main Rd, Sector 6, HSR Layout, Bengaluru, Karnataka 560102</p>
          <p className="mt-2 text-sm text-gray-200">Follow us on</p>
          <div className="flex gap-4 mt-3">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-3 text-white">Services</h4>
          <ul className="space-y-2 text-gray-200">
            <li>IELTS Coaching</li>
          </ul>
        </div>

        {/* Locations */}
        <div>
          <h4 className="font-semibold mb-3 text-white">Locations</h4>
          <ul className="space-y-2 text-gray-200">
            <li>UAE</li>
            <li>USA</li>
            <li>Singapore</li>
            <li>India</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="font-semibold mb-3 text-white">Contact Us</h4>
          <ul className="space-y-2 text-gray-200">
            <li>
              Phone:{" "}
              <a href="tel:+919008547874" className="hover:underline">
                +91-9008547874
              </a>
            </li>
            <li>
              Mail us on:{" "}
              <a
                href="mailto:sat.international@leapfinance.com"
                className="hover:underline"
              >
                sat.international@leapfinance.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/30 mt-12 pt-6 text-center text-sm text-gray-200">
        <p>© {new Date().getFullYear()} LeapScholar. All rights reserved.</p>
      </div>
    </footer>

      {/* Brochure Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-transparent bg-opacity-95 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full relative max-h-[90vh] overflow-y-auto shadow-2xl">
            <button
              onClick={() => {
                setShowPopup(false)
                setFormStep(1)
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Download SAT Brochure</h2>

            {formStep === 1 ? (
              <div className="space-y-6">
                {/* User Type Selection */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3 text-center">
                    Register yourself as a
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setFormData({...formData, userType: "Parent"})}
                      className={`py-3 px-4 rounded-lg border-2 font-medium transition ${
                        formData.userType === "Parent"
                          ? "border-indigo-600 bg-indigo-50 text-indigo-600"
                          : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                      }`}
                    >
                      Parent
                    </button>
                    <button
                      onClick={() => setFormData({...formData, userType: "Student"})}
                      className={`py-3 px-4 rounded-lg border-2 font-medium transition ${
                        formData.userType === "Student"
                          ? "border-indigo-600 bg-indigo-50 text-indigo-600"
                          : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                      }`}
                    >
                      Student
                    </button>
                  </div>
                </div>

                {/* Reason for Registration */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Why are you registering for SAT Prep today?
                  </label>
                  <div className="relative">
                    <select
                      value={formData.reason}
                      onChange={(e) => setFormData({...formData, reason: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-700 appearance-none bg-white pr-10"
                    >
                      <option value="">Select here</option>
                      <option value="improve-score">Improve my SAT score</option>
                      <option value="first-time">Taking SAT for the first time</option>
                      <option value="retake">Planning to retake SAT</option>
                      <option value="explore">Just exploring options</option>
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Grade Selection */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    In which grade do you currently study?
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {["Grade 10 or less", "Grade 11", "Grade 12"].map((grade) => (
                      <button
                        key={grade}
                        onClick={() => setFormData({...formData, grade})}
                        className={`py-3 px-3 rounded-lg border-2 font-medium text-sm transition ${
                          formData.grade === grade
                            ? "border-indigo-600 bg-indigo-50 text-indigo-600"
                            : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                        }`}
                      >
                        {grade}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Exam Timing */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    When are you taking the SAT exam?
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {["Within 3 months", "Within 3-6 months", "Not decided yet"].map((timing) => (
                      <button
                        key={timing}
                        onClick={() => setFormData({...formData, examTiming: timing})}
                        className={`py-3 px-3 rounded-lg border-2 font-medium text-sm transition ${
                          formData.examTiming === timing
                            ? "border-indigo-600 bg-indigo-50 text-indigo-600"
                            : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                        }`}
                      >
                        {timing}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleNext}
                  disabled={!formData.userType || !formData.reason || !formData.grade || !formData.examTiming}
                  className={`w-full px-6 py-4 rounded-lg font-semibold text-lg transition ${
                    formData.userType && formData.reason && formData.grade && formData.examTiming
                      ? "bg-indigo-600 text-white hover:bg-indigo-700"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  Next
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setFormStep(1)}
                    className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
                  >
                    Download Brochure
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}