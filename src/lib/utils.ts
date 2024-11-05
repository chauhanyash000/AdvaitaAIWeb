import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(number: number, options: Intl.NumberFormatOptions = {}) {
  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 2,
    ...options,
  }).format(number);
}

export function formatCurrency(amount: number) {
  return formatNumber(amount, {
    style: 'currency',
    currency: 'USD',
  });
}

export function formatPercentage(value: number) {
  return formatNumber(value, {
    style: 'percent',
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
}

export function truncateText(text: string, length: number) {
  if (text.length <= length) return text;
  return `${text.slice(0, length)}...`;
}

export function getInitials(name: string) {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase();
}

export function getRelativeTime(date: string | Date) {
  const formatter = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
  const diff = new Date(date).getTime() - new Date().getTime();
  const diffInDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  
  if (Math.abs(diffInDays) < 1) {
    const diffInHours = Math.floor(diff / (1000 * 60 * 60));
    if (Math.abs(diffInHours) < 1) {
      const diffInMinutes = Math.floor(diff / (1000 * 60));
      return formatter.format(diffInMinutes, 'minute');
    }
    return formatter.format(diffInHours, 'hour');
  }
  return formatter.format(diffInDays, 'day');
}
