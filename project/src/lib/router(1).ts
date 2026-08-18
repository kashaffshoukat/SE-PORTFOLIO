import { useEffect, useState, useCallback } from 'react';

/** A tiny hash-based router. Routes: #/  #/work  #/work/<slug>  #/services  #/services/<slug>  #/insights  #/insights/<slug>  #/about  #/contact  #/privacy  #/terms */
export type Route =
  | { name: 'home' }
  | { name: 'work' }
  | { name: 'project'; slug: string }
  | { name: 'services' }
  | { name: 'service'; slug: string }
  | { name: 'insights' }
  | { name: 'article'; slug: string }
  | { name: 'about' }
  | { name: 'contact' }
  | { name: 'privacy' }
  | { name: 'terms' };

export function parseRoute(hash: string): Route {
  const clean = hash.replace(/^#\/?/, '').trim();
  if (!clean) return { name: 'home' };
  const parts = clean.split('/');
  if (parts[0] === 'work') {
    if (parts[1]) return { name: 'project', slug: parts[1] };
    return { name: 'work' };
  }
  if (parts[0] === 'services') {
    if (parts[1]) return { name: 'service', slug: parts[1] };
    return { name: 'services' };
  }
  if (parts[0] === 'insights') {
    if (parts[1]) return { name: 'article', slug: parts[1] };
    return { name: 'insights' };
  }
  if (parts[0] === 'about') return { name: 'about' };
  if (parts[0] === 'contact') return { name: 'contact' };
  if (parts[0] === 'privacy') return { name: 'privacy' };
  if (parts[0] === 'terms') return { name: 'terms' };
  return { name: 'home' };
}

export function routeToHref(route: Route): string {
  switch (route.name) {
    case 'home': return '#/';
    case 'work': return '#/work';
    case 'project': return `#/work/${route.slug}`;
    case 'services': return '#/services';
    case 'service': return `#/services/${route.slug}`;
    case 'insights': return '#/insights';
    case 'article': return `#/insights/${route.slug}`;
    case 'about': return '#/about';
    case 'contact': return '#/contact';
    case 'privacy': return '#/privacy';
    case 'terms': return '#/terms';
  }
}

export function useRouter() {
  const [route, setRoute] = useState<Route>(() => parseRoute(window.location.hash));

  useEffect(() => {
    const onHash = () => {
      setRoute(parseRoute(window.location.hash));
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const navigate = useCallback((to: Route) => {
    window.location.hash = routeToHref(to).slice(1);
  }, []);

  return { route, navigate };
}

/** Scroll to a section id on the home page. Works from any route. */
export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    window.location.hash = '/';
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  }
}
