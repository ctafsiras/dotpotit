import Link from "next/link";

export default function ProductCard({ product }: { product: any }) {
    return (
      <div className="bg-white shadow-md rounded-lg ovesrflow-hidden transition-transform duration-300 hover:scale-105">
        <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
        <div className="p-4 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 text-sm mb-2">{product.description}</p>
          </div>
          <div className="mt-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-blue-600">${product.price ? product.price.toFixed(2) : 'N/A'}</span>
              <span className="text-sm text-gray-500">{product.category?.name || 'Uncategorized'}</span>
            </div>
            <Link href={`/products/${product.id}`} className="block w-full text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
              View Details
            </Link>
          </div>
        </div>
      </div>
    );
  }