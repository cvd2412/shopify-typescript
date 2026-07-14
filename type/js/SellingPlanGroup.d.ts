import { ProductOption } from './ProductOption';

export type SellingPlanGroup = {
  id: string;
  name: string;
  options: Array<ProductOption>;
  selling_plans: Array<{
    id: number;
    name: string;
    description: string;
    options: Array<{
      name: string;
      position: number;
      value: string;
    }>;
    recurring_deliveries: boolean;
    price_adjustments: Array<{
      order_count: number | null;
      position: number;
      value_type: string;
      value: number;
    }>;
  }>;
  app_id: string;
};
