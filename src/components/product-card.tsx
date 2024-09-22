export default function ProductCard({ product }: { product: any }) {
    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
        <img src="https://prd.place/400" alt={product.name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
          <p className="text-gray-600 text-sm mb-2">{product.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-blue-600">${product.price.toFixed(2)}</span>
            <span className="text-sm text-gray-500">{product.categoryId}</span>
          </div>
          <div className="mt-4 text-xs text-gray-400">
            <p>Created: {product.createdAt.toLocaleDateString()}</p>
            <p>Updated: {product.updatedAt.toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    );
  }