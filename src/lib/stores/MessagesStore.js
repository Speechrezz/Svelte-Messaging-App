import supabase from '$lib/supabase'
import {readable, get} from 'svelte/store'

const MessagesStore = readable(null, (set) => {
    supabase.from('messages').select('*').then(({error, data}) => set(data))

    // Add subscription
    const subscription = supabase.from('messages').on('*', (payload) => {
        if (payload.eventType === 'INSERT') {
            set([...get(MessagesStore), payload.new])
        }
    }).subscribe();

    return () => supabase.removeSubscription(subscription);
})

export default MessagesStore;