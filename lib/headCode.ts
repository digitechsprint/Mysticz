/**
 * Parses a raw snippet of <meta>/<link>/<script> tags (as copy-pasted from
 * Search Console, GA4, Meta Pixel, etc.) into plain objects so they can be
 * rendered as real React elements in <head> — safer and more reliable than
 * dangerouslySetInnerHTML on <head> itself, which would wipe out Next's own
 * generated metadata tags, and works for crawlers since it's just server-
 * rendered HTML rather than a client-side DOM patch.
 *
 * Unrecognised tags are silently ignored rather than rendered raw.
 */

export type ParsedHeadTag =
  | { type: 'meta'; attrs: Record<string, string> }
  | { type: 'link'; attrs: Record<string, string> }
  | { type: 'script'; attrs: Record<string, string>; content: string };

function parseAttrs(attrString: string): Record<string, string> {
  const attrs: Record<string, string> = {};
  const attrRegex = /([a-zA-Z_:][a-zA-Z0-9_:.-]*)\s*=\s*(?:"([^"]*)"|'([^']*)')/g;
  let match: RegExpExecArray | null;
  while ((match = attrRegex.exec(attrString))) {
    const [, name, dq, sq] = match;
    attrs[name] = dq !== undefined ? dq : sq;
  }
  return attrs;
}

export function parseHeadCode(raw: string): ParsedHeadTag[] {
  if (!raw?.trim()) return [];
  const tags: ParsedHeadTag[] = [];
  const tagRegex = /<(meta|link)\b([^>]*?)\/?>|<(script)\b([^>]*?)>([\s\S]*?)<\/script\s*>/gi;
  let match: RegExpExecArray | null;
  while ((match = tagRegex.exec(raw))) {
    if (match[1]) {
      const tagName = match[1].toLowerCase() as 'meta' | 'link';
      tags.push({ type: tagName, attrs: parseAttrs(match[2]) });
    } else if (match[3]) {
      tags.push({ type: 'script', attrs: parseAttrs(match[4]), content: match[5] ?? '' });
    }
  }
  return tags;
}
