// Renders CMS-managed page HTML. Plain <a> links keep each page a full,
// crawlable document; behaviour comes from the page bundle script.
export default function Html({ html }) {
  return <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: html }} />;
}
