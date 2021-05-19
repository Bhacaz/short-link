import { createClient } from '@supabase/supabase-js'

const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

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
            .limit(10)
            .order('id', {ascending: false})
            // eslint-disable-next-line no-unused-vars
            .then((urls, error) => callback(urls.data))
    },

    getUrlsCount(callback) {
        this.supabase()
            .from('urls')
            .select('count(\'id\')')
            // eslint-disable-next-line no-unused-vars
            .then((count, error) => callback(count.data[0].count))
    },

    getRedirectByShort(short, callback) {
        this.supabase()
            .from('urls')
            .select('url')
            .eq('short', short)
            .limit(1)
            // eslint-disable-next-line no-unused-vars
            .then((url, error) => callback(url.data[0].url))
    },

    createShortUrl(url, callback) {
        const shortCode = genRanHex(10);
        this.supabase()
            .from('urls')
            .insert([
                { url: url, short: shortCode },
            ])
            // eslint-disable-next-line no-unused-vars
            .then((url, error) => callback(url.data[0]))
    }
}

export default SupabaseService;
