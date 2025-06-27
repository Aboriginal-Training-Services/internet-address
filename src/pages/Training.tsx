import React, { useState } from 'react';
import { Award, Users, CheckCircle, Calendar, BookOpen, Plane, ArrowRight } from 'lucide-react';
import { regulationCourses, applicationCourses } from '../data/courseData';
import CourseCard from '../components/CourseCard';

const Training: React.FC = () => {
  const [activeTab, setActiveTab] = useState('regulation');

  const currentCourses = activeTab === 'regulation' ? regulationCourses : applicationCourses;

  return (
    <div className="bg-gray-50 min-h-screen py-8 sm:py-12 transform transition-all duration-500" style={{ scrollBehavior: 'smooth' }}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-200 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-blue-300 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-blue-400 rounded-full opacity-25 animate-ping"></div>
        <div className="absolute bottom-20 right-10 w-5 h-5 bg-blue-200 rounded-full opacity-30 animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 transform transition-all duration-500 hover:scale-105">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Professional Drone Training Courses
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Comprehensive training programs designed to advance your drone expertise, from basic certification 
            to advanced commercial operations. All courses meet Transport Canada standards.
          </p>
        </div>

        {/* Course Category Tabs */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="bg-white rounded-xl shadow-lg p-1 sm:p-2 transform transition-all duration-500 hover:shadow-xl w-full max-w-md">
            <div className="flex space-x-1 sm:space-x-2">
              <button
                onClick={() => setActiveTab('regulation')}
                className={`flex-1 px-4 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base ${
                  activeTab === 'regulation'
                    ? 'bg-blue-700 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <BookOpen className="inline-block w-4 sm:w-5 h-4 sm:h-5 mr-1 sm:mr-2" />
                <span className="hidden xs:inline">Regulatory</span>
                <span className="xs:hidden">Reg</span>
              </button>
              <button
                onClick={() => setActiveTab('application')}
                className={`flex-1 px-4 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base ${
                  activeTab === 'application'
                    ? 'bg-blue-700 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Plane className="inline-block w-4 sm:w-5 h-4 sm:h-5 mr-1 sm:mr-2" />
                <span className="hidden xs:inline">Application</span>
                <span className="xs:hidden">App</span>
              </button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center transform transition-all duration-500 hover:scale-110 hover:shadow-xl">
            <Award className="h-6 sm:h-8 w-6 sm:w-8 text-blue-600 mx-auto mb-2 sm:mb-3" />
            <div className="text-xl sm:text-2xl font-bold text-gray-900">{currentCourses.length}</div>
            <div className="text-gray-600 text-xs sm:text-base">Course Options</div>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center transform transition-all duration-500 hover:scale-110 hover:shadow-xl">
            <Users className="h-6 sm:h-8 w-6 sm:w-8 text-blue-600 mx-auto mb-2 sm:mb-3" />
            <div className="text-xl sm:text-2xl font-bold text-gray-900">500+</div>
            <div className="text-gray-600 text-xs sm:text-base">Graduates</div>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center transform transition-all duration-500 hover:scale-110 hover:shadow-xl">
            <CheckCircle className="h-6 sm:h-8 w-6 sm:w-8 text-blue-600 mx-auto mb-2 sm:mb-3" />
            <div className="text-xl sm:text-2xl font-bold text-gray-900">98%</div>
            <div className="text-gray-600 text-xs sm:text-base">Pass Rate</div>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center transform transition-all duration-500 hover:scale-110 hover:shadow-xl">
            <Calendar className="h-6 sm:h-8 w-6 sm:w-8 text-blue-600 mx-auto mb-2 sm:mb-3" />
            <div className="text-xl sm:text-2xl font-bold text-gray-900">Year-Round</div>
            <div className="text-gray-600 text-xs sm:text-base">Scheduling</div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {currentCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Additional Information */}
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 transform transition-all duration-500 hover:shadow-2xl">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Course Information & Requirements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">General Prerequisites</h3>
              <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                <li className="transform transition-all duration-300 hover:translate-x-2">• Minimum age varies by course (14-21 years)</li>
                <li className="transform transition-all duration-300 hover:translate-x-2">• Valid government-issued photo ID</li>
                <li className="transform transition-all duration-300 hover:translate-x-2">• Basic English language proficiency</li>
                <li className="transform transition-all duration-300 hover:translate-x-2">• No prior drone experience required for basic courses</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">What to Bring</h3>
              <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                <li className="transform transition-all duration-300 hover:translate-x-2">• Notepad and pen for theory sessions</li>
                <li className="transform transition-all duration-300 hover:translate-x-2">• Weather-appropriate outdoor clothing</li>
                <li className="transform transition-all duration-300 hover:translate-x-2">• Lunch (or purchase on-site)</li>
                <li className="transform transition-all duration-300 hover:translate-x-2">• All equipment and materials provided</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-blue-50 rounded-lg transform transition-all duration-300 hover:bg-blue-100">
            <h3 className="text-base sm:text-lg font-semibold text-blue-900 mb-2 sm:mb-3">Group Discounts Available</h3>
            <p className="text-blue-800 mb-3 sm:mb-4 text-sm sm:text-base">
              Register 3 or more students from the same organization and receive a 15% group discount. 
              Perfect for companies implementing drone programs.
            </p>
            <a
              href="https://calendly.com/majid-abtraining/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-800 font-semibold inline-flex items-center transform transition-all duration-300 hover:translate-x-2 text-sm sm:text-base"
            >
              Schedule group pricing consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;