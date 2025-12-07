"use client";

import { useState } from "react";
import { Copy, Check, Terminal } from "lucide-react";

const codeExamples = {
  curl: `curl -X POST https://api.satellitedata.io/v1/imagery \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "location": {"lat": 37.7749, "lon": -122.4194},
    "date_range": {"start": "2024-01-01", "end": "2024-12-31"},
    "resolution": "10m",
    "bands": ["red", "green", "blue", "nir"]
  }'`,

  javascript: `const response = await fetch('https://api.satellitedata.io/v1/imagery', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    location: { lat: 37.7749, lon: -122.4194 },
    date_range: { start: '2024-01-01', end: '2024-12-31' },
    resolution: '10m',
    bands: ['red', 'green', 'blue', 'nir']
  })
});

const data = await response.json();
console.log(data);`,

  python: `import requests

response = requests.post(
    'https://api.satellitedata.io/v1/imagery',
    headers={'Authorization': 'Bearer YOUR_API_KEY'},
    json={
        'location': {'lat': 37.7749, 'lon': -122.4194},
        'date_range': {'start': '2024-01-01', 'end': '2024-12-31'},
        'resolution': '10m',
        'bands': ['red', 'green', 'blue', 'nir']
    }
)

data = response.json()
print(data)`,

  java: `HttpClient client = HttpClient.newHttpClient();
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://api.satellitedata.io/v1/imagery"))
    .header("Authorization", "Bearer YOUR_API_KEY")
    .header("Content-Type", "application/json")
    .POST(HttpRequest.BodyPublishers.ofString("""
        {
          "location": {"lat": 37.7749, "lon": -122.4194},
          "date_range": {"start": "2024-01-01", "end": "2024-12-31"},
          "resolution": "10m",
          "bands": ["red", "green", "blue", "nir"]
        }
        """))
    .build();

HttpResponse<String> response = client.send(request, 
    HttpResponse.BodyHandlers.ofString());`,
};

export default function ApiDemo() {
  const [activeTab, setActiveTab] = useState<keyof typeof codeExamples>("curl");
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(codeExamples[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="api" className="py-24 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-black to-black" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6 backdrop-blur-sm">
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 text-sm font-medium">
              Simple Integration
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Simple, Powerful API
          </h2>
          <p className="text-xl text-gray-400">
            Get started in minutes with our intuitive REST API
          </p>
        </div>

        <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-800 shadow-2xl shadow-cyan-500/10">
          {/* Tabs */}
          <div className="flex border-b border-gray-800 overflow-x-auto bg-black/40">
            {Object.keys(codeExamples).map((lang) => (
              <button
                key={lang}
                onClick={() => setActiveTab(lang as keyof typeof codeExamples)}
                className={`px-6 py-3 font-semibold transition-all relative ${
                  activeTab === lang
                    ? "text-cyan-400"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {activeTab === lang && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500" />
                )}
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Code Block */}
          <div className="relative">
            <button
              onClick={copyCode}
              className="absolute top-4 right-4 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition text-cyan-400 hover:text-cyan-300 z-10 shadow-lg"
            >
              {copied ? <Check size={20} /> : <Copy size={20} />}
            </button>
            <pre className="p-6 overflow-x-auto text-sm leading-relaxed">
              <code className="text-cyan-300 font-mono">
                {codeExamples[activeTab]}
              </code>
            </pre>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="/docs"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition group"
          >
            View Full API Documentation
            <span className="group-hover:translate-x-1 transition">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
