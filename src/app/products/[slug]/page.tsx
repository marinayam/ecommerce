import ProductDetailClient from "./ProductDetailClient";

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return <ProductDetailClient slug={params.slug} />;
}
