export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-r from-cyan-500 to-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-cyan-50 mb-8">
          Join hundreds of developers and organizations using our platform to
          build the future.
        </p>
        <button className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition shadow-lg">
          Create Free Account
        </button>
        <p className="mt-4 text-cyan-100">
          No credit card required • 1,000 free API calls
        </p>
      </div>
    </section>
  );
}
