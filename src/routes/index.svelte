<script>
	import { onMount } from "svelte";
	import MessageLayout from '$lib/components/MessageLayout.svelte';
	import UserStore from "$lib/stores/UserStore";

	onMount(() => {
		if (!$UserStore)
			window.location.href = "/welcome";
	})
</script>

<main class="flex justify-center h-screen">
	<div class="flex flex-col">
		<h1 class="text-center text-4xl mt-4 mb-10 font-bold">Global Messaging</h1>
		
		<div class="flex-1 flex flex-col justify-end">
			<div class="max-w-[96rem] w-screen rounded-xl bg-base-300 h-full max-h-[calc(100vh-10rem)] p-4">
				<MessageLayout />
			</div>
		</div>
	</div>
</main>