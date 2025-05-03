import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Type, 
  Copy, 
  Undo2, 
  Smartphone, 
  PanelTop, 
  AlertCircle, 
  ArrowRight 
} from 'lucide-react';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Turn Plain Text into Stylish Statements
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
            Transform your text with beautiful Unicode styles that work on social media, messaging apps, and documents.
          </p>
          <Link 
            to="/editor" 
            className="inline-flex items-center bg-white text-indigo-600 font-medium px-8 py-3 rounded-lg hover:bg-indigo-50 transition-colors shadow-md"
          >
            Get Started 
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-indigo-100 text-indigo-600 rounded-full w-fit mb-4">
                <Type size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Multiple Styles</h3>
              <p className="text-slate-600">
                Choose from a variety of Unicode styles including bold, italic, script, and more.
              </p>
            </div>
            
            <div className="p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-indigo-100 text-indigo-600 rounded-full w-fit mb-4">
                <Copy size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">One-Click Copy</h3>
              <p className="text-slate-600">
                Copy your styled text instantly with a single click to use anywhere.
              </p>
            </div>
            
            <div className="p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-indigo-100 text-indigo-600 rounded-full w-fit mb-4">
                <Undo2 size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Undo Support</h3>
              <p className="text-slate-600">
                Made a mistake? Use Ctrl+Z to revert to previous versions of your text.
              </p>
            </div>
            
            <div className="p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-indigo-100 text-indigo-600 rounded-full w-fit mb-4">
                <Smartphone size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mobile Friendly</h3>
              <p className="text-slate-600">
                Style your text on any device with our responsive web application.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-center text-slate-600 max-w-3xl mx-auto mb-12">
            Transform your text in three simple steps
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-indigo-100 text-indigo-600 rounded-full">
                  <PanelTop size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Enter Your Text</h3>
              <p className="text-slate-600">
                Type or paste your text in the editor field.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-indigo-100 text-indigo-600 rounded-full">
                  <Type size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Choose a Style</h3>
              <p className="text-slate-600">
                Select from various Unicode font styles to transform your text.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-indigo-100 text-indigo-600 rounded-full">
                  <Copy size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Copy and Use</h3>
              <p className="text-slate-600">
                Copy the styled text with one click and use it anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Important Information Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 max-w-3xl mx-auto">
            <div className="flex items-start">
              <div className="mr-4">
                <AlertCircle className="text-amber-500" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Important Note</h3>
                <p className="text-slate-700 mb-4">
                  While styled Unicode text works in many places, there are some limitations:
                </p>
                <ul className="list-disc list-inside text-slate-700 space-y-2">
                  <li>Some platforms may not display all Unicode characters correctly</li>
                  <li>Unicode text isn't searchable in most search engines</li>
                  <li>Screen readers may have difficulty with styled Unicode text</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Style Your Text?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Try our free Unicode text styler and give your messages a unique flair.
          </p>
          <Link 
            to="/editor" 
            className="inline-flex items-center bg-white text-indigo-600 font-medium px-8 py-3 rounded-lg hover:bg-indigo-50 transition-colors shadow-md"
          >
            Get Started Now
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;