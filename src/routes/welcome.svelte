<script>
	import supabase from "$lib/supabase";
	import UserStore from "$lib/stores/UserStore";

	const handleSignout = () => supabase.auth.signOut();
</script>


<div class="hero h-[30rem] bg-base-200">
	<div class="hero-content text-center">
		<div class="max-w-md">
			<h1 class="text-5xl font-bold">
				{#if (!$UserStore)}
					Hello there
				{:else}
					Welcome, {$UserStore.email}
				{/if}
			</h1>
			<p class="py-6">
				Welcome to this very basic messaging app!
				{#if (!$UserStore)}
					To get started please either sign in or sign up.
				{:else}
					Start messaging!
				{/if}
			</p>
			<div>
				{#if (!$UserStore)}
					<a href="user/signin"><button class="btn btn-primary">Sign in</button></a>
					<a href="user/signup"><button class="btn btn-outline">Sign up</button></a>
				{:else}
					<button on:click={handleSignout} class="btn btn-outline">Sign out</button>
				{/if}
			</div>
		</div>
	</div>
</div>