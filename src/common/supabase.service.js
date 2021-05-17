import { createClient } from '@supabase/supabase-js'

const SupabaseService = {
    supabase() {
        const supabaseUrl = "https://zdifwmphyohogpfuwopz.supabase.co";
        const supabasePublicKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMTE4ODU4OCwiZXhwIjoxOTM2NzY0NTg4fQ.3aqJBw7LFqDTUP4pKhhcdiIOmOgJihMU_JM-pwLFKJo'
        return createClient(supabaseUrl, supabasePublicKey)
    },

    getUrls(callback) {
        this.supabase()
            .from('urls')
            .select('*')
            // eslint-disable-next-line no-unused-vars
            .then((urls, error) => callback(urls.data))
        // console.log(error);
        // callback(urls);
    }
}

export default SupabaseService;
