export interface ArticleStat {
  views: number;
  likes: number;
  activeReaders?: number;
}

export const DEFAULT_ARTICLE_STATS: Record<string, ArticleStat> = {
  'mindful-financial-intelligence-wealth-preservation-2026': { views: 3420, likes: 584, activeReaders: 24 },
  'mindful-time-architecture-female-productivity-2026': { views: 2890, likes: 492, activeReaders: 19 },
  'personal-color-analysis-capsule-wardrobe-2026': { views: 3150, likes: 512, activeReaders: 22 },
  'calm-living-sanctuary-guide-2026': { views: 2470, likes: 388, activeReaders: 16 },
  'hanan-store-official-story-vision-2026': { views: 1980, likes: 341, activeReaders: 14 },
  'physical-digital-minimalism-guide-2026': { views: 2210, likes: 367, activeReaders: 15 },
  'ai-text-to-video-tools-guide-2026': { views: 2640, likes: 418, activeReaders: 18 },
  'ai-article-generator-seo-mastery-2026': { views: 3890, likes: 642, activeReaders: 28 },
  'oud-incense-masterclass-2026': { views: 2980, likes: 489, activeReaders: 21 },
  'goodnotes-time-blocking-mastery-2026': { views: 2150, likes: 356, activeReaders: 13 },
  'fragrance-chemistry-sillage-secrets': { views: 3310, likes: 538, activeReaders: 23 },
  'cybersecurity-ecommerce-2026': { views: 1740, likes: 279, activeReaders: 11 },
  'ai-tools-for-solopreneurs-2026': { views: 2520, likes: 405, activeReaders: 17 },
  'tiktok-snapchat-content-marketing-2026': { views: 2380, likes: 384, activeReaders: 16 },
  'family-event-planning-checklist': { views: 1860, likes: 295, activeReaders: 12 },
  'luxury-gifting-etiquette': { views: 2410, likes: 396, activeReaders: 15 },
  'digital-products-business-2026': { views: 2790, likes: 462, activeReaders: 20 },
  'majlis-hospitality-incense-rituals': { views: 2240, likes: 371, activeReaders: 14 },
  'mindful-journaling-habits': { views: 1690, likes: 283, activeReaders: 10 },
  'gathering-games-guide': { views: 2580, likes: 429, activeReaders: 18 },
  'digital-planner-tips': { views: 2120, likes: 348, activeReaders: 13 },
  'royal-perfumes-guide': { views: 3100, likes: 521, activeReaders: 22 },
  'jewelry-care-guide': { views: 1950, likes: 314, activeReaders: 12 },
  'abayas-styling-guide': { views: 2630, likes: 437, activeReaders: 19 },
  'skincare-routine-guide': { views: 2480, likes: 412, activeReaders: 17 },
};

export const getBaseStat = (articleId: string): ArticleStat => {
  if (DEFAULT_ARTICLE_STATS[articleId]) {
    return { ...DEFAULT_ARTICLE_STATS[articleId] };
  }
  // Generate deterministic realistic initial seed if not found
  let hash = 0;
  for (let i = 0; i < articleId.length; i++) {
    hash = (hash << 5) - hash + articleId.charCodeAt(i);
    hash |= 0;
  }
  const posHash = Math.abs(hash);
  const views = 1200 + (posHash % 2400);
  const likes = Math.floor(views * 0.16) + (posHash % 50);
  const activeReaders = 10 + (posHash % 18);
  return { views, likes, activeReaders };
};

export async function fetchAllArticleStats(): Promise<Record<string, ArticleStat>> {
  try {
    const res = await fetch('/api/articles/stats', { cache: 'no-cache' });
    if (res.ok) {
      const data = await res.json();
      if (data && data.stats) {
        return data.stats;
      }
    }
  } catch (err) {
    // console.warn('Failed to fetch article stats from API, using cached/defaults', err);
  }
  return DEFAULT_ARTICLE_STATS;
}

export async function recordArticleViewApi(articleId: string): Promise<ArticleStat | null> {
  try {
    const res = await fetch(`/api/articles/${encodeURIComponent(articleId)}/view`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    if (res.ok) {
      const data = await res.json();
      return {
        views: data.views,
        likes: data.likes,
        activeReaders: data.activeReaders,
      };
    }
  } catch {
    // ignore
  }
  return null;
}

export async function recordArticleLikeApi(articleId: string, action: 'like' | 'unlike'): Promise<ArticleStat | null> {
  try {
    const res = await fetch(`/api/articles/${encodeURIComponent(articleId)}/like`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action }),
    });
    if (res.ok) {
      const data = await res.json();
      return {
        views: data.views,
        likes: data.likes,
        activeReaders: data.activeReaders,
      };
    }
  } catch {
    // ignore
  }
  return null;
}
