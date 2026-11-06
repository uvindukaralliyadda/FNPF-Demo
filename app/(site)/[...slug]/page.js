import { notFound } from 'next/navigation';
import Html from '@/components/Html';
import { getPage, allInnerSlugs } from '@/lib/pages';

export const dynamicParams = false;

export function generateStaticParams() {
  return allInnerSlugs();
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    robots: page.path === '/search/' || page.path === '/404/' ? { index: false } : undefined,
  };
}

export default async function InnerPage({ params }) {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) notFound();
  return <Html html={page.html} />;
}
