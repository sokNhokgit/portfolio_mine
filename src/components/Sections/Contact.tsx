export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6">
      <h2 className="text-4xl font-semibold mb-6">Get in Touch</h2>
      <p className="text-gray-700 mb-4 text-center max-w-md">
        Interested in working together or just saying hi? Reach out below!
      </p>
      <a
        href="mailto:youremail@example.com"
        className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
      >
        Contact Me
      </a>
    </div>
  );
}
