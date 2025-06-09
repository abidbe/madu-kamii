import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format currency to Indonesian Rupiah
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
}

// Calculate discount percentage
export function calculateDiscount(original: number, discounted: number): number {
  return Math.round(((original - discounted) / original) * 100);
}

// Generate WhatsApp message
export function generateWhatsAppMessage(productName: string, productPrice?: number): string {
  const baseMessage = `Halo Madu Kamii! 🍯\n\nSaya tertarik dengan produk: ${productName}`;
  const priceMessage = productPrice ? `\nHarga: ${formatCurrency(productPrice)}` : "";
  const endMessage = `\n\nBisa minta informasi lebih lanjut?\nTerima kasih! 😊`;

  return encodeURIComponent(baseMessage + priceMessage + endMessage);
}

// Generate WhatsApp URL
export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/6285267607261?text=${message}`;
}

// Smooth scroll to element
export function scrollToElement(elementId: string): void {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

// Debounce function for performance
export function debounce<T extends (...args: unknown[]) => unknown>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Format phone number
export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, "");
  if (cleaned.startsWith("0")) {
    return "62" + cleaned.slice(1);
  }
  if (cleaned.startsWith("62")) {
    return cleaned;
  }
  return "62" + cleaned;
}

// Validate email
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Get random element from array
export function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

// Intersection observer hook simulation
export function createIntersectionObserver(callback: (entries: IntersectionObserverEntry[]) => void, options?: IntersectionObserverInit): IntersectionObserver {
  return new IntersectionObserver(callback, {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
    ...options,
  });
}
