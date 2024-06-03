import Image from 'next/image';
import featureImage from './section-product-description.jpg';

export default function FeaturesSection() {
  return (
    <section className="p-8 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Website Strategy, Design, and Development
        </h2>
        <p className="mb-6">
          If you've got lots of content to manage and distribute to your adoring fans, we’re here to help.
          We have over 17 years of web design, strategy, and development experience. We've been around this long because we put people first.
          Our expertise allows us to define and design effective solutions, but collaboration enables everyone involved to be bold and creative, resulting in high-value results and empowered people.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="feature-box p-4 border rounded-lg shadow-md">
          <Image src={featureImage} alt="Feature 1" className="w-16 h-16 mx-auto mb-4" />
          <h3 className="font-bold text-xl mb-2">Feature 1</h3>
          <p>Short description of feature 1 highlighting its main points.</p>
        </div>
        <div className="feature-box p-4 border rounded-lg shadow-md">
          <Image src={featureImage} alt="Feature 2" className="w-16 h-16 mx-auto mb-4" />
          <h3 className="font-bold text-xl mb-2">Feature 2</h3>
          <p>Short description of feature 2 explaining its benefits.</p>
        </div>
        <div className="feature-box p-4 border rounded-lg shadow-md">
          <Image src={featureImage} alt="Feature 3" className="w-16 h-16 mx-auto mb-4" />
          <h3 className="font-bold text-xl mb-2">Feature 3</h3>
          <p>Short description of feature 3 and how it solves the visitor’s problem.</p>
        </div>
      </div>
    </section>
  );
}
