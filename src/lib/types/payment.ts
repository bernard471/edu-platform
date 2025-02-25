export interface PricingTier {
  id: string;
  name: string;
  price: number;
  period?: string;
  currency: string;
  tier: string;
  
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 400,
    currency: 'USD',
    tier: 'basic'

  },  {
    id: 'pro',
    name: 'Pro',
    price: 200,
    period: 'month',
    currency: 'USD',
    tier: 'pro'
  },
  {
    id: 'enterprise',
    name: 'Enterprise', 
    price: 299,
    period: 'month',
    currency: 'USD',
    tier: 'enterprise'
  }
]