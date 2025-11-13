export default function Experience() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 bg-gray-100">
      <h2 className="text-4xl font-semibold mb-6">Experience</h2>
      <div className="max-w-3xl space-y-6">
        <div>
          <h3 className="text-2xl font-bold">Frontend Developer @ XYZ</h3>
          <p className="text-gray-600">Developed interactive interfaces using Next.js and TailwindCSS.</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold">Backend Developer @ ABC</h3>
          <p className="text-gray-600">Built secure APIs and database systems with Node.js and MongoDB.</p>
        </div>
      </div>
    </div>
  );
}
