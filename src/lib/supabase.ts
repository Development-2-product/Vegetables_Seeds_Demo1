import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

// Keep the client optional so an unrelated contact-form configuration issue
// cannot prevent the production app from loading.
export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export interface ProductInquiry {
  full_name: string;
  company_name?: string;
  phone: string;
  email: string;
  location?: string;
  product_interest?: string;
  required_quantity?: string;
  message: string;
}

export async function submitProductInquiry(data: ProductInquiry): Promise<{ success: boolean; error?: string }> {
  if (!supabase) {
    return { success: false, error: 'Inquiry service is not configured.' };
  }

  try {
    const { error } = await supabase.from('product_inquiries').insert({
      full_name: data.full_name,
      company_name: data.company_name || null,
      phone: data.phone,
      email: data.email,
      location: data.location || null,
      product_interest: data.product_interest || null,
      required_quantity: data.required_quantity || null,
      message: data.message,
    });

    if (error) {
      return { success: false, error: 'Unable to submit your request. Please try again.' };
    }

    return { success: true };
  } catch {
    return { success: false, error: 'A network error occurred. Please check your connection and try again.' };
  }
}
