import Image from 'next/image';
import productImage from './section-product-description.jpg';

export default function SectionComponent() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 md:p-8">
      <div className="md:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">Masuga builds websites and manages e-commerce for companies in entertainment.</h2>
        <p className="mb-4">
          Our customer-centric approach empowers brands to maximize their website's reach and value.
        </p>
        <button className="bg-yellow-500 text-black px-4 py-2 mt-4">
          What We Do
        </button>
      </div>
      <div className="md:w-1/2 p-4 flex justify-center">
        <Image src={productImage} alt="Product Image" className="max-w-full h-auto"/>
      </div>
    </div>
  );
}
