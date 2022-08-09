<script>
	import "../app.css";
	import Navbar from "$lib/components/Navbar.svelte"
	import UserStore from '$lib/stores/UserStore'
	import supabase from "$lib/supabase";

	UserStore.set(supabase.auth.user());

	supabase.auth.onAuthStateChange((_, session) => {
		UserStore.set(session?.user);
	});
</script>

<div class="h-screen flex flex-col justify-start">
	<Navbar />
	<slot />
</div>