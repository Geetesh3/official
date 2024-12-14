import { createClient } from '@supabase/supabase-js';
import { getEnvVariable } from '../utils/env';

const supabaseUrl = getEnvVariable('VITE_SUPABASE_URL');
const supabaseKey = getEnvVariable('VITE_SUPABASE_ANON_KEY');

export const supabase = createClient(supabaseUrl, supabaseKey);