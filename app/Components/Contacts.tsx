import { Mail, Phone, MapPin } from "lucide-react";

export default function Contacts() {
  return (
    <section
      id="contact"
      className="w-full bg-[#f9fafb] px-6 md:px-20 py-24"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-14">
          <span className="text-sm font-semibold text-[#F6B800]">
            Let’s Connect
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Get in Touch
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl">
            Have a project in mind or need professional web solutions?  
            I’m always open to discussing new ideas and opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="text-[#F6B800] mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">Email</h4>
                <p className="text-gray-600">abiodunvick17@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-[#F6B800] mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">Phone</h4>
                <p className="text-gray-600">+234 704 4956 688</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="text-[#F6B800] mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">Location</h4>
                <p className="text-gray-600">Abuja, Nigeria</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-white rounded-2xl shadow-sm p-8 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="w-full mt-2 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="w-full mt-2 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full mt-2 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-900 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
