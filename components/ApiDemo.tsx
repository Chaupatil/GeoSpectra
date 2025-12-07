"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

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
    <section id="api" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, Powerful API
          </h2>
          <p className="text-xl text-gray-400">
            Get started in minutes with our intuitive REST API
          </p>
        </div>

        <div className="bg-slate-800 rounded-2xl overflow-hidden shadow-2xl">
          {/* Tabs */}
          <div className="flex border-b border-slate-700 overflow-x-auto">
            {Object.keys(codeExamples).map((lang) => (
              <button
                key={lang}
                onClick={() => setActiveTab(lang as keyof typeof codeExamples)}
                className={`px-6 py-3 font-semibold transition ${
                  activeTab === lang
                    ? "bg-slate-700 text-cyan-400 border-b-2 border-cyan-400"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Code Block */}
          <div className="relative">
            <button
              onClick={copyCode}
              className="absolute top-4 right-4 p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition text-white"
            >
              {copied ? <Check size={20} /> : <Copy size={20} />}
            </button>
            <pre className="p-6 overflow-x-auto text-sm">
              <code className="text-cyan-300">{codeExamples[activeTab]}</code>
            </pre>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="/docs"
            className="text-cyan-400 hover:text-cyan-300 font-semibold"
          >
            View Full API Documentation →
          </a>
        </div>
      </div>
    </section>
  );
}
