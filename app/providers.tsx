"use client";

import dynamic from 'next/dynamic';
import { type ToasterProps } from 'sonner';

const Toaster = dynamic<ToasterProps>(
  () => import('sonner').then((mod) => mod.Toaster),
  { ssr: false }
);

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Toaster position="top-right" richColors expand closeButton />
    </>
  );
}
