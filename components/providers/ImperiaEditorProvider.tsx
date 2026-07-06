"use client";

import { useEffect } from "react";

/**
 * ImperiaEditorProvider (SDK de Desarrollo)
 * 
 * Este componente permite que la aplicación sea inspeccionada por el editor 
 * de Imperia Visual cuando se carga dentro de un Iframe.
 */
export default function ImperiaEditorProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Solo activar en desarrollo y cuando estemos dentro de un Iframe
    const isDevelopment = process.env.NODE_ENV === 'development';
    const isInsideIframe = typeof window !== 'undefined' && window.self !== window.top;

    if (!isDevelopment || !isInsideIframe) return;

    let selectedElement: HTMLElement | null = null;

    const findMetadataInPath = (path: EventTarget[]) => {
      const data = { id: null as string | null, path: null as string | null };
      for (const target of path) {
        const el = target as HTMLElement;
        if (!el.getAttribute) continue;
        if (!data.id) data.id = el.getAttribute('data-imperia-id');
        if (!data.path) data.path = el.getAttribute('data-imperia-path');
        if (data.id && data.path) break;
        if (el === document.body) break;
      }
      return data;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const meta = findMetadataInPath(e.composedPath());
      
      window.parent.postMessage({
        type: 'IMPERIA_HOVER',
        payload: {
          rect: {
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height
          },
          tagName: target.tagName,
          className: target.className,
          id: meta.id || target.id,
          path: meta.path
        }
      }, '*');
    };

    const handleClick = (e: MouseEvent) => {
      // Intentar prevenir navegación si es un link de Imperia
      const path = e.composedPath();
      const meta = findMetadataInPath(path);
      
      if (meta.id || meta.path) {
        e.preventDefault();
        e.stopPropagation();
      }

      const target = e.target as HTMLElement;
      if (!target) return;

      selectedElement = target; 
      const rect = target.getBoundingClientRect();

      window.parent.postMessage({
        type: 'IMPERIA_SELECT',
        payload: {
          rect: {
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height
          },
          tagName: target.tagName,
          id: meta.id || target.id,
          path: meta.path,
          outerHTML: target.outerHTML.substring(0, 500)
        }
      }, '*');
    };

    const handleScroll = () => {
      const payload: Record<string, unknown> = {
        scrollTop: window.scrollY,
        scrollLeft: window.scrollX
      };

      // Si hay un elemento seleccionado, mandamos su posición actualizada
      if (selectedElement) {
        const rect = selectedElement.getBoundingClientRect();
        payload.selectedRect = {
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height
        };
      }

      window.parent.postMessage({
        type: 'IMPERIA_SCROLL',
        payload
      }, '*');
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick, true);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick, true);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <>{children}</>;
}
