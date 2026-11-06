import Html from '@/components/Html';
import { getPage } from '@/lib/pages';

const page = getPage([]);

export const metadata = { title: page.title, description: page.description };

export default function Home() {
  return <Html html={page.html} />;
}
