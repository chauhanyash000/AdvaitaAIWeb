'use client';

import { useEffect, useState } from 'react';
import DashboardSection from '@/components/DashboardSection';

export default function Page() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // or a loading spinner
  }

  return (
    <main>
      <DashboardSection />
    </main>
  );
}
