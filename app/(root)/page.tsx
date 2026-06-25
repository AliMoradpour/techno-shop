import ProductList from "@/components/shared/product/ProductList";
import data from "@/data/products";

export default function HomePage() {
  return (
    <div>
      <ProductList data={data.products} title="محصــولات" limit={4} />
    </div>
  );
}
