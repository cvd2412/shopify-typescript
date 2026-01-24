import type { FeaturedVariantImage } from './FeaturedVariantImage';
import type { FeaturedVariantMedia } from './FeaturedVariantMedia';

export type ProductVariant = {
  id: number;
  title: string;
  sku: string | null;
  requires_shipping: boolean;
  taxable: boolean;
  featured_image?: FeaturedVariantImage;
  featured_media?: FeaturedVariantMedia;
  available: boolean;
  name: string;
  public_title: string | null;
  options: Array<string>;
  price: number;
  weight: number;
  compare_at_price: number | null;
  inventory_management: string;
  barcode: string | null;
  quantity_rule: {
    increment: number;
    max: number | null;
    min: number;
  };
  unit_price?: string;
  unit_price_measurement?: {
    measured_type: string;
    quantity_value: string;
    quantity_unit: string;
    reference_value: number;
    reference_unit: string;
  };

  // Deprecated properties
  /** @deprecated Prefer to use options instead. */
  option1: string | null;
  /** @deprecated Prefer to use options instead. */
  option2: string | null;
  /** @deprecated Prefer to use options instead. */
  option3: string | null;
};
